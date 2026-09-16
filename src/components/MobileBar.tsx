import { ShoppingCart } from "lucide-react";

export default function MobileBar({
  onAdd,
}: {
  onAdd: (qty: number, name: string) => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 sm:hidden">
      <div className="glass-strong border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between gap-4">
          <div className="leading-tight">
            <p className="font-display text-[13px] font-bold text-white">Captrol Active 20W-40</p>
            <p className="text-[12px] text-zinc-400">
              <span className="font-bold text-gold-300">₹349</span>
              <span className="ml-1.5 line-through text-zinc-600">₹420</span> · 1 Litre
            </p>
          </div>
          <button
            type="button"
            onClick={() => onAdd(1, "Single Bottle")}
            className="btn btn-primary !px-5 !py-2.5 !text-[13.5px]"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
