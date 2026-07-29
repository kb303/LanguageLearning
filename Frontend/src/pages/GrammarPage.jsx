import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GrammarCard from "../components/GrammarCard";
import { useContext, useState, useEffect } from "react";
import { WordContext } from "../contexts/WordContext";

export default function GrammarPage() {
  const { getGrammar } = useContext(WordContext);

  const [grammarData, setGrammarData] = useState([]);
  useEffect(() => {
    const fetchGrammar = async () => {
      const data = await getGrammar();
      setGrammarData(data);
    };
    fetchGrammar();
  }, [getGrammar]);

  return (
    <>
      <NavBar></NavBar>
      <Header
        hangul="문법"
        english="Grammar"
        description="Learn the rules of Korean grammar and sentence structure."
      />
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>
          {grammarData.map((item, index) => (
            <GrammarCard
              key={index}
              hangul={item.hangul}
              romanisation={item.romanisation}
              use={item.use}
              form={item.form}
              example={item.example}
            />
          ))}
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
