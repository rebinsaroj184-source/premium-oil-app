import { motion } from "framer-motion";
import {
  Magnet,
  ShieldCheck,
  Thermometer,
  Fuel,
  FlaskConical,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    icon: Magnet,
    title: "ActivBOND Molecular Bonding",
    body: "Polar additive molecules cling to metal surfaces even when the engine is off — so wear protection is live the instant you press the starter, not minutes later.",
    accent: "text-brand-400",
  },
  {
    icon: ShieldCheck,
    title: "360° Engine Protection",
    body: "A tough, continuous film guards pistons, cylinder walls, gear teeth and the wet clutch against scuffing, corrosion and wear in every riding condition.",
    accent: "text-gold-300",
  },
  {
    icon: Thermometer,
    title: "Advanced Heat Control",
    body: "High-temperature oxidation stability fights viscosity breakdown in crawling city traffic and sustained highway runs, keeping your engine running cool.",
    accent: "text-brand-400",
  },
  {
    icon: Fuel,
    title: "Fuel Saver Friction Film",
    body: "The ultra-low-friction ActivBOND layer frees up energy lost to drag — restoring pickup and helping you squeeze more kilometres from every litre.",
    accent: "text-gold-300",
  },
  {
    icon: FlaskConical,
    title: "Synthetic Technology",
    body: "Premium refined base oils and a balanced additive package stay in grade for longer, giving you confident, consistent performance between oil changes.",
    accent: "text-brand-400",
  },
  {
    icon: BadgeCheck,
    title: "BS6 & API SM 4T Grade",
    body: "Formulated to API SM specifications for 4-stroke motorcycles and fully compatible with BS6 engines and their catalytic after-treatment systems.",
    accent: "text-gold-300",
  },
];

function Card({ feature, index }: { feature: Feature; index: number }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      variants={staggerItem}
      onMouseMove={onMove}
      className="feature-card glass group rounded-2xl p-6 sm:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="feature-icon grid h-12 w-12 place-items-center rounded-xl bg-white/6 text-zinc-100 ring-1 ring-white/10">
          <feature.icon className="h-6 w-6" strokeWidth={1.9} />
        </span>
        <span className="font-display text-sm font-bold text-white/15 transition-colors duration-300 group-hover:text-brand-500/60">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mt-2.5 text-[14px] leading-relaxed text-zinc-400">{feature.body}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="technology" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-700/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-400" />
            The Captrol advantage
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
            Science that bonds.
            <br />
            <span className="text-gradient-gold">Performance that lasts.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
            Every bottle of Captrol Active is engineered around one goal — an engine that feels
            factory-fresh kilometre after kilometre. Six layers of technology make it happen.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f, i) => (
            <Card key={f.title} feature={f} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
