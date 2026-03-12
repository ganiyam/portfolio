import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <div
          style={{
            position: "relative",
            height: "200vh",
          }}
        >
          <Hero />
          <Stats />
        </div>
        <Ticker />
        <About />
        <Skills />
        <Career />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
