"use client";

import { useEffect, useRef } from "react";
import TextPressure from "../TextPressure";

export default function AboutSection({ name, tagline, bio }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const snowflakes = [];
    const snowflakeCount = 100;

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        drift: Math.random() * 0.5 - 0.25
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#c084fc';

      snowflakes.forEach(flake => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener('resize', resize);
  }, [name]);

  return (
    <section className="min-h-screen flex items-center justify-center p-8 relative">
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
      />
      {name && (
        <div style={{ position: 'relative', height: '300px', width: '100%', maxWidth: '800px', zIndex: 2 }}>
          <TextPressure
            text={name}
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#c084fc"
            strokeColor="#a855f7"
            minFontSize={36}
          />
        </div>
      )}
    </section>
  );
}
