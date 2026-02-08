import { motion, useReducedMotion } from 'framer-motion';

// Stylized Rocket SVG
export function RocketIcon({ className = '' }) {
    return (
        <svg
            className={className}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Rocket body */}
            <path
                d="M32 4C32 4 20 16 20 36C20 44 24 52 32 56C40 52 44 44 44 36C44 16 32 4 32 4Z"
                fill="url(#rocketGradient)"
                opacity="0.8"
            />
            {/* Window */}
            <circle cx="32" cy="28" r="6" fill="rgba(0, 245, 255, 0.6)" />
            <circle cx="32" cy="28" r="4" fill="rgba(255, 255, 255, 0.3)" />
            {/* Fins */}
            <path
                d="M20 40L12 52L20 48V40Z"
                fill="url(#finGradient)"
                opacity="0.7"
            />
            <path
                d="M44 40L52 52L44 48V40Z"
                fill="url(#finGradient)"
                opacity="0.7"
            />
            {/* Flame */}
            <path
                d="M28 56C28 56 32 64 32 64C32 64 36 56 36 56C36 56 34 58 32 58C30 58 28 56 28 56Z"
                fill="url(#flameGradient)"
                opacity="0.9"
            />
            <defs>
                <linearGradient id="rocketGradient" x1="20" y1="4" x2="44" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="finGradient" x1="12" y1="40" x2="20" y2="52" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f5ff" />
                    <stop offset="1" stopColor="#00d4aa" />
                </linearGradient>
                <linearGradient id="flameGradient" x1="28" y1="56" x2="36" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff6b6b" />
                    <stop offset="0.5" stopColor="#ffa502" />
                    <stop offset="1" stopColor="#ffd93d" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Stylized Robot SVG
export function RobotIcon({ className = '' }) {
    return (
        <svg
            className={className}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Antenna */}
            <line x1="32" y1="4" x2="32" y2="12" stroke="#00f5ff" strokeWidth="2" opacity="0.8" />
            <circle cx="32" cy="4" r="3" fill="#00f5ff" opacity="0.9" />
            {/* Head */}
            <rect x="16" y="12" width="32" height="24" rx="4" fill="url(#robotHeadGradient)" opacity="0.8" />
            {/* Eyes */}
            <circle cx="24" cy="24" r="4" fill="rgba(0, 245, 255, 0.8)" />
            <circle cx="40" cy="24" r="4" fill="rgba(0, 245, 255, 0.8)" />
            <circle cx="24" cy="24" r="2" fill="white" opacity="0.7" />
            <circle cx="40" cy="24" r="2" fill="white" opacity="0.7" />
            {/* Mouth */}
            <rect x="26" y="30" width="12" height="2" rx="1" fill="rgba(0, 245, 255, 0.6)" />
            {/* Body */}
            <rect x="20" y="38" width="24" height="20" rx="3" fill="url(#robotBodyGradient)" opacity="0.7" />
            {/* Chest light */}
            <circle cx="32" cy="48" r="4" fill="rgba(168, 85, 247, 0.8)" />
            <circle cx="32" cy="48" r="2" fill="white" opacity="0.5" />
            {/* Arms */}
            <rect x="8" y="42" width="10" height="4" rx="2" fill="url(#robotArmGradient)" opacity="0.6" />
            <rect x="46" y="42" width="10" height="4" rx="2" fill="url(#robotArmGradient)" opacity="0.6" />
            <defs>
                <linearGradient id="robotHeadGradient" x1="16" y1="12" x2="48" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#4f46e5" />
                </linearGradient>
                <linearGradient id="robotBodyGradient" x1="20" y1="38" x2="44" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7" />
                    <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="robotArmGradient" x1="8" y1="42" x2="18" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f5ff" />
                    <stop offset="1" stopColor="#00d4aa" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Holographic Diamond Shape
function HoloDiamond({ className = '', delay = 0 }) {
    return (
        <motion.div
            className={`absolute ${className}`}
            initial={{ opacity: 0, scale: 0, rotate: 45 }}
            animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1, 0.8],
                rotate: [45, 50, 45],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
            }}
        >
            <div
                className="w-8 h-8 border border-neon-cyan/50"
                style={{
                    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), transparent)',
                }}
            />
        </motion.div>
    );
}

// Light streak component
function LightStreak({ className = '', delay = 0, duration = 3 }) {
    return (
        <motion.div
            className={`absolute h-px ${className}`}
            style={{
                background: 'linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.8), transparent)',
                width: '100px',
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{
                x: ['0%', '300%'],
                opacity: [0, 1, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: 'easeInOut',
            }}
        />
    );
}

// Floating elements container
export default function FloatingElements() {
    const prefersReducedMotion = useReducedMotion();

    const elements = [
        { Component: RocketIcon, x: '3%', y: '10%', size: 56, delay: 0, rotation: -15 },
        { Component: RobotIcon, x: '88%', y: '15%', size: 64, delay: 1, rotation: 10 },
        { Component: RocketIcon, x: '92%', y: '65%', size: 48, delay: 2, rotation: 25 },
        { Component: RobotIcon, x: '5%', y: '75%', size: 52, delay: 1.5, rotation: -8 },
        { Component: RocketIcon, x: '15%', y: '40%', size: 36, delay: 0.5, rotation: 5 },
        { Component: RobotIcon, x: '80%', y: '45%', size: 40, delay: 2.5, rotation: -12 },
    ];

    if (prefersReducedMotion) {
        return (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {elements.map((el, i) => (
                    <div
                        key={i}
                        className="absolute opacity-25"
                        style={{ left: el.x, top: el.y, transform: `rotate(${el.rotation}deg)` }}
                    >
                        <el.Component style={{ width: el.size, height: el.size }} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Floating icons */}
            {elements.map((el, i) => (
                <motion.div
                    key={i}
                    className="absolute opacity-25"
                    style={{ left: el.x, top: el.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: 1,
                        y: [0, -25, 0],
                        x: [0, i % 2 === 0 ? 10 : -10, 0],
                        rotate: [el.rotation, el.rotation + 8, el.rotation],
                    }}
                    transition={{
                        opacity: { delay: el.delay, duration: 4, repeat: Infinity },
                        scale: { delay: el.delay, duration: 0.8, type: 'spring' },
                        y: { delay: el.delay, duration: 5 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
                        x: { delay: el.delay, duration: 7 + i * 0.3, repeat: Infinity, ease: 'easeInOut' },
                        rotate: { delay: el.delay, duration: 8 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                >
                    <el.Component style={{ width: el.size, height: el.size }} />
                </motion.div>
            ))}

            {/* Holographic diamonds */}
            <HoloDiamond className="left-[20%] top-[20%]" delay={0} />
            <HoloDiamond className="right-[15%] top-[30%]" delay={1} />
            <HoloDiamond className="left-[25%] bottom-[25%]" delay={2} />
            <HoloDiamond className="right-[20%] bottom-[20%]" delay={1.5} />

            {/* Light streaks */}
            <LightStreak className="top-[15%] left-0" delay={0} duration={4} />
            <LightStreak className="top-[45%] left-0" delay={2} duration={5} />
            <LightStreak className="top-[75%] left-0" delay={1} duration={4.5} />
            <LightStreak className="bottom-[30%] left-0" delay={3} duration={3.5} />

            {/* Floating orbs */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`orb-${i}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        left: `${10 + i * 20}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        background: i % 2 === 0 ? '#00f5ff' : '#a855f7',
                        boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(0, 245, 255, 0.5)' : 'rgba(168, 85, 247, 0.5)'}`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, i % 2 === 0 ? 15 : -15, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
