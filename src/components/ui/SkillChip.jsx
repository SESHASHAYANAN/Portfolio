import { motion } from 'framer-motion';

export default function SkillChip({ skill, index = 0 }) {
    const categoryColors = {
        core: 'from-neon-cyan to-neon-teal',
        frontend: 'from-neon-purple to-neon-pink',
        backend: 'from-neon-teal to-neon-blue',
        ml: 'from-neon-cyan to-neon-purple',
        web3: 'from-neon-purple to-neon-teal',
    };

    const gradientClass = categoryColors[skill.category] || 'from-neon-cyan to-neon-purple';

    return (
        <motion.span
            className="relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white/90 overflow-hidden cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.05,
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
            }}
            whileHover={{
                y: -3,
                transition: { duration: 0.2 }
            }}
        >
            {/* Background */}
            <span className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

            {/* Animated gradient border */}
            <span
                className={`absolute inset-0 rounded-full opacity-60`}
                style={{
                    padding: '1px',
                    background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                }}
            />

            {/* Glow on hover */}
            <motion.span
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradientClass} opacity-0`}
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.2 }}
            />

            <span className="relative z-10">{skill.name}</span>
        </motion.span>
    );
}
