import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingBag, Droplets } from "lucide-react";

const LINKS = [
  { label: "Technology", href: "#technology" },
  { label: "Product", href: "#product" },
  { label: "Why Captrol", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Captrol Active — home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-105">
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
  );
}

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
              scrolled
                ? "glass-strong shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)]"
                : "border border-transparent bg-transparent"
            }`}
          >
            <Logo />

            <ul className="hidden items-center gap-1 lg:flex">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="relative rounded-full px-3.5 py-2 text-[13.5px] font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative z-10">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2.5">
              <a
                href="#pricing"
                aria-label={`Cart with ${cartCount} bottles`}
                className="relative grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-zinc-200 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <ShoppingBag className="h-[18px] w-[18px]" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 22 }}
                      className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1 text-[10px] font-bold text-white shadow-lg shadow-brand-600/50"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
              <a href="#pricing" className="btn btn-primary hidden !px-5 !py-2.5 !text-[13px] sm:inline-flex">
                Order Now
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white lg:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 lg:hidden"
          >
            <div className="glass-strong rounded-2xl p-3 shadow-2xl">
              <ul className="flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[15px] font-medium text-zinc-200 transition-colors hover:bg-white/6 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2 w-full"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
