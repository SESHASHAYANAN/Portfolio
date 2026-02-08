import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ProfileImage from './hero/ProfileImage';
import FloatingElements from './hero/FloatingElements';
import NeonButton from './ui/NeonButton';

const taglines = [
    "Building the Future with AI & Innovation",
    "Pioneering at the Intersection of AI & Web3",
    "Transforming Ideas into Intelligent Solutions",
];

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            setDisplayText(taglines[0]);
            return;
        }

        const currentTagline = taglines[taglineIndex];

        if (isTyping) {
            if (displayText.length < currentTagline.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(currentTagline.slice(0, displayText.length + 1));
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setIsTyping(false), 2000);
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 30);
                return () => clearTimeout(timeout);
            } else {
                setTaglineIndex((prev) => (prev + 1) % taglines.length);
                setIsTyping(true);
            }
        }
    }, [displayText, isTyping, taglineIndex, prefersReducedMotion]);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            <FloatingElements />

            {/* Animated gradient orbs behind content */}
            <motion.div
                className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 245, 255, 0.4) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={prefersReducedMotion ? {} : {
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={prefersReducedMotion ? {} : {
                    x: [0, -40, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left max-w-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Greeting with animated line */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-3 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div
                                className="h-px w-8 bg-gradient-to-r from-transparent to-neon-cyan"
                                initial={{ width: 0 }}
                                animate={{ width: 32 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            />
                            <span className="text-neon-cyan/80 font-medium text-sm sm:text-base tracking-widest uppercase">
                                Welcome to My Universe
                            </span>
                            <motion.div
                                className="h-px w-8 bg-gradient-to-l from-transparent to-neon-cyan hidden lg:block"
                                initial={{ width: 0 }}
                                animate={{ width: 32 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            />
                        </motion.div>

                        {/* Main Name with glitch effect container */}
                        <motion.h1
                            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <motion.span
                                className="gradient-text inline-block"
                                animate={prefersReducedMotion ? {} : {
                                    textShadow: [
                                        '0 0 20px rgba(0,245,255,0.5)',
                                        '0 0 40px rgba(0,245,255,0.8)',
                                        '0 0 20px rgba(0,245,255,0.5)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                SESHA
                            </motion.span><span className="text-white">SHAYANAN</span>

                            {/* Decorative underline */}
                            <motion.div
                                className="absolute -bottom-2 left-0 lg:left-0 right-0 lg:right-auto h-1 rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #00f5ff, #a855f7, transparent)',
                                    width: '60%',
                                }}
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            />
                        </motion.h1>

                        {/* Typing Tagline */}
                        <motion.div
                            className="h-12 sm:h-14 mb-8 flex items-center justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light">
                                {displayText}
                                <motion.span
                                    className="inline-block w-0.5 h-6 sm:h-7 bg-neon-cyan ml-1 align-middle"
                                    animate={prefersReducedMotion ? {} : { opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <NeonButton onClick={scrollToProjects} size="lg">
                                <span>View Projects</span>
                                <motion.svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </motion.svg>
                            </NeonButton>
                            <NeonButton onClick={scrollToContact} variant="secondary" size="lg">
                                <span>Contact Me</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </NeonButton>
                        </motion.div>

                        {/* Stats or highlights */}
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-8 mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            {[
                                { value: '40+', label: 'Projects' },
                                { value: '3+', label: 'Years' },
                                { value: 'AI', label: 'Focus' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + i * 0.1 }}
                                >
                                    <p className="font-display font-bold text-2xl sm:text-3xl gradient-text">{stat.value}</p>
                                    <p className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Image - with more space */}
                    <motion.div
                        className="flex-shrink-0 relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
                    >
                        <ProfileImage />
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
                    <motion.div
                        className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center relative overflow-hidden"
                        animate={prefersReducedMotion ? {} : { borderColor: ['rgba(255,255,255,0.2)', 'rgba(0,245,255,0.5)', 'rgba(255,255,255,0.2)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1.5 h-3 bg-neon-cyan rounded-full mt-2"
                            animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
