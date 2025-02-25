"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useSpring } from "framer-motion"
import { Square3Stack3DIcon, CubeIcon, CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

interface AutoRotatingCubeProps {
  inverse?: boolean
  className?: string
  fastSpin?: boolean
}

export function AutoRotatingCube({ inverse = false, className = "", fastSpin = false }: AutoRotatingCubeProps) {
  const icons = [Square3Stack3DIcon, CubeIcon, CodeBracketIcon, PaintBrushIcon]
  const controls = useAnimation()
  const rotationRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef(0)

  const springConfig = { stiffness: 600, damping: 30 }
  const rotateY = useSpring(0, springConfig)

  useEffect(() => {
    let isMounted = true;
    let animationTimeout: NodeJS.Timeout;

    const rotateCube = async () => {
      if (!isMounted) return;
      
      if (!isDragging) {
        // Use a promise with then() instead of await to avoid issues
        controls.start({ 
          rotateY: rotationRef.current + 810 
        }, { 
          duration: 6, 
          ease: [0.4, 0, 0.2, 1] 
        }).then(() => {
          if (isMounted) {
            rotationRef.current += 810;
            // Schedule the next animation after a delay
            animationTimeout = setTimeout(rotateCube, 4000);
          }
        });
      } else {
        // If dragging, just wait and try again
        animationTimeout = setTimeout(rotateCube, 1000);
      }
    };

    // Start the animation loop after component mounts
    animationTimeout = setTimeout(rotateCube, 100);

    // Cleanup function
    return () => {
      isMounted = false;
      clearTimeout(animationTimeout);
      controls.stop();
    };
  }, [controls, isDragging])

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    dragStartRef.current = clientX
    controls.stop()
  }

  const handleDrag = (clientX: number) => {
    if (isDragging) {
      const dragDelta = clientX - dragStartRef.current
      rotateY.set(rotationRef.current + dragDelta)
    }
  }

  const handleDragEnd = (clientX: number) => {
    if (isDragging) {
      setIsDragging(false)
      const dragDelta = clientX - dragStartRef.current
      const velocity = dragDelta * 0.1 // Adjust this multiplier to change the "flick" sensitivity
      rotationRef.current += dragDelta + velocity
      rotateY.set(rotationRef.current)
    }
  }

  // Mouse event handlers
  const handleMouseDown = (event: React.MouseEvent) => handleDragStart(event.clientX)
  const handleMouseMove = (event: React.MouseEvent) => handleDrag(event.clientX)
  const handleMouseUp = (event: React.MouseEvent) => handleDragEnd(event.clientX)

  // Touch event handlers
  const handleTouchStart = (event: React.TouchEvent) => handleDragStart(event.touches[0].clientX)
  const handleTouchMove = (event: React.TouchEvent) => handleDrag(event.touches[0].clientX)
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (event.changedTouches.length > 0) {
      handleDragEnd(event.changedTouches[0].clientX)
    }
  }

  return (
    <div
      className={`relative perspective w-16 h-16 ${className} cursor-grab active:cursor-grabbing touch-none`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div animate={controls} style={{ rotateY }} className="w-full h-full preserve-3d">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 flex items-center justify-center border-4",
              inverse ? "bg-[#2e2e2e] border-white" : "bg-white border-[#2e2e2e]",
            )}
            style={{
              transform: `rotateY(${index * 90}deg) translateZ(32px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <Icon className={cn("w-8 h-8", inverse ? "text-white" : "text-[#2E2E2E]")} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

