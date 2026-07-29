import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GrammarCard({
  hangul,
  romanisation,
  use,
  form,
  example,
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:border-primary/30 hover:shadow-md transition-all duration-200"
      onClick={() => setOpen((o) => !o)}
    >
      {/* Card header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div
            className="text-sm font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ color: "#3730A3" }}
          >
            {romanisation}
          </div>
        </div>

        <div className="mb-1">
          <span className="font-['Noto_Serif_KR'] text-2xl font-bold text-primary mr-2">
            {hangul}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{use}</p>
      </div>

      {/* Expanded detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div
              className="border-t border-border px-6 py-5 space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              {form.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-0.5">
                    <p className="text-sm text-foreground leading-relaxed">
                      {f.condition}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {f.form}
                    </p>
                  </div>
                </div>
              ))}

              {/* Examples */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Examples
                </p>
                <div className="space-y-2.5">
                  {example.map((ex, i) => (
                    <div key={i} className="bg-secondary rounded-xl px-4 py-3">
                      <div className="font-['Noto_Serif_KR'] text-base font-bold text-primary mb-0.5">
                        {ex.hangul}
                      </div>
                      <div className="text-xs text-muted-foreground mb-0.5">
                        {ex.romanisation}
                      </div>
                      <div className="text-sm text-foreground">
                        {ex.translation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
