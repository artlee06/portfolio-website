import React from 'react';

interface GridBackgroundProps {
  opacity?: number;
  className?: string;
  color?: string;
}

export function GridBackground({ opacity = 0.4, className = '', color = '#2e2e2e' }: GridBackgroundProps) {
  return (
    <div
      className={`fixed inset-0 w-screen h-screen pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${color} 1px, transparent 1px),
          linear-gradient(to bottom, ${color} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        opacity: opacity,
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
      }}
    />
  );
} 