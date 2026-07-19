import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GrammarPage() {
  return (
    <>
      <NavBar></NavBar>
      <Header
        hangul="문법"
        english="Grammar"
        description="Learn the rules of Korean grammar and sentence structure."
      />
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>{/* <GrammarContent /> */}</section>
      </div>
      <Footer></Footer>
    </>
  );
}
