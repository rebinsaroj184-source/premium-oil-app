import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Thermometer,
  Fuel,
  BadgeCheck,
  Star,
  ChevronDown,
  Handshake,
} from "lucide-react";
import Bottle from "./Bottle";
import Ambient from "./Ambient";
import { staggerContainer, staggerItem } from "./Reveal";

const CHIPS = [
  { icon: ShieldCheck, label: "360° Engine Protection", pos: "left-[2%] top-[15%] sm:left-[0%]", delay: "0s", dur: "6s" },
  { icon: Thermometer, label: "Heat Control", pos: "right-[0%] top-[30%]", delay: "1.1s", dur: "7.2s" },
  { icon: Fuel, label: "Fuel Saver Formula", pos: "left-[0%] bottom-[27%]", delay: "2s", dur: "6.6s" },
  { icon: BadgeCheck, label: "API SM • BS6 Ready", pos: "right-[1%] bottom-[11%]", delay: "0.6s", dur: "8s" },
];

const AVATARS = [
  { initials: "AR", grad: "from-brand-500 to-brand-700" },
  { initials: "VK", grad: "from-gold-400 to-gold-500" },
  { initials: "SK", grad: "from-zinc-500 to-zinc-700" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bottleY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      {/* Background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img
          src="/images/hero-engine.jpg"
          alt=""
          aria-hidden="true"
          className="h-[112%] w-full object-cover object-right opacity-55 lg:opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
        <div className="absolute inset-0 grid-bg" />
      </motion.div>

      {/* glows + particles */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-[480px] w-[480px] rounded-full bg-brand-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-120px] top-40 -z-10 h-[520px] w-[520px] rounded-full bg-gold-500/10 blur-[150px]" />
      <Ambient count={14} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:pb-28">
        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="lg:col-span-6"
        >
          <motion.div variants={staggerItem}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11.5px] font-semibold tracking-wider text-zinc-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              BS6 READY · API SM CERTIFIED · 4-STROKE
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mt-6 font-display text-[2.55rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]"
          >
            Unleash Maximum
            <br />
            <span className="text-gradient-brand">Engine Performance</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Captrol Active <span className="font-semibold text-zinc-200">20W-40 4T</span> is a
            synthetic-technology motorcycle oil built with our patented{" "}
            <span className="font-semibold text-gold-300">ActivBOND</span> formula — molecules
            that cling to metal from the very first crank for cooler running, smoother shifts and
            more kilometres per litre.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#pricing" className="btn btn-primary group text-[15px]">
              Add to Cart — From ₹349
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#technology" className="btn btn-ghost text-[15px]">
              <Handshake className="h-4 w-4 text-gold-300" />
              Become a Dealer
            </a>
          </motion.div>

          {/* trust row */}
          <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center">
              <div className="flex -space-x-2.5">
                {AVATARS.map((a) => (
                  <span
                    key={a.initials}
                    className={`grid h-9 w-9 place-items-center rounded-full border-2 border-ink-950 bg-gradient-to-br ${a.grad} text-[10px] font-bold text-white`}
                  >
                    {a.initials}
                  </span>
                ))}
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink-950 bg-white/10 text-[9px] font-bold text-zinc-200">
                  1L+
                </span>
              </div>
              <div className="ml-3">
                <div className="flex items-center gap-0.5 text-gold-400" aria-label="Rated 4.9 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                  <span className="ml-1.5 text-[13px] font-bold text-white">4.9</span>
                </div>
                <p className="text-[12px] text-zinc-400">from 1,00,000+ riders</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
            <p className="text-[13px] text-zinc-400">
              Trusted by <span className="font-semibold text-white">2,500+</span> workshops
              <br className="hidden sm:block" /> across India
            </p>
          </motion.div>
        </motion.div>

        {/* Bottle stage */}
        <div className="relative lg:col-span-6">
          <motion.div
            style={{ y: bottleY }}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-[440px]"
          >
            {/* halo */}
            <div className="glow-pulse pointer-events-none absolute left-1/2 top-[46%] -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/25 blur-[110px]" />
            <div className="pointer-events-none absolute left-1/2 top-[46%] -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[80px]" />

            {/* rotating ring */}
            <div className="pointer-events-none absolute left-1/2 top-[47%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-white/10" />

            <Bottle className="relative mx-auto w-[78%] drop-shadow-[0_45px_55px_rgba(0,0,0,0.75)] animate-float-slow sm:w-[72%]" />

            {/* reflection */}
            <div
              className="mx-auto -mt-4 h-10 w-[62%] rounded-[100%] bg-black/55 blur-md"
              aria-hidden="true"
            />

            {/* floating chips */}
            {CHIPS.map((c) => (
              <div
                key={c.label}
                className={`absolute ${c.pos} hidden items-center gap-2 rounded-full glass-strong px-3.5 py-2 shadow-xl shadow-black/40 sm:flex`}
                style={{ animation: `float ${c.dur} ease-in-out ${c.delay} infinite` }}
              >
                <c.icon className="h-4 w-4 text-gold-300" />
                <span className="whitespace-nowrap text-[12px] font-semibold text-zinc-100">{c.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#proof"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-white md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="grid h-9 w-6 place-items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="scroll-cue-dot h-1.5 w-1.5 rounded-full bg-gold-300" />
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
