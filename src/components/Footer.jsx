import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 border-t border-white/5">
            {/* Animated gradient line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background: 'linear-gradient(90deg, transparent, #00f5ff, #a855f7, #00d4aa, transparent)',
                    backgroundSize: '200% 100%',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <motion.p
                        className="text-white/40 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        © {currentYear} <span className="text-white/60">SESHASHAYANAN</span>. All rights reserved.
                    </motion.p>

                    <motion.p
                        className="text-white/30 text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Built with <span className="text-neon-cyan">React</span> + <span className="text-neon-purple">Framer Motion</span>
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
