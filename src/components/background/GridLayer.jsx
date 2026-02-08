import { motion, useReducedMotion } from 'framer-motion';

export default function GridLayer() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Perspective grid */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[60vh]"
                style={{
                    perspective: '500px',
                    perspectiveOrigin: 'center top',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="absolute inset-0"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(70deg)',
                        transformOrigin: 'center top',
                    }}
                    animate={prefersReducedMotion ? {} : {
                        y: ['0%', '50%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    {/* Grid SVG */}
                    <svg
                        className="w-full h-[200%] opacity-20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <pattern
                                id="grid"
                                width="60"
                                height="60"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 60 0 L 0 0 0 60"
                                    fill="none"
                                    stroke="url(#gridGradient)"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.6" />
                                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </motion.div>

                {/* Fade overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, transparent 0%, rgba(3, 0, 20, 1) 100%)',
                    }}
                />
            </motion.div>

            {/* Horizon glow */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                    background: 'linear-gradient(to top, rgba(0, 245, 255, 0.1), transparent)',
                }}
            />
        </div>
    );
}
