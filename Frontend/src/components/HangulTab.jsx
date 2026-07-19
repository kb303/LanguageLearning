import HangulCard from "./HangulCard";

export default function HangulTab({ phrase, type, charArray }) {
  return (
    <>
      <div>
        <div className="mb-5">
          <h2 className="font-['Noto_Serif_KR'] text-2xl font-bold text-foreground mb-1">
            {type}
          </h2>
          <p className="text-muted-foreground text-sm">{phrase}</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3">
          {charArray.map((c) => (
            <HangulCard key={c.char} {...c} />
          ))}
        </div>
      </div>
    </>
  );
}
