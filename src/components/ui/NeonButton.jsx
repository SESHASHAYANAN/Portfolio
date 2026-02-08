import { motion } from 'framer-motion';

export default function NeonButton({
    children,
    onClick,
    variant = 'primary', // primary, secondary
    size = 'md', // sm, md, lg
    className = '',
    href,
    ...props
}) {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const variantClasses = {
        primary: 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 hover:from-neon-cyan/30 hover:to-neon-purple/30',
        secondary: 'bg-white/5 hover:bg-white/10',
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`
        relative
        inline-flex items-center justify-center
        font-display font-medium
        rounded-xl
        border border-transparent
        overflow-hidden
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {/* Animated border */}
            <span
                className="absolute inset-0 rounded-xl"
                style={{
                    padding: '1.5px',
                    background: variant === 'primary'
                        ? 'linear-gradient(135deg, #00f5ff, #a855f7, #00d4aa, #00f5ff)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                    backgroundSize: '300% 300%',
                    animation: 'gradient-x 3s ease infinite',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                }}
            />

            {/* Shimmer effect */}
            <span
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                    animation: 'shimmer 2s linear infinite',
                }}
            />

            {/* Glow effect */}
            <span
                className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                    boxShadow: variant === 'primary'
                        ? '0 0 30px rgba(0, 245, 255, 0.4), 0 0 60px rgba(168, 85, 247, 0.2)'
                        : '0 0 20px rgba(255, 255, 255, 0.1)',
                }}
            />

            <span className="relative z-10 flex items-center gap-2 text-white">
                {children}
            </span>
        </Component>
    );
}
