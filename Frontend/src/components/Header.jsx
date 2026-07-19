export default function Header({ hangul, english, description }) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='45' font-size='36' fill='white' font-family='serif'%3E한%3C/text%3E%3C/svg%3E")`,
          backgroundSize: "120px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-['Noto_Serif_KR'] text-5xl md:text-6xl font-bold leading-tight mb-4">
            {hangul} <span className="text-accent">{english}</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
            {description}
          </p>
        </div>
        <div className="hidden md:grid grid-cols-4 gap-3">
          {/* TODO: make this be imported from db rather than hardcoded */}
          {["가", "나", "다", "라", "마", "바", "사", "아"].map((ch) => (
            <div
              key={ch}
              className="aspect-square bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center font-['Noto_Serif_KR'] text-3xl font-bold transition-colors cursor-default"
            >
              {ch}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
