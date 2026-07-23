import NavBar from "../components/NavBar";
import { BookOpen, Mic, Zap } from "lucide-react";
import { useContext } from "react";
import HangulTab from "../components/HangulTab";
import { HangulContext } from "../contexts/HangulContext";
import Footer from "../components/Footer";

export default function HangulPage() {
  const { hangulTab, setHangulTab, consonants, vowels, phrases } =
    useContext(HangulContext);
  const charArray = hangulTab === "consonants" ? consonants : vowels;
  const phraseObj = phrases.find(
    (p) => p.type === (hangulTab === "consonants" ? "consonant" : "vowel"),
  );

  return (
    <>
      <NavBar />
      <div>
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
              <div className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                Start here
              </div>
              <h1 className="font-['Noto_Serif_KR'] text-5xl md:text-6xl font-bold leading-tight mb-4">
                한글 <span className="text-accent">Hangul</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
                The Korean writing system — created in 1443 by King Sejong — is
                one of the most scientifically designed alphabets in the world.
                Most learners can read it in under a day.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <BookOpen className="w-4 h-4" /> 24 letters
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <Zap className="w-4 h-4" /> Learn in 1 day
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <Mic className="w-4 h-4" /> Phonetic system
                </div>
              </div>
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
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex gap-1 bg-secondary rounded-full p-1">
              {["consonants", "vowels"].map((t) => (
                <button
                  key={t}
                  onClick={() => setHangulTab(t)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    hangulTab === t
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t === "consonants" ? "자음 Consonants" : "모음 Vowels"}
                </button>
              ))}
            </div>
            <span className="text-muted-foreground text-sm">
              Hover a character to see usage
            </span>
          </div>
          <HangulTab
            type={phraseObj?.type}
            phrase={phraseObj?.phrase}
            charArray={charArray}
          />
        </div>
        <div className="mt-12 bg-card border border-border rounded-2xl p-8">
          <h3 className="font-['Noto_Serif_KR'] text-xl font-bold text-foreground mb-2">
            Syllable Blocks
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Korean letters stack into square syllable blocks, not written
            left-to-right like the Latin alphabet.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                result: "한",
                parts: ["ㅎ", "ㅏ", "ㄴ"],
                desc: "h + a + n = han",
              },
              {
                result: "국",
                parts: ["ㄱ", "ㅜ", "ㄱ"],
                desc: "g + u + k = guk",
              },
              { result: "어", parts: ["ㅇ", "ㅓ"], desc: "silent + eo = eo" },
            ].map((ex) => (
              <div
                key={ex.result}
                className="bg-secondary rounded-xl p-5 text-center"
              >
                <div className="font-['Noto_Serif_KR'] text-5xl font-bold text-primary mb-3">
                  {ex.result}
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  {ex.parts.map((p, i) => (
                    <span
                      key={i}
                      className="font-['Noto_Serif_KR'] text-lg text-accent font-bold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {ex.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
