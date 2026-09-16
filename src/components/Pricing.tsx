import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingCart, Truck, ShieldCheck, Factory, RotateCcw } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  qty: number;
  price: number;
  mrp: number;
  perL: string;
  features: string[];
  cta: string;
  popular?: boolean;
  quote?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "single",
    name: "Single Bottle",
    tagline: "Try the Captrol difference on your next service",
    qty: 1,
    price: 349,
    mrp: 420,
    perL: "₹349 / L",
    features: [
      "1 × 1L Captrol Active 20W-40 4T",
      "ActivBOND synthetic technology",
      "API SM grade · BS6 compatible",
      "Engine protection + heat control",
      "Sealed, date-stamped fresh stock",
    ],
    cta: "Add to Cart",
  },
  {
    id: "garage",
    name: "Garage Pack",
    tagline: "For 2–3 bikes, home mechanics & small shops",
    qty: 6,
    price: 1974,
    mrp: 2520,
    perL: "₹329 / L",
    features: [
      "6 × 1L bottles (save ₹546)",
      "Everything in Single Bottle",
      "Free express shipping",
      "Free service reminder sticker pack",
      "Priority email support",
    ],
    cta: "Add 6-Bottle Pack",
    popular: true,
  },
  {
    id: "carton",
    name: "Dealer Carton",
    tagline: "Factory carton for workshops, fleets & resellers",
    qty: 20,
    price: 5980,
    mrp: 8400,
    perL: "₹299 / L",
    features: [
      "20 × 1L sealed factory carton",
      "GST invoice & bulk logistics",
      "Dealer-rate repeat ordering",
      "Point-of-sale marketing support",
      "Dedicated relationship manager",
    ],
    cta: "Request Bulk Quote",
    quote: true,
  },
];

function PlanCard({
  plan,
  onAdd,
}: {
  plan: Plan;
  onAdd: (qty: number, name: string) => void;
}) {
  const [added, setAdded] = useState(false);

  const handle = () => {
    if (plan.quote) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    onAdd(plan.qty, plan.name);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  const save = Math.round(((plan.mrp - plan.price) / plan.mrp) * 100);

  return (
    <motion.div
      variants={staggerItem}
      className={`relative flex flex-col rounded-[1.5rem] p-7 transition-transform duration-500 sm:p-8 ${
        plan.popular
          ? "border-2 border-brand-500/60 bg-gradient-to-b from-ink-800 to-ink-900 shadow-[0_35px_90px_-30px_rgba(225,29,46,0.45)] lg:-translate-y-4 lg:scale-[1.03]"
          : "glass hover:-translate-y-1.5"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-brand-600/40">
          Most Popular
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl ${
            plan.popular ? "bg-brand-500 text-white" : "bg-white/6 text-gold-300 ring-1 ring-white/10"
          }`}
        >
          {plan.quote ? <Factory className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
        </span>
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
      </div>
      <p className="mt-2 min-h-[40px] text-[13px] leading-relaxed text-zinc-400">{plan.tagline}</p>

      <div className="mt-5 flex items-end gap-2.5">
        <span className="font-display text-4xl font-bold text-white">
          ₹{plan.price.toLocaleString("en-IN")}
        </span>
        <span className="pb-1.5 text-sm text-zinc-500 line-through">
          ₹{plan.mrp.toLocaleString("en-IN")}
        </span>
      </div>
      <div className="mt-1 flex items-center gap-2 text-[12.5px]">
        <span className={plan.popular ? "font-semibold text-gold-300" : "text-zinc-400"}>
          {plan.perL}
        </span>
        <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 font-semibold text-emerald-400">
          Save {save}%
        </span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[13.5px] text-zinc-300">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                plan.popular ? "bg-brand-500/20 text-brand-300" : "bg-emerald-500/12 text-emerald-400"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handle}
        className={`btn mt-8 w-full ${plan.popular ? "btn-primary" : "btn-ghost"}`}
        aria-label={`${plan.cta} — ${plan.name}, ₹${plan.price}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {added ? (
            <motion.span
              key="added"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2"
            >
              <Check className="h-4 w-4" strokeWidth={3} />
              Added to Cart
            </motion.span>
          ) : (
            <motion.span
              key="cta"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="inline-flex items-center gap-2"
            >
              {plan.quote ? <Factory className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
              {plan.cta}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function Pricing({
  onAdd,
}: {
  onAdd: (qty: number, name: string) => void;
}) {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand-700/12 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold-400" />
            Choose your pack
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
            One bottle protects.
            <br />
            <span className="text-gradient-brand">Cartons save you thousands.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
            Straight factory pricing with sealed, date-stamped stock — delivered to your door or
            your workshop.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid items-start gap-6 lg:grid-cols-3"
        >
          {PLANS.map((p) => (
            <PlanCard key={p.id} plan={p} onAdd={onAdd} />
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12.5px] text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-gold-300" /> Free shipping above ₹499
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-300" /> 100% genuine, sealed stock
            </span>
            <span className="inline-flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-gold-300" /> 7-day returns on sealed packs
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
