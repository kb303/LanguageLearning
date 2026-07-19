import NavBar from "../components/NavBar";
import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Star, BookOpen, Zap, Users, Brain, Award } from "lucide-react";
import CTAButton from "../components/CTAButton";
import { NavContext } from "../contexts/NavContext";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

export default function HomePage() {
  const { setloginModalOpen, loginModalOpen } = useContext(NavContext);
  const { registerModalOpen, setRegisterModalOpen } = useContext(NavContext);

  const openLoginModal = (e) => {
    setloginModalOpen(true);
  };

  const openRegisterModal = (e) => {
    setRegisterModalOpen(true);
  };
  const closeModal = () => setloginModalOpen(false);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };
  //TODO: put this in backend and fetch it from there, rather than hardcoding it here. Also, make it dynamic based on user progress.
  const stats = [
    { value: "77M+", label: "Native speakers worldwide" },
    { value: "24", label: "Structured lessons" },
    { value: "1 day", label: "To read Hangul" },
    { value: "Top 10", label: "Most studied languages" },
  ];

  //TODO:put this in backend and fetch it from there, rather than hardcoding it here. Also, make it dynamic based on user progress.
  const steps = [
    {
      step: "01",
      title: "Learn the alphabet",
      desc: "Start with Hangul. It looks complex but is entirely phonetic — most learners can read it in a single session.",
      icon: (
        <span className="font-['Noto_Serif_KR'] text-xl font-bold">ㄱ</span>
      ),
    },
    {
      step: "02",
      title: "Build vocabulary",
      desc: "Flip through cards, save words to personal lists, and search for words as you encounter them.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      step: "03",
      title: "Study with lessons",
      desc: "Follow structured lessons on greetings, numbers, grammar, and cultural context — in order or by interest.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      step: "04",
      title: "Test yourself",
      desc: "Reinforce what you know with quizzes. Each wrong answer comes with an explanation to help it stick.",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <NavBar></NavBar>
      {/*TODO: make it so that if user is logged in, it shows their name and a dropdown menu with options to go to profile, settings, and logout. */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden min-h-[88vh] flex items-center">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='8' y='60' font-size='52' fill='white' font-family='serif'%3E한%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "160px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center w-full">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              Free Korean learning — no subscription required
            </div>

            <h1 className="font-['Noto_Serif_KR'] text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              한국어를
              <br />
              <span className="text-accent">배워보세요</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-md font-['Plus_Jakarta_Sans']">
              Learn to read, write, and speak Korean — from the alphabet to
              natural conversation. Structured lessons, vocabulary cards, and
              instant quizzes.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <CTAButton
                label="Login"
                primary={false}
                buttonClick={openLoginModal}
              />
              <CTAButton label="Sign Up" buttonClick={openRegisterModal} />
            </div>
          </motion.div>

          {/* Floating character grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:grid grid-cols-4 gap-3"
          >
            {/*TODO: make this be imported from db rather than hardcoded */}
            {[
              { char: "안", label: "an", note: "peace" },
              { char: "녕", label: "nyeong", note: "hello" },
              { char: "하", label: "ha", note: "do" },
              { char: "세", label: "se", note: "world" },
              { char: "요", label: "yo", note: "(formal)" },
              { char: "감", label: "gam", note: "feeling" },
              { char: "사", label: "sa", note: "thanks" },
              { char: "랑", label: "rang", note: "love" },
            ].map((item, i) => (
              <motion.div
                key={item.char}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="aspect-square bg-white/10 hover:bg-white/20 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-default transition-colors group"
              >
                <span className="font-['Noto_Serif_KR'] text-3xl font-bold group-hover:scale-110 transition-transform inline-block">
                  {item.char}
                </span>
                <span className="text-[10px] text-white/40">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
          <div className="w-px h-8 bg-white/20 animate-pulse" />
          scroll
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-['Noto_Serif_KR'] text-3xl font-bold text-primary mb-1">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works section */}
      <section className="bg-secondary/50 border-y border-border py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              The path forward
            </p>
            <h2 className="font-['Noto_Serif_KR'] text-4xl font-bold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-sm mx-auto">
              A simple four-step loop that takes you from zero to
              conversational.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border z-0" />
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-5 text-primary shadow-sm">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-accent tracking-widest mb-2">
                  {s.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
