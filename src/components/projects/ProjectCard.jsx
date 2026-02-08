import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export default function ProjectCard({ project, index, onClick }) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    // Mouse position for magnetic effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring config for smooth following
    const springConfig = { stiffness: 150, damping: 15 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Transform for tilt effect
    const rotateX = useTransform(y, [-50, 50], [8, -8]);
    const rotateY = useTransform(x, [-50, 50], [-8, 8]);

    const handleMouseMove = (e) => {
        if (prefersReducedMotion || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative group cursor-pointer"
            style={{ perspective: '1000px' }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileTap={{ scale: 0.97 }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
            aria-label={`View ${project.title} project details`}
        >
            {/* Multi-layer glow effect on hover */}
            <motion.div
                className="absolute -inset-2 rounded-3xl opacity-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.4), rgba(168, 85, 247, 0.4))',
                    filter: 'blur(25px)',
                }}
                animate={{ opacity: isHovered ? 0.7 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <motion.div
                className="absolute -inset-1 rounded-2xl opacity-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(168, 85, 247, 0.2))',
                    filter: 'blur(10px)',
                }}
                animate={{ opacity: isHovered ? 0.8 : 0 }}
                transition={{ duration: 0.2 }}
            />

            {/* Card container with 3D transform */}
            <motion.div
                className="relative h-full min-h-[220px] sm:min-h-[240px] rounded-2xl overflow-hidden"
                style={prefersReducedMotion ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
                {/* Animated conic gradient border */}
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        padding: '2px',
                        background: 'conic-gradient(from 0deg, #00f5ff, #a855f7, #00d4aa, #ec4899, #00f5ff)',
                        backgroundSize: '200% 200%',
                    }}
                    animate={isHovered && !prefersReducedMotion ? {
                        rotate: 360,
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    } : {}}
                    transition={{
                        rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                        backgroundPosition: { duration: 2, repeat: Infinity },
                    }}
                >
                    <div className="w-full h-full rounded-2xl bg-space-900" />
                </motion.div>

                {/* Inner card with glassmorphism */}
                <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden">
                    {/* Animated gradient background on hover */}
                    <motion.div
                        className="absolute inset-0 opacity-0"
                        style={{
                            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(168, 85, 247, 0.1))',
                        }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Shimmer sweep on hover */}
                    <motion.div
                        className="absolute inset-0 opacity-0"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                        }}
                        animate={isHovered && !prefersReducedMotion ? {
                            x: ['-100%', '200%'],
                            opacity: [0, 1, 0],
                        } : {}}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />

                    {/* Floating particles on hover */}
                    {isHovered && !prefersReducedMotion && (
                        <>
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                                    initial={{
                                        opacity: 0,
                                        x: 50 + i * 30,
                                        y: 100 + i * 20,
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        y: [100 + i * 20, 20, -20],
                                        x: [50 + i * 30, 60 + i * 25, 70 + i * 20],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.2,
                                        repeat: Infinity,
                                    }}
                                />
                            ))}
                        </>
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Status indicator */}
                        <motion.div
                            className="flex items-center gap-2 mb-3"
                            animate={{ opacity: isHovered ? 1 : 0.6 }}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-neon-teal"
                                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            <span className="text-white/40 text-xs uppercase tracking-wider">Project</span>
                        </motion.div>

                        {/* Project title */}
                        <motion.h3
                            className="font-display font-bold text-lg sm:text-xl text-white mb-3 line-clamp-2 leading-snug"
                            animate={{
                                color: isHovered ? '#00f5ff' : '#ffffff',
                                textShadow: isHovered ? '0 0 20px rgba(0, 245, 255, 0.5)' : 'none',
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {project.title}
                        </motion.h3>
                    </div>

                    {/* Date range at bottom */}
                    <div className="relative z-10 mt-auto">
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                animate={{ color: isHovered ? '#00f5ff' : 'currentColor' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </motion.svg>
                            <span>{project.dateRange}</span>
                        </div>
                    </div>

                    {/* Animated corner accents */}
                    <motion.div
                        className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-neon-cyan/30 rounded-tr-lg"
                        animate={{
                            borderColor: isHovered ? 'rgba(0, 245, 255, 0.8)' : 'rgba(0, 245, 255, 0.3)',
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.div
                        className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-neon-purple/30 rounded-bl-lg"
                        animate={{
                            borderColor: isHovered ? 'rgba(168, 85, 247, 0.8)' : 'rgba(168, 85, 247, 0.3)',
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* View indicator with animation */}
                    <motion.div
                        className="absolute bottom-4 right-4 flex items-center gap-1 text-neon-cyan text-xs font-medium"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : 10,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <span>View</span>
                        <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={isHovered ? { x: [0, 5, 0] } : {}}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
