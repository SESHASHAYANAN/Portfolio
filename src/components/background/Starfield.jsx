import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function Starfield({ starCount = 200 }) {
    const canvasRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let stars = [];
        let shootingStars = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const actualStarCount = isMobile ? Math.floor(starCount / 2) : starCount;

        const initStars = () => {
            stars = [];
            for (let i = 0; i < actualStarCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2.5 + 0.5,
                    opacity: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                    twinklePhase: Math.random() * Math.PI * 2,
                    color: Math.random() > 0.7 ? '#00f5ff' : Math.random() > 0.5 ? '#a855f7' : '#ffffff',
                });
            }
        };

        const createShootingStar = () => {
            if (shootingStars.length < 3 && Math.random() < 0.002) {
                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height * 0.5,
                    length: Math.random() * 80 + 40,
                    speed: Math.random() * 15 + 10,
                    angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
                    opacity: 1,
                });
            }
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw regular stars
            stars.forEach((star) => {
                const twinkle = prefersReducedMotion
                    ? star.opacity
                    : (Math.sin(time * star.twinkleSpeed + star.twinklePhase) + 1) / 2;
                const opacity = star.opacity * (0.4 + twinkle * 0.6);

                // Create gradient for star glow
                const gradient = ctx.createRadialGradient(
                    star.x, star.y, 0,
                    star.x, star.y, star.size * 3
                );
                gradient.addColorStop(0, star.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba').replace('#', 'rgba('));

                // Handle hex colors
                if (star.color.startsWith('#')) {
                    const r = parseInt(star.color.slice(1, 3), 16);
                    const g = parseInt(star.color.slice(3, 5), 16);
                    const b = parseInt(star.color.slice(5, 7), 16);
                    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);
                    gradient.addColorStop(1, 'transparent');
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core of star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            });

            // Draw and update shooting stars
            if (!prefersReducedMotion) {
                createShootingStar();

                shootingStars = shootingStars.filter((star) => {
                    star.x += Math.cos(star.angle) * star.speed;
                    star.y += Math.sin(star.angle) * star.speed;
                    star.opacity -= 0.02;

                    if (star.opacity <= 0) return false;

                    // Draw shooting star
                    const tailX = star.x - Math.cos(star.angle) * star.length;
                    const tailY = star.y - Math.sin(star.angle) * star.length;

                    const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
                    gradient.addColorStop(0, 'transparent');
                    gradient.addColorStop(0.8, `rgba(0, 245, 255, ${star.opacity * 0.5})`);
                    gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

                    ctx.beginPath();
                    ctx.moveTo(tailX, tailY);
                    ctx.lineTo(star.x, star.y);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    // Glow at head
                    const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 5);
                    headGlow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
                    headGlow.addColorStop(1, 'transparent');
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, 5, 0, Math.PI * 2);
                    ctx.fillStyle = headGlow;
                    ctx.fill();

                    return star.x < canvas.width + 100 && star.y < canvas.height + 100;
                });
            }

            if (!prefersReducedMotion) {
                animationId = requestAnimationFrame(draw);
            }
        };

        resize();
        window.addEventListener('resize', resize);

        if (prefersReducedMotion) {
            draw(0);
        } else {
            animationId = requestAnimationFrame(draw);
        }

        return () => {
            window.removeEventListener('resize', resize);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [starCount, prefersReducedMotion, isMobile]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-40 pointer-events-none"
            aria-hidden="true"
        />
    );
}
