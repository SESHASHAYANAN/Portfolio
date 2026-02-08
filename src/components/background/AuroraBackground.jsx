import { motion, useReducedMotion } from 'framer-motion';

export default function AuroraBackground() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-space-900 via-space-800 to-space-900" />

            {/* Aurora blobs */}
            <motion.div
                className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full opacity-40"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 245, 255, 0.4) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={prefersReducedMotion ? {} : {
                    x: [0, 100, 50, 0],
                    y: [0, 50, 100, 0],
                    scale: [1, 1.2, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-35"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={prefersReducedMotion ? {} : {
                    x: [0, -80, -40, 0],
                    y: [0, -60, -120, 0],
                    scale: [1, 1.1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/4 right-1/4 w-3/4 h-3/4 rounded-full opacity-25"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 212, 170, 0.4) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
                animate={prefersReducedMotion ? {} : {
                    x: [0, -50, 50, 0],
                    y: [0, 80, -30, 0],
                    scale: [1, 1.15, 1.05, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Additional smaller aurora effects */}
            <motion.div
                className="absolute top-1/3 left-1/3 w-1/2 h-1/2 rounded-full opacity-20"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.3) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                }}
                animate={prefersReducedMotion ? {} : {
                    x: [0, 30, -30, 0],
                    y: [0, -40, 40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Animated mesh gradient overlay */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
            radial-gradient(at 40% 20%, rgba(0, 245, 255, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(0, 212, 170, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(0, 245, 255, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(0, 212, 170, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, rgba(236, 72, 153, 0.1) 0px, transparent 50%)
          `,
                }}
                animate={prefersReducedMotion ? {} : {
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Noise texture overlay for depth */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
