import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, BadgeCheck, FlaskConical, Magnet } from "lucide-react";
import { Reveal } from "./Reveal";
import Ambient from "./Ambient";

const PILLS = [
  { icon: ShieldCheck, label: "API SM Certified" },
  { icon: BadgeCheck, label: "BS6 Ready" },
  { icon: FlaskConical, label: "Synthetic Technology" },
  { icon: Magnet, label: "ActivBOND Formula" },
];

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="relative px-4 py-10 sm:px-6 sm:py-16">
      <Reveal>
        <div
          ref={ref}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_50px_120px_-40px_rgba(225,29,46,0.45)]"
        >
          <motion.div style={{ y: bgY }} className="absolute inset-0 h-[120%] -mt-[10%]">
            <img
              src="/images/oil-swirl.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-ink-950/82" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700/50 via-transparent to-ink-950/70" />
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/30 blur-[110px]" />
          <Ambient count={10} />

          <div className="relative px-7 py-16 text-center sm:px-14 sm:py-20">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.18em] text-gold-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              YOUR ENGINE DESERVES BETTER
            </motion.span>

            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Give your engine the{" "}
              <span className="text-gradient-gold">Captrol edge</span> — from the very first crank
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-300">
              Order online for doorstep delivery, or talk to us about dealer pricing for your
              workshop or fleet. Fresh, sealed, factory stock — guaranteed.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a href="#pricing" className="btn btn-primary text-[15px]">
                Add to Cart — From ₹349
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn btn-ghost text-[15px]">
                <PhoneCall className="h-4 w-4 text-gold-300" />
                Talk to Sales
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {PILLS.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 text-[12.5px] font-medium text-zinc-300"
                >
                  <p.icon className="h-4 w-4 text-gold-300" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
