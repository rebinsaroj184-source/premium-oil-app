import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Gauge,
  BadgeCheck,
  Bike,
  FlaskConical,
  Magnet,
  Beaker,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Bottle from "./Bottle";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const SPECS = [
  { icon: Gauge, label: "SAE viscosity grade", value: "20W-40" },
  { icon: BadgeCheck, label: "API performance level", value: "API SM" },
  { icon: Bike, label: "Engine application", value: "4-Stroke (4T) motorcycles" },
  { icon: FlaskConical, label: "Base oil technology", value: "Synthetic Technology" },
  { icon: Magnet, label: "Signature additive system", value: "Improved ActivBOND" },
  { icon: Beaker, label: "Pack size", value: "1 Litre" },
];

const TAGS = [
  { text: "20W-40", pos: "left-[-2%] top-[16%]", delay: "0s" },
  { text: "API SM 4T", pos: "right-[-2%] top-[34%]", delay: "0.8s" },
  { text: "1 LITRE", pos: "left-[2%] bottom-[18%]", delay: "1.6s" },
  { text: "ACTIVBOND", pos: "right-[2%] bottom-[8%]", delay: "2.2s" },
];

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="product" className="relative py-24 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
          {/* ambient glows */}
          <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-600/15 blur-[120px]" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-60" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-4">
            {/* Left — spec sheet */}
            <div className="p-8 sm:p-12">
              <Reveal>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-gold-400" />
                  The product
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.5rem] sm:leading-[1.1]">
                  The 1-litre bottle your
                  <br />
                  engine has been <span className="text-gradient-brand">asking for</span>
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-zinc-400">
                  Captrol Active is formulated specifically for 4-stroke Indian motorcycles —
                  balancing high-temp protection, wet-clutch compatibility and fuel economy in one
                  precision blend.
                </p>
              </Reveal>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-70px" }}
                className="mt-8 space-y-2.5"
              >
                {SPECS.map((s) => (
                  <motion.li
                    key={s.label}
                    variants={staggerItem}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/6 text-gold-300 ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-brand-500/20 group-hover:text-brand-300">
                      <s.icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                    </span>
                    <span className="flex-1 text-[13px] text-zinc-400">{s.label}</span>
                    <span className="font-display text-[14.5px] font-semibold text-white">
                      {s.value}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center gap-3.5">
                  <a href="#pricing" className="btn btn-primary">
                    Add to Cart
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="inline-flex items-center gap-2 text-[13px] text-zinc-400">
                    <ShieldCheck className="h-4 w-4 text-gold-300" />
                    Satisfaction guaranteed or replaced
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right — bottle stage */}
            <div className="relative flex min-h-[520px] items-center justify-center py-10">
              <div className="glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[110px]" />
              <motion.div style={{ y: imgY }} className="relative w-[70%] max-w-[340px]">
                <Bottle className="w-full drop-shadow-[0_40px_50px_rgba(0,0,0,0.7)] animate-float-slow" />
              </motion.div>

              {/* hotspot dots */}
              <span className="absolute left-[58%] top-[24%] flex h-3 w-3">
                <span className="animate-pulse-ring absolute h-full w-full rounded-full bg-gold-400" />
                <span className="relative h-3 w-3 rounded-full border-2 border-ink-950 bg-gold-300" />
              </span>
              <span className="absolute left-[38%] top-[54%] flex h-3 w-3">
                <span className="animate-pulse-ring absolute h-full w-full rounded-full bg-brand-500" style={{ animationDelay: "0.8s" }} />
                <span className="relative h-3 w-3 rounded-full border-2 border-ink-950 bg-brand-400" />
              </span>
              <span className="absolute left-[60%] top-[82%] flex h-3 w-3">
                <span className="animate-pulse-ring absolute h-full w-full rounded-full bg-gold-400" style={{ animationDelay: "1.5s" }} />
                <span className="relative h-3 w-3 rounded-full border-2 border-ink-950 bg-gold-300" />
              </span>

              {TAGS.map((t) => (
                <span
                  key={t.text}
                  className={`glass-strong absolute ${t.pos} hidden rounded-full px-3 py-1.5 font-display text-[11px] font-semibold tracking-[0.14em] text-white shadow-lg sm:block`}
                  style={{ animation: `float 7s ease-in-out ${t.delay} infinite` }}
                >
                  {t.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
