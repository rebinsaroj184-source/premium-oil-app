import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cog,
  Volume2,
  Power,
  CalendarClock,
  Leaf,
  Sun,
  Star,
} from "lucide-react";
import Counter from "./Counter";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const BENEFITS = [
  {
    icon: Cog,
    title: "Silky gear shifts & clutch feel",
    body: "Friction-modified for precise wet-clutch engagement and crisp, notch-free gear changes.",
  },
  {
    icon: Volume2,
    title: "Quieter, smoother engine",
    body: "Cushions valvetrain and gear contact to dampen clatter and dull handlebar buzz.",
  },
  {
    icon: Power,
    title: "Protected from the first crank",
    body: "ActivBOND molecules stay bonded overnight, eliminating dry-start metal-on-metal wear.",
  },
  {
    icon: CalendarClock,
    title: "Stays in grade, longer",
    body: "Synthetic base stocks resist thickening and sludge for confident full-interval service.",
  },
  {
    icon: Leaf,
    title: "Safe for BS6 emissions systems",
    body: "Low-ash, catalyst-friendly chemistry protects sensors and catalytic converters.",
  },
  {
    icon: Sun,
    title: "Unfazed by 45°C+ summers",
    body: "A high film strength at operating temperature keeps compression and power steady in heat.",
  },
];

const PERF = [
  { to: 40, suffix: "%", label: "Smoother gear shifts*" },
  { to: 15, suffix: "°C", prefix: "−", label: "Peak running temperature*" },
  { to: 5, suffix: "%", label: "Better fuel economy*" },
];

export default function Benefits() {
  const imgRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: imgScroll } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(imgScroll, [0, 1], [-28, 28]);
  const { scrollYProgress: bandScroll } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(bandScroll, [0, 1], ["-8%", "8%"]);

  return (
    <section id="benefits" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-brand-700/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal y={36}>
            <div ref={imgRef} className="relative">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]">
                <motion.div style={{ y: imgY }} className="h-[112%] -mt-[6%]">
                  <img
                    src="/images/workshop-pour.jpg"
                    alt="Mechanic pouring golden Captrol Active synthetic engine oil into a motorcycle engine"
                    loading="lazy"
                    className="h-full w-full scale-105 object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/20" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <div className="glass-strong rounded-xl px-4 py-3">
                    <p className="font-display text-sm font-bold text-white">ActivBOND Technology</p>
                    <p className="text-[12px] text-zinc-400">Bonds on contact · Protects on start</p>
                  </div>
                  <div className="glass-strong rounded-xl px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-0.5 text-gold-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="mt-0.5 text-[12px] text-zinc-300">
                      <span className="font-bold text-white">4.9/5</span> average rating
                    </p>
                  </div>
                </div>
              </div>
              {/* decorative ring */}
              <div className="pointer-events-none absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full border border-dashed border-gold-400/30 animate-spin-slow" />
            </div>
          </Reveal>

          {/* Copy side */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-400" />
                Why riders switch
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
                Made for city heat.
                <br />
                Built for <span className="text-gradient-gold">highway miles.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                From Monday-morning traffic to weekend tours, Captrol Active keeps your motorcycle
                feeling the way it did on day one.
              </p>
            </Reveal>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-70px" }}
              className="mt-8 space-y-3"
            >
              {BENEFITS.map((b) => (
                <motion.li
                  key={b.title}
                  variants={staggerItem}
                  className="group flex gap-4 rounded-xl border border-white/6 bg-white/[0.03] p-4 transition-all duration-300 hover:border-brand-500/30 hover:bg-white/[0.055]"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/12 text-brand-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
                    <b.icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold text-white">{b.title}</p>
                    <p className="mt-0.5 text-[13.5px] leading-relaxed text-zinc-400">{b.body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Performance band */}
        <Reveal delay={0.1} className="mt-16">
          <div
            ref={bandRef}
            className="relative overflow-hidden rounded-[1.6rem] border border-white/10"
          >
            <motion.div style={{ y: bgY }} className="absolute inset-0 h-[116%] -mt-[8%]">
              <img
                src="/images/rider-highway.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-ink-950/82" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-700/40 via-transparent to-ink-950/60" />

            <div className="relative grid gap-8 px-8 py-12 text-center sm:px-12 sm:py-14 md:grid-cols-3">
              {PERF.map((p) => (
                <div key={p.label}>
                  <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                    <Counter
                      to={p.to}
                      prefix={p.prefix ?? ""}
                      suffix={p.suffix}
                      className="text-gradient-gold"
                    />
                  </p>
                  <p className="mt-2 text-[13.5px] font-medium text-zinc-300">{p.label}</p>
                </div>
              ))}
            </div>
            <p className="relative px-8 pb-6 text-center text-[11px] text-zinc-500 sm:px-12">
              *Indicative results from in-house ride-cycle tests versus conventional API SG
              multigrade oils. Actual results vary by motorcycle model, condition and riding style.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
