import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

// 4-pointed sparkle star path (24×24 viewBox)
const STAR_PATH = 'M12,2 L14,10 L22,12 L14,14 L12,22 L10,14 L2,12 L10,10 Z';

// ─── Star (Más Calidad Visual) ───────────────────────────────────────────────
// Central sparkle star appears with backOut pop, holds, then fades.
// 3 small accent stars appear around it with encoded timing. 3s loop.
const SMALL_STARS: { x: number; y: number; size: number; times: number[] }[] = [
    { x: -18, y: -10, size: 13, times: [0, 0.20, 0.30, 0.65, 1] },
    { x:  18, y: -8,  size: 11, times: [0, 0.25, 0.35, 0.65, 1] },
    { x:   9, y:  14, size: 9,  times: [0, 0.22, 0.32, 0.65, 1] },
];

export const StarAnim = () => (
    <div className="w-14 h-12 relative flex items-center justify-center">
        {/* Main star */}
        <motion.svg
            viewBox="0 0 24 24"
            width="42"
            height="42"
            fill="#EAB308"
            animate={{ scale: [0, 1.2, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'backOut' as const,
                times: [0, 0.15, 0.25, 0.75, 1],
            }}
        >
            <path d={STAR_PATH} />
        </motion.svg>

        {/* Small accent stars — timing encoded in keyframes for correct looping */}
        {SMALL_STARS.map((s, i) => (
            <motion.svg
                key={i}
                viewBox="0 0 24 24"
                width={s.size}
                height={s.size}
                fill="#EAB308"
                className="absolute"
                style={{
                    left: `calc(50% + ${s.x}px - ${s.size / 2}px)`,
                    top:  `calc(50% + ${s.y}px - ${s.size / 2}px)`,
                }}
                animate={{ scale: [0, 0, 1, 0, 0], opacity: [0, 0, 0.8, 0, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeOut' as const,
                    times: s.times,
                }}
            >
                <path d={STAR_PATH} />
            </motion.svg>
        ))}
    </div>
);

// ─── Brick Wall (Más Seguridad) ───────────────────────────────────────────────
// 9 bricks (3×3 grid) build from bottom row up, then shield appears. 3s loop.
// Normalized appear time for each brick (0..1 within the 3s cycle):
//   indices 0-2 = bottom row, 3-5 = middle row, 6-8 = top row
const BRICK_APPEAR = [
    0.05 / 3, 0.10 / 3, 0.15 / 3,   // bottom row (~0s)
    0.30 / 3, 0.35 / 3, 0.40 / 3,   // middle row (~0.3s)
    0.55 / 3, 0.60 / 3, 0.65 / 3,   // top row    (~0.55s) — wall done at ~0.75s
];
// Shield appears at normalized t=0.30 (0.9s), after top row is complete

export const BrickWallAnim = () => (
    <div className="w-16 h-14 relative flex items-center justify-center">
        {/* 3×3 brick grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 14px)', gridTemplateRows: 'repeat(3, 9px)', gap: 2 }}>
            {Array.from({ length: 9 }, (_, i) => (
                <motion.div
                    key={i}
                    style={{
                        gridRow: i < 3 ? 3 : i < 6 ? 2 : 1, // bottom row first
                        gridColumn: (i % 3) + 1,
                        width: 14,
                        height: 9,
                        borderRadius: 2,
                        backgroundColor: i % 2 === 0 ? '#EAB308' : 'rgba(234,179,8,0.60)',
                        transformOrigin: 'bottom',           // grows upward
                    }}
                    animate={{ scaleY: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'backOut' as const,
                        times: [0, BRICK_APPEAR[i], BRICK_APPEAR[i] + 0.09, 0.83, 1],
                    }}
                />
            ))}
        </div>

        {/* Shield: appears 0.35s after wall is fully built (wall done ~0.92s, shield at ~1.26s) */}
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'backOut' as const,
                times: [0, 0.42, 0.54, 0.83, 1],
            }}
        >
            <ShieldCheck size={52} strokeWidth={2} style={{ stroke: '#0f172a', fill: '#22c55e', filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.2))' }} />
        </motion.div>
    </div>
);

// ─── Conveyor Belts (Más Control) ────────────────────────────────────────────
// Two belts: top moves right, bottom moves left. 2 boxes per belt. 3s loop.

const BeltBox = ({ dir }: { dir: 1 | -1 }) => {
    const from = dir === 1 ? -12 : 48;
    const to = dir === 1 ? 48 : -12;
    return (
        <>
            <motion.div
                className="absolute bottom-[1px] rounded-[2px]"
                style={{ width: 10, height: 9, backgroundColor: 'rgba(234,179,8,0.85)' }}
                animate={{ x: [from, to] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                className="absolute bottom-[1px] rounded-[2px]"
                style={{ width: 10, height: 9, backgroundColor: 'rgba(234,179,8,0.65)' }}
                animate={{ x: [from, to] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: -1.5 }}
            />
        </>
    );
};

const Belt = ({ dir }: { dir: 1 | -1 }) => (
    <div className="relative w-full overflow-hidden" style={{ height: 14 }}>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-300" />
        {[4, 16, 28, 40].map((x) => (
            <div key={x} className="absolute rounded-full bg-slate-300" style={{ width: 3, height: 3, bottom: -1, left: x }} />
        ))}
        <BeltBox dir={dir} />
    </div>
);

export const ConveyorAnim = () => (
    <div className="w-12 h-10 flex flex-col justify-center gap-[6px] overflow-hidden">
        <Belt dir={1} />
        <Belt dir={-1} />
    </div>
);
