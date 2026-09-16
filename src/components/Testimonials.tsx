import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const REVIEWS = [
  {
    name: "Rohit Mehta",
    role: "Daily commuter · Honda SP 125",
    city: "New Delhi",
    grad: "from-brand-500 to-brand-700",
    quote:
      "Three oil changes on Captrol Active and the engine feels noticeably quieter in morning traffic. Gear shifts are buttery and I'm getting close to 4 km/l more around the city.",
  },
  {
    name: "Irfan Khan",
    role: "Garage owner · 1,200+ bikes serviced",
    city: "Hyderabad",
    grad: "from-gold-400 to-gold-500",
    quote:
      "I've poured Captrol Active into everything from 100cc commuters to Himalayans. Zero clutch complaints, and riders come back saying the bike feels peppier. It's the default 20W-40 in my workshop now.",
  },
  {
    name: "Vikram Singh",
    role: "Fleet operator · 40 delivery bikes",
    city: "Jaipur",
    grad: "from-zinc-400 to-zinc-700",
    quote:
      "Each bike does 120 km a day in brutal heat. After we switched, heat-related servicing dropped sharply and oil analysis still looked good at drain interval. The carton pricing makes it a no-brainer.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative border-y border-white/5 bg-ink-900/50 py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-gold-500/8 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold-400" />
            Rider stories
            <span className="h-px w-6 bg-gold-400" />
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
            Loved by commuters,
            <br className="hidden sm:block" /> fleets and garages
          </h2>
          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2">
            <div className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-[13px] text-zinc-300">
              <span className="font-bold text-white">4.9/5</span> average from 12,400+ verified buyers
            </span>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {REVIEWS.map((r) => (
            <motion.figure
              key={r.name}
              variants={staggerItem}
              className="feature-card glass relative flex flex-col rounded-2xl p-7"
            >
              <Quote
                className="absolute right-6 top-6 h-9 w-9 text-white/8"
                fill="currentColor"
                aria-hidden="true"
              />
              <div className="flex gap-0.5 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="relative mt-5 flex-1 text-[14.5px] leading-relaxed text-zinc-300">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-white/8 pt-5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${r.grad} font-display text-sm font-bold text-white`}
                >
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-[14.5px] font-semibold text-white">{r.name}</span>
                  <span className="block text-[12.5px] text-zinc-400">{r.role}</span>
                  <span className="block text-[11.5px] text-zinc-500">{r.city}, India</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
