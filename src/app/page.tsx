import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import About from "@/components/About";

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
          <About />
        </div>
        {/* <Ticker /> */}
        <Skills />
        {/*   <Career />
        <Projects /> */}
      </main>
      <Footer />
    </>
  );
}
