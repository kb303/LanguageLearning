export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="font-['Noto_Serif_KR'] text-white text-xs font-bold">
              한
            </span>
          </div>
          <span className="text-sm text-muted-foreground">
            한국어 배우기 — Learn Korean
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          The Korean writing system, Hangul, was created in 1443 CE by King
          Sejong the Great.
        </p>
      </div>
    </footer>
  );
}
