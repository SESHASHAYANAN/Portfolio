import { motion } from 'framer-motion';

export default function GlassCard({
    children,
    className = '',
    hover = true,
    glow = false,
    neonBorder = false,
    ...props
}) {
    return (
        <motion.div
            className={`
        relative
        bg-white/[0.03]
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        overflow-hidden
        ${hover ? 'transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20' : ''}
        ${glow ? 'shadow-neon-cyan' : ''}
        ${className}
      `}
            whileHover={hover ? { y: -2 } : {}}
            {...props}
        >
            {neonBorder && (
                <div
                    className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(168, 85, 247, 0.1), rgba(0, 212, 170, 0.1))',
                    }}
                />
            )}
            {children}
        </motion.div>
    );
}
