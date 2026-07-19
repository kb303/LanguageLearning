import { ArrowRight } from "lucide-react";

export default function CTAButton({ label, primary = true, buttonClick }) {
  return (
    <button
      onClick={buttonClick}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
        primary
          ? "bg-accent text-accent-foreground hover:opacity-90 shadow-lg shadow-accent/20"
          : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
      }`}
    >
      {label} <ArrowRight className="w-4 h-4" />
    </button>
  );
}
