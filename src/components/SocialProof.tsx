import { Droplet } from "lucide-react";
import { Reveal } from "./Reveal";
import Counter from "./Counter";

const STATS = [
  { to: 100000, suffix: "+", label: "Riders protected" },
  { to: 2500, suffix: "+", label: "Partner workshops" },
  { to: 28, suffix: "", label: "States served across India" },
  { to: 98, suffix: "%", label: "Would recommend Captrol" },
];

const BRANDS = [
  "Hero",
  "Honda",
  "Bajaj",
  "TVS",
  "Yamaha",
  "Royal Enfield",
  "KTM",
  "Suzuki",
  "Jawa",
];

export default function SocialProof() {
  return (
    <section id="proof" className="relative border-y border-white/5 bg-ink-900/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </dd>
                <p className="mt-1.5 text-[13px] text-zinc-400">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Engineered for every popular 4T motorcycle on Indian roads
          </p>
          <div
            className="group relative mt-6 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="marquee-track flex w-max animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <span
                  key={`${b}-${i}`}
                  className="flex items-center gap-12 whitespace-nowrap font-display text-lg font-semibold tracking-wide text-zinc-500 transition-colors duration-300 hover:text-gold-300"
                >
                  {b}
                  <Droplet className="h-3.5 w-3.5 text-brand-500/70" fill="currentColor" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
