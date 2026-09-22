import React, { useEffect, useRef } from 'react';

interface SplineHeroSceneProps {
  splineUrl?: string;
}

export const SplineHeroScene: React.FC<SplineHeroSceneProps> = ({ splineUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // If a custom Spline embed URL is present and supported, we can let the container render it.
    // Otherwise, render an interactive high-performance 3D futuristic particle & node matrix.
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Nodes configuration
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      size: number;
      color: string;
    }> = [];

    const numNodes = 36;
    const radius = Math.min(width, height) * 0.35;

    for (let i = 0; i < numNodes; i++) {
      const theta = Math.acos(-1 + (2 * i) / numNodes);
      const phi = Math.sqrt(numNodes * Math.PI) * theta;

      const x = radius * Math.cos(phi) * Math.sin(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(theta);

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2.5 + 1.5,
        color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#3b82f6' : '#22d3ee'
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const mouseInfluenceX = (mouseX - width / 2) * 0.0003;
      const mouseInfluenceY = (mouseY - height / 2) * 0.0003;

      angleX += 0.004 + mouseInfluenceY;
      angleY += 0.006 + mouseInfluenceX;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const fov = 400;
      const centerX = width * 0.55;
      const centerY = height * 0.5;

      const projectedNodes: Array<{ x: number; y: number; scale: number; color: string; size: number }> = [];

      // Rotate and project nodes
      nodes.forEach((node) => {
        // Rotate Y
        let x1 = node.baseX * cosY - node.baseZ * sinY;
        let z1 = node.baseZ * cosY + node.baseX * sinY;

        // Rotate X
        let y2 = node.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.baseY * sinX;

        const scale = fov / (fov + z2 + 250);
        const projX = x1 * scale + centerX;
        const projY = y2 * scale + centerY;

        projectedNodes.push({
          x: projX,
          y: projY,
          scale,
          color: node.color,
          size: node.size * scale
        });
      });

      // Draw connecting holographic lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].x - projectedNodes[j].x;
          const dy = projectedNodes[i].y - projectedNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.25;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
            ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw node points
      projectedNodes.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="spline-3d-container"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-70 dark:opacity-70 light:opacity-30"
    >
      {splineUrl ? (
        <iframe
          src={splineUrl}
          title="Spline 3D Scene"
          className="w-full h-full border-0 pointer-events-auto"
        />
      ) : (
        <canvas ref={canvasRef} className="w-full h-full block" />
      )}
    </div>
  );
};
