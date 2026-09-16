type AmbientProps = {
  className?: string;
  count?: number;
};

const DROPS = [
  { left: "6%", size: 5, dur: 17, delay: 0, peak: 0.5 },
  { left: "14%", size: 3, dur: 22, delay: 4, peak: 0.35 },
  { left: "23%", size: 7, dur: 19, delay: 8, peak: 0.55 },
  { left: "31%", size: 3, dur: 25, delay: 2, peak: 0.3 },
  { left: "39%", size: 4, dur: 20, delay: 11, peak: 0.45 },
  { left: "47%", size: 6, dur: 16, delay: 6, peak: 0.5 },
  { left: "55%", size: 3, dur: 24, delay: 13, peak: 0.3 },
  { left: "63%", size: 5, dur: 18, delay: 3, peak: 0.5 },
  { left: "71%", size: 4, dur: 23, delay: 9, peak: 0.4 },
  { left: "79%", size: 7, dur: 21, delay: 1, peak: 0.55 },
  { left: "87%", size: 3, dur: 26, delay: 12, peak: 0.3 },
  { left: "93%", size: 5, dur: 18, delay: 7, peak: 0.45 },
  { left: "18%", size: 4, dur: 27, delay: 15, peak: 0.3 },
  { left: "44%", size: 3, dur: 24, delay: 17, peak: 0.28 },
  { left: "68%", size: 4, dur: 26, delay: 16, peak: 0.32 },
];

export default function Ambient({ className = "", count = 15 }: AmbientProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {DROPS.slice(0, count).map((d, i) => (
        <span
          key={i}
          className="absolute bottom-[-12px] rounded-full"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            background: "radial-gradient(circle at 30% 30%, #f6cd83, #c9842a 70%, transparent 75%)",
            boxShadow: "0 0 8px 1px rgba(232,168,63,0.55)",
            ["--peak" as string]: d.peak,
            animation: `drift ${d.dur}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
