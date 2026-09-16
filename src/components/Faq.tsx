import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Which bikes can use Captrol Active 20W-40 4T?",
    a: "Any 4-stroke motorcycle or scooter whose owner's manual recommends an SAE 20W-40 grade meeting API SM (or earlier API grades). It is suitable for popular BS6 and older models from Hero, Honda, Bajaj, TVS, Yamaha, Suzuki, Royal Enfield, KTM, Jawa and more. Always confirm the viscosity grade in your owner's manual.",
  },
  {
    q: "What exactly is ActivBOND technology?",
    a: "ActivBOND is our polar additive system. Its molecules are electrically attracted to metal surfaces, forming a durable lubricating film that stays bonded even when the engine is switched off — so critical parts are protected from the very first crank, including the high-wear startup moment.",
  },
  {
    q: "Is it safe for BS6 bikes with catalytic converters?",
    a: "Yes. Captrol Active uses a catalyst-friendly, low-ash formulation designed not to foul oxygen sensors or catalytic converters, making it fully compatible with BS6 emission-control hardware.",
  },
  {
    q: "Does it work with wet-clutch motorcycles?",
    a: "Absolutely. Unlike passenger-car engine oils, this 4T grade is formulated to maintain the precise friction characteristics motorcycle wet clutches need — preventing slip while keeping shifts crisp.",
  },
  {
    q: "How often should I change the oil?",
    a: "Follow your motorcycle manufacturer's recommended drain interval. Our synthetic-technology base stocks resist thickening, sludge and viscosity loss, so the oil delivers confident protection through the full recommended interval — even in severe stop-and-go riding.",
  },
  {
    q: "How do bulk orders and dealerships work?",
    a: "Workshops, fleets and resellers can order 20-bottle factory cartons directly with GST invoices and bulk logistics. Fill the dealer enquiry form in the footer or WhatsApp us, and our team will share distributor pricing, minimum order details and marketing support options.",
  },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;

  return (
    <div
      className={`glass rounded-2xl transition-colors duration-300 ${
        open ? "border-brand-500/35 bg-white/[0.055]" : "hover:border-white/20"
      }`}
    >
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-[15.5px] font-semibold text-white">{q}</span>
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
              open
                ? "rotate-45 border-brand-500 bg-brand-500 text-white"
                : "border-white/15 bg-white/5 text-zinc-300"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[14px] leading-relaxed text-zinc-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-400" />
              Questions, answered
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
              Everything you need
              <br />
              to know <span className="text-gradient-gold">before you pour</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-400">
              Still unsure about grade or fitment? Our technical team answers on WhatsApp within
              working hours — with no obligation to buy.
            </p>
            <a href="#contact" className="btn btn-ghost mt-7">
              Ask a question
            </a>
          </Reveal>

          <div className="space-y-3.5 lg:col-span-7">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <Item q={f.q} a={f.a} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
