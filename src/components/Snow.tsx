import React, { useRef, useEffect } from 'react';

interface SnowProps {
  mouseX: number;
  mouseY: number;
}

const SNOWFLAKE_COUNT = 120;
const SNOWFLAKE_SIZE = { min: 1.5, max: 4 };
const SNOWFLAKE_SPEED = { min: 0.7, max: 2.2 };

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Snowflake {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
}

const Snow: React.FC<SnowProps> = ({ mouseX }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakes = useRef<Snowflake[]>([]);
  const animationRef = useRef<number>();
  const lastWidth = useRef<number>(window.innerWidth);
  const lastHeight = useRef<number>(window.innerHeight);

  // Initialize snowflakes
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    snowflakes.current = Array.from({ length: SNOWFLAKE_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(SNOWFLAKE_SIZE.min, SNOWFLAKE_SIZE.max),
      speed: randomBetween(SNOWFLAKE_SPEED.min, SNOWFLAKE_SPEED.max),
      drift: randomBetween(-0.5, 0.5),
    }));
    lastWidth.current = width;
    lastHeight.current = height;
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      lastWidth.current = window.innerWidth;
      lastHeight.current = window.innerHeight;
      // Optionally, re-initialize snowflakes
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation loop
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    const width = lastWidth.current;
    const height = lastHeight.current;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Mouse influence: -1 (left) to 1 (right)
      const mouseInfluence = ((mouseX / width) - 0.5) * 2;
      for (let flake of snowflakes.current) {
        // Update position
        flake.y += flake.speed;
        flake.x += flake.drift + mouseInfluence * 1.5; // Mouse moves snow left/right
        // Wrap around
        if (flake.y > height) {
          flake.y = -flake.r;
          flake.x = randomBetween(0, width);
        }
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;
        // Draw
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    animationRef.current = requestAnimationFrame(draw);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mouseX]);

  return (
    <canvas
      ref={canvasRef}
      width={lastWidth.current}
      height={lastHeight.current}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
};

export default Snow;