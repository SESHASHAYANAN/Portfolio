import { motion, useReducedMotion } from 'framer-motion';
import profileImg from '/picai.jpg';

export default function ProfileImage() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="relative flex items-center justify-center">
            {/* Orbiting rings */}
            <motion.div
                className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-full border border-neon-cyan/20"
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                {/* Orbiting dot 1 */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-neon-cyan rounded-full shadow-neon-cyan" />
            </motion.div>

            <motion.div
                className="absolute w-[350px] h-[350px] sm:w-[410px] sm:h-[410px] md:w-[460px] md:h-[460px] rounded-full border border-neon-purple/15"
                animate={prefersReducedMotion ? {} : { rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
                {/* Orbiting dot 2 */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 bg-neon-purple rounded-full shadow-neon-purple" />
            </motion.div>

            <motion.div
                className="absolute w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] rounded-full border border-neon-teal/10"
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
                {/* Orbiting dot 3 */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neon-teal rounded-full" />
            </motion.div>

            {/* Outer glow rings */}
            <motion.div
                className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full opacity-60"
                style={{
                    background: 'conic-gradient(from 0deg, #00f5ff, #a855f7, #00d4aa, #00f5ff)',
                    filter: 'blur(30px)',
                }}
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            {/* Pulse rings */}
            <motion.div
                className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full border-2 border-neon-cyan/30"
                animate={prefersReducedMotion ? {} : {
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Inner rotating ring */}
            <motion.div
                className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full"
                style={{
                    background: 'conic-gradient(from 180deg, #00f5ff, transparent 30%, #a855f7, transparent 60%, #00d4aa, transparent 90%, #00f5ff)',
                    opacity: 0.7,
                }}
                animate={prefersReducedMotion ? {} : { rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            {/* Main image container - LARGER SIZE */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-2 border-white/20 shadow-2xl z-10">
                {/* Image */}
                <img
                    src={profileImg}
                    alt="SESHASHAYANAN - AI & Innovation Professional"
                    className="w-full h-full object-cover object-center"
                />

                {/* Holographic overlay */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.2) 50%, transparent 70%)',
                    }}
                    animate={prefersReducedMotion ? {} : {
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Scanning line effect - more visible */}
                <motion.div
                    className="absolute inset-x-0 h-2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                    style={{
                        boxShadow: '0 0 30px rgba(0, 245, 255, 0.9), 0 0 60px rgba(0, 245, 255, 0.5)',
                        filter: 'blur(1px)'
                    }}
                    initial={{ top: '-10%' }}
                    animate={prefersReducedMotion ? {} : { top: ['0%', '100%'] }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: 'linear',
                    }}
                />

                {/* Glass overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(0,245,255,0.05) 100%)',
                    }}
                />
            </div>

            {/* Decorative corner accents - animated */}
            <motion.div
                className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88"
                animate={prefersReducedMotion ? {} : { rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-neon-cyan rounded-tl-xl" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-neon-purple rounded-tr-xl" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-neon-purple rounded-bl-xl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-neon-cyan rounded-br-xl" />
            </motion.div>

            {/* Floating particles around image */}
            {!prefersReducedMotion && (
                <>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                            style={{
                                left: `${50 + 45 * Math.cos(i * Math.PI / 3)}%`,
                                top: `${50 + 45 * Math.sin(i * Math.PI / 3)}%`,
                            }}
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2 + i * 0.3,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
