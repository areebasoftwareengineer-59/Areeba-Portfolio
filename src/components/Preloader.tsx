import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Canvas background particles
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{ x: number; y: number; size: number; speedY: number; opacity: number }> = [];
        for (let i = 0; i < 45; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedY: -(Math.random() * 0.8 + 0.2),
            opacity: Math.random() * 0.6 + 0.2
          });
        }

        let animationFrameId: number;
        const render = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';

          particles.forEach((p) => {
            p.y += p.speedY;
            if (p.y < 0) p.y = canvas.height;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`;
            ctx.fill();
          });

          animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
          cancelAnimationFrame(animationFrameId);
        };
      }
    }
  }, []);

  useEffect(() => {
    // GSAP progress counter & bar animation
    const counterObj = { val: 0 };

    const tl = gsap.timeline();

    tl.fromTo(
      '.preloader-logo',
      { opacity: 0, scale: 0.9, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    tl.to(
      counterObj,
      {
        val: 100,
        duration: 2.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          setProgress(Math.round(counterObj.val));
        }
      },
      '-=0.4'
    );

    tl.to(
      progressBarRef.current,
      {
        width: '100%',
        duration: 2.2,
        ease: 'power2.inOut'
      },
      '<'
    );

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        ease: 'power3.inOut',
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = 'none';
          }
          onComplete();
        }
      },
      '+=0.2'
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      id="cinematic-preloader"
      className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030611] text-white select-none overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Futuristic central ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-blue-600/15 blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Futuristic Badge */}
        <div className="preloader-logo flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYSTEM INITIALIZATION
        </div>

        {/* Centered Heading */}
        <h1 className="preloader-logo text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2">
          AREEBA
        </h1>

        {/* Below Heading */}
        <p className="preloader-logo text-xs md:text-sm font-semibold tracking-[0.35em] text-cyan-400/90 uppercase mb-8">
          SOFTWARE ENGINEERING
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80 h-1.5 bg-slate-900/80 rounded-full overflow-hidden border border-cyan-500/20 p-[1px] relative shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <div
            ref={progressBarRef}
            className="progress-bar h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-300 rounded-full relative transition-all"
            style={{ width: '0%' }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] opacity-80" />
          </div>
        </div>

        {/* Progress Percentage Counter */}
        <div className="mt-4 flex items-center gap-2 font-mono text-sm tracking-wider text-slate-400">
          <span className="text-cyan-400 font-bold">{progress}%</span>
          <span className="text-slate-600">/ 100%</span>
        </div>

        {/* Subtle subtext */}
        <p className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mt-4">
          Loading Cinematic Portfolio
        </p>
      </div>
    </div>
  );
};
