import { motion, useReducedMotion } from 'framer-motion';

export default function Timeline({ items }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="relative">
            {/* Timeline line */}
            <motion.div
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-teal"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
            />

            {/* Timeline items */}
            <div className="space-y-8">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-16"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        {/* Node dot */}
                        <motion.div
                            className="absolute left-4 top-1 w-4 h-4 rounded-full bg-space-900 border-2 border-neon-cyan flex items-center justify-center"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 300 }}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-neon-cyan"
                                animate={prefersReducedMotion ? {} : {
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.7, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Content */}
                        <div className="glass-panel p-5 hover:bg-white/[0.06] transition-colors duration-300">
                            <span className="text-neon-cyan/80 text-xs font-medium tracking-wider uppercase">
                                {item.year}
                            </span>
                            <h4 className="font-display font-semibold text-lg text-white mt-1 mb-2">
                                {item.title}
                            </h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
