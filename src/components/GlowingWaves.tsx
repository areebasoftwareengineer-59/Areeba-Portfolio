import React from 'react';

interface GlowingWavesProps {
  position?: 'top' | 'bottom';
  className?: string;
}

export const GlowingWaves: React.FC<GlowingWavesProps> = ({
  position = 'bottom',
  className = '',
}) => {
  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden pointer-events-none z-10 ${
        position === 'bottom' ? 'bottom-0' : 'top-0 rotate-180'
      } ${className}`}
      style={{ height: '140px' }}
    >
      {/* Background radial glow */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-500/15 via-blue-600/10 to-transparent blur-xl" />

      <svg
        className="w-[200%] h-full relative"
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow-wave-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Deep Wave Layer */}
        <path
          className="animate-wave-slow"
          d="M0,80 C320,130 480,20 800,70 C1120,120 1280,30 1600,60 C1920,90 2080,40 2400,80 L2400,160 L0,160 Z"
          fill="url(#wave-grad-1)"
        />

        {/* Medium Wave Layer */}
        <path
          className="animate-wave-medium"
          d="M0,90 C360,30 540,140 900,80 C1260,20 1440,110 1800,70 C2160,30 2340,120 2700,90 L2700,160 L0,160 Z"
          fill="url(#wave-grad-2)"
        />

        {/* Bright Glowing Crest Line */}
        <path
          className="animate-wave-fast"
          d="M0,95 C280,45 420,135 700,85 C980,35 1120,125 1400,75 C1680,25 1820,115 2100,75 C2380,35 2520,125 2800,85"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeOpacity="0.75"
          filter="url(#glow-wave-filter)"
          fill="none"
        />

        {/* Secondary Delicate Glowing Crest Line */}
        <path
          className="animate-wave-slow"
          d="M0,110 C320,60 480,140 800,100 C1120,60 1280,130 1600,95 C1920,60 2080,120 2400,105"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
};
