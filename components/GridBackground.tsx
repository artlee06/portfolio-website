import React from 'react';

interface GridBackgroundProps {
  opacity?: number;
  className?: string;
  color?: string;
  direction?: 'top-to-bottom' | 'bottom-to-top';
  position?: 'fixed' | 'absolute';
}

export function GridBackground({ 
  opacity = 0.4, 
  className = '', 
  color = '#2e2e2e',
  direction = 'top-to-bottom',
  position = 'fixed'
}: GridBackgroundProps) {
  
  // Define gradient based on direction
  const gradient = direction === 'top-to-bottom'
    ? "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)"
    : "linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)";
  
  // Position class based on the position prop
  const positionClass = position === 'fixed' ? 'fixed' : 'absolute';
  
  return (
    <div
      className={`${positionClass} inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${color} 1px, transparent 1px),
          linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        opacity: opacity,
        maskImage: gradient,
        WebkitMaskImage: gradient,
      }}
    />
  );
} 