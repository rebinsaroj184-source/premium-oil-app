import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Check,
  BadgeCheck,
  ShieldCheck,
  FlaskConical,
  Send,
} from "lucide-react";

const SOCIALS: { label: string; path: string }[] = [
  {
    label: "Facebook",
    path: "M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.6 0 14.4 0 11.9 0 10 1.5 10 4.3V6H7v3h3v9h4V9z",
  },
  {
    label: "Instagram",
    path: "M10 1.8c2.7 0 3 0 4.1.1 1 .1 1.5.2 1.9.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3.9.4 1.9.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.5-.4 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-.9.3-1.9.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.5-.2-1.9-.4-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.2-.4-.3-.9-.4-1.9C1.8 13 1.8 12.7 1.8 10s0-3 .1-4.1c.1-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2.9-.3 1.9-.4C7 1.8 7.3 1.8 10 1.8zm0 3.3a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.1-8.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z",
  },
  {
    label: "YouTube",
    path: "M17.9 3.4C19 3.7 19.8 4.5 20.1 5.6 20.6 7.2 20.6 10 20.6 10s0 2.8-.5 4.4c-.3 1.1-1.1 1.9-2.2 2.2-1.6.5-7.9.5-7.9.5s-6.3 0-7.9-.5C1 16.3.2 15.5-.1 14.4-.6 12.8-.6 10-.6 10s0-2.8.5-4.4C.2 4.5 1 3.7 2.1 3.4 3.7 2.9 10 2.9 10 2.9s6.3 0 7.9.5zM8 7.3v5.4L12.6 10 8 7.3z",
  },
  {
    label: "X",
    path: "M18.9 1.5h3.3l-7.2 8.3L23.5 22h-6.6l-5.2-6.8L5.8 22H2.5l7.7-8.8L1.5 1.5h6.8l4.7 6.2 5.9-6.2zm-1.2 18.4h1.8L7.2 3.5H5.3l12.4 16.4z",
  },
];

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Captrol Active 20W-40 4T", href: "#product" },
      { label: "ActivBOND Technology", href: "#technology" },
      { label: "Pricing & Packs", href: "#pricing" },
      { label: "Bike Compatibility", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Vanshwallia", href: "#top" },
      { label: "Become a Dealer", href: "#contact" },
      { label: "Workshop Partnerships", href: "#contact" },
      { label: "Rider Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#faq" },
      { label: "Shipping & Returns", href: "#faq" },
      { label: "Track Your Order", href: "#contact" },
      { label: "GST Invoices", href: "#contact" },
    ],
  },
];

const CERTS = [
  { icon: BadgeCheck, label: "API SM" },
  { icon: ShieldCheck, label: "BS6 Compatible" },
  { icon: FlaskConical, label: "Synthetic Tech" },
];

function DealerForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-display text-lg font-bold text-white">Become a Captrol dealer</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">
        Get distributor pricing, carton MOQs and marketing support. Our team calls back within one
        working day.
      </p>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3.5 text-[14px] text-emerald-300"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white">
              <Check className="h-4 w-4" strokeWidth={3} />
            </span>
            Thank you — your enquiry is in. We'll call you shortly.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid grid-cols-2 gap-3">
              <label className="sr-only" htmlFor="dealer-name">
                Name
              </label>
              <input
                id="dealer-name"
                required
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-ink-950/70 px-4 py-2.5 text-[13.5px] text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-500/60"
              />
              <label className="sr-only" htmlFor="dealer-phone">
                Phone
              </label>
              <input
                id="dealer-phone"
                required
                type="tel"
                inputMode="tel"
                placeholder="Phone / WhatsApp"
                className="rounded-xl border border-white/10 bg-ink-950/70 px-4 py-2.5 text-[13.5px] text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-500/60"
              />
            </div>
            <label className="sr-only" htmlFor="dealer-city">
              City
            </label>
            <input
              id="dealer-city"
              required
              placeholder="City / district"
              className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-2.5 text-[13.5px] text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-500/60"
            />
            <button type="submit" className="btn btn-primary w-full">
              Request Dealer Callback
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/8 bg-ink-900/60 pb-24 pt-16 sm:pb-0 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/30">
                <Droplets className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[15px] font-bold tracking-wide text-white">
                  CAPTROL
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.32em] text-brand-400">
                  Active 4T
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-zinc-400">
              Captrol Active Engine Power Formula is a Vanshwallia quality product — synthetic-technology
              4T motorcycle lubricants engineered to unleash maximum engine performance, kilometre
              after kilometre.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <li
                  key={c.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[11.5px] font-semibold text-zinc-300"
                >
                  <c.icon className="h-3.5 w-3.5 text-gold-300" />
                  {c.label}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={`Captrol on ${s.label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/50 hover:bg-brand-500/15 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d={s.path} transform="translate(2 2)" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[13px] text-zinc-400 transition-colors duration-300 hover:text-gold-300"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact + form */}
          <div className="space-y-6 lg:col-span-4">
            <ul className="space-y-3 text-[13.5px] text-zinc-400">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href="tel:+919000000000" className="hover:text-white">
                  +91 90000 00000
                  <span className="ml-2 text-zinc-500">(Mon–Sat, 10am–7pm IST)</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href="mailto:sales@captrolactive.in" className="hover:text-white">
                  sales@captrolactive.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                Vanshwallia Lubricants, Industrial Area, India
              </li>
            </ul>
            <DealerForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/8 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[12px] text-zinc-500">
            © {new Date().getFullYear()} Vanshwallia. Captrol and Captrol Active are trademarks of
            their respective owner. All rights reserved.
          </p>
          <p className="text-[11.5px] text-zinc-600">
            Motorcycle brand names are used for compatibility reference only and belong to their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
