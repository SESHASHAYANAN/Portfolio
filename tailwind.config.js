/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'space': {
                    900: '#030014',
                    800: '#0a0520',
                    700: '#110a30',
                    600: '#1a1040',
                },
                'neon': {
                    cyan: '#00f5ff',
                    teal: '#00d4aa',
                    purple: '#a855f7',
                    violet: '#8b5cf6',
                    pink: '#ec4899',
                    blue: '#3b82f6',
                },
                'glass': {
                    white: 'rgba(255, 255, 255, 0.05)',
                    border: 'rgba(255, 255, 255, 0.1)',
                }
            },
            fontFamily: {
                'display': ['Orbitron', 'sans-serif'],
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'scan': 'scan 3s linear infinite',
                'gradient-x': 'gradient-x 3s ease infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'aurora': 'aurora 15s ease-in-out infinite',
                'grid-flow': 'grid-flow 20s linear infinite',
                'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                'scan': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                'gradient-x': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'shimmer': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'aurora': {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '25%': { transform: 'translate(10%, 10%) rotate(90deg)' },
                    '50%': { transform: 'translate(0, 20%) rotate(180deg)' },
                    '75%': { transform: 'translate(-10%, 10%) rotate(270deg)' },
                },
                'grid-flow': {
                    '0%': { transform: 'perspective(500px) rotateX(60deg) translateY(0)' },
                    '100%': { transform: 'perspective(500px) rotateX(60deg) translateY(100%)' },
                },
                'typing': {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                'blink-caret': {
                    'from, to': { borderColor: 'transparent' },
                    '50%': { borderColor: '#00f5ff' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            boxShadow: {
                'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3)',
                'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
                'neon-teal': '0 0 20px rgba(0, 212, 170, 0.5), 0 0 40px rgba(0, 212, 170, 0.3)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [],
}
