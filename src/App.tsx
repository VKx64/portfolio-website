import NeuralBackground from "./components/NeuralBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-neutral-300 font-display selection:bg-primary selection:text-white overflow-x-hidden text-lg">
      <NeuralBackground />
      <Header />
      <main className="flex-1 flex flex-col items-center w-full relative z-10">
        <div className="w-full px-[5%] lg:px-[18%]">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
