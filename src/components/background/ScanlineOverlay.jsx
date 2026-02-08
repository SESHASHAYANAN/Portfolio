import { useReducedMotion } from 'framer-motion';

export default function ScanlineOverlay() {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] pointer-events-none"
            aria-hidden="true"
            style={{
                background: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.02) 0px,
          rgba(0, 0, 0, 0.02) 1px,
          transparent 1px,
          transparent 2px
        )`,
                opacity: 0.3,
            }}
        />
    );
}
