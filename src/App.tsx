import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

type Toast = { id: number; message: string } | null;

export default function App() {
  const [cart, setCart] = useState(0);
  const [toast, setToast] = useState<Toast>(null);

  const handleAdd = useCallback((qty: number, name: string) => {
    setCart((c) => c + qty);
    setToast({ id: Date.now(), message: `${qty} bottle${qty > 1 ? "s" : ""} from ${name} added to cart` });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(t);
  }, [toast]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-ink-950 text-zinc-200">
        {/* global ambient vignette */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-brand-700/8 blur-[150px]" />
          <div className="absolute right-[-10%] top-[55%] h-[460px] w-[460px] rounded-full bg-gold-500/6 blur-[160px]" />
        </div>

        <Navbar cartCount={cart} />

        <main>
          <Hero />
          <SocialProof />
          <Features />
          <Showcase />
          <Benefits />
          <Testimonials />
          <Pricing onAdd={handleAdd} />
          <Faq />
          <CtaBanner />
        </main>

        <Footer />
        <MobileBar onAdd={handleAdd} />

        {/* Add-to-cart toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              role="status"
              aria-live="polite"
              className="fixed bottom-24 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-full glass-strong px-5 py-3 shadow-2xl sm:bottom-8"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <span className="whitespace-nowrap text-[13.5px] font-semibold text-white">
                {toast.message}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
