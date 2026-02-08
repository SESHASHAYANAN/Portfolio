import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, isOpen, onClose }) {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    // Handle ESC key and focus trap
    useEffect(() => {
        if (!isOpen) return;

        // Lock body scroll
        document.body.style.overflow = 'hidden';

        // Focus management
        const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements?.[0];
        const lastElement = focusableElements?.[focusableElements.length - 1];

        // Focus close button on open
        setTimeout(() => closeButtonRef.current?.focus(), 100);

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }

            // Focus trap
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-space-900/80 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {/* Neon rim light */}
                        <div
                            className="absolute -inset-[1px] rounded-3xl opacity-60"
                            style={{
                                background: 'linear-gradient(135deg, #00f5ff, #a855f7, #00d4aa)',
                            }}
                        />

                        {/* Glass panel */}
                        <div className="relative rounded-3xl bg-space-800/95 backdrop-blur-xl overflow-hidden">
                            {/* Scanline overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-10"
                                style={{
                                    background: `repeating-linear-gradient(
                    0deg,
                    transparent 0px,
                    transparent 2px,
                    rgba(0, 245, 255, 0.03) 2px,
                    rgba(0, 245, 255, 0.03) 4px
                  )`,
                                }}
                            />

                            {/* Animated gradient accent line */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-1"
                                style={{
                                    background: 'linear-gradient(90deg, #00f5ff, #a855f7, #00d4aa, #00f5ff)',
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{
                                    backgroundPosition: ['0% 0%', '200% 0%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />

                            {/* Content */}
                            <div className="relative p-6 sm:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div>
                                        <motion.h2
                                            id="modal-title"
                                            className="font-display font-bold text-2xl sm:text-3xl gradient-text mb-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {project.title}
                                        </motion.h2>
                                        <motion.p
                                            className="text-white/50 text-sm flex items-center gap-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {project.dateRange}
                                        </motion.p>
                                    </div>

                                    {/* Close button */}
                                    <motion.button
                                        ref={closeButtonRef}
                                        onClick={onClose}
                                        className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Close modal"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* GitHub Repo Button - Animated */}
                                {project.github && (
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative mb-6 flex items-center gap-3 p-4 rounded-xl overflow-hidden"
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Animated gradient background */}
                                        <motion.div
                                            className="absolute inset-0"
                                            style={{
                                                background: 'linear-gradient(90deg, rgba(0, 245, 255, 0.1), rgba(168, 85, 247, 0.1), rgba(0, 212, 170, 0.1))',
                                            }}
                                            animate={{
                                                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                                            }}
                                            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                        />

                                        {/* Border */}
                                        <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-neon-cyan/40 transition-colors duration-300" />

                                        {/* Shimmer effect on hover */}
                                        <motion.div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                            style={{
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                                            }}
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: '200%' }}
                                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                                        />

                                        {/* GitHub Icon with glow */}
                                        <motion.div
                                            className="relative z-10 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:shadow-neon-cyan transition-shadow duration-300"
                                            animate={{ rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        >
                                            <svg className="w-6 h-6 text-white group-hover:text-neon-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </motion.div>

                                        {/* Text content */}
                                        <div className="relative z-10 flex-1">
                                            <p className="text-white font-semibold group-hover:text-neon-cyan transition-colors">View Source Code</p>
                                            <p className="text-white/40 text-sm truncate">{project.github.replace('https://github.com/', '')}</p>
                                        </div>

                                        {/* Arrow icon */}
                                        <motion.svg
                                            className="relative z-10 w-5 h-5 text-white/30 group-hover:text-neon-cyan transition-colors"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </motion.svg>

                                        {/* Floating particles */}
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-60"
                                                style={{ left: `${20 + i * 30}%`, bottom: '20%' }}
                                                animate={{
                                                    y: [0, -20, -30],
                                                    opacity: [0, 0.6, 0],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.3,
                                                }}
                                            />
                                        ))}
                                    </motion.a>
                                )}

                                {/* Tags */}
                                <motion.div
                                    className="flex flex-wrap gap-2 mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {project.tags?.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + index * 0.05 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                {/* Description */}
                                <motion.div
                                    className="mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-white/40 text-xs uppercase tracking-widest mb-2">Overview</h3>
                                    <p className="text-white/80 leading-relaxed">
                                        {project.description}
                                    </p>
                                </motion.div>

                                {/* Highlights */}
                                {project.highlights && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h3 className="text-white/40 text-xs uppercase tracking-widest mb-3">Key Highlights</h3>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start gap-3 text-white/70"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                >
                                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2" />
                                                    <span>{highlight}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}

                                {/* Decorative corners */}
                                <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-neon-purple/20 rounded-br-2xl pointer-events-none" />
                                <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/20 rounded-bl-2xl pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
