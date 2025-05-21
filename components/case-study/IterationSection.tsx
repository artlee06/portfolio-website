"use client"

import type { ReactNode } from "react"
import { Subheader } from "./Typography"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface IterationSectionProps {
  title: string
  children: ReactNode
  videoSrc?: string
  imageSrc?: string
  isReversed?: boolean
}

const isExternalVideo = (url: string) => {
  return url.includes('vimeo.com') || url.includes('youtube.com') || url.includes('youtu.be')
}

const getVideoEmbedUrl = (url: string) => {
  if (url.includes('vimeo.com')) {
    const videoId = url.split('/').pop()?.split('?')[0]
    return `https://player.vimeo.com/video/${videoId}?h=a9c2a9a5e0&autoplay=0&loop=0&muted=0`
  }
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = url.includes('youtube.com') 
      ? new URL(url).searchParams.get('v')
      : url.split('/').pop()?.split('?')[0]
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&loop=0&muted=0`
  }
  return url
}

export function IterationSection({ title, children, videoSrc, imageSrc, isReversed = false }: IterationSectionProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center", isReversed && "md:flex-row-reverse")}>
      <div className={cn("order-2", isReversed ? "md:order-1" : "md:order-2")}>
        <h3 className="text-2xl font-medium mb-6">{title}</h3>
        {children}
      </div>
      <div className={cn("order-1 col-span-2 aspect-video relative overflow-hidden rounded-lg", isReversed ? "md:order-2" : "md:order-1")}>
        {videoSrc ? (
          isExternalVideo(videoSrc) ? (
            <iframe
              src={getVideoEmbedUrl(videoSrc)}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video 
              src={videoSrc} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
          )
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        ) : null}
      </div>
    </div>
  )
}
