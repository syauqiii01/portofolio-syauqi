import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative bg-gray-950 bg-grid-pattern text-gray-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <div className="pointer-events-none fixed -top-24 -left-24 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full" />
      <div className="pointer-events-none fixed top-1/2 -right-24 w-[450px] h-[450px] bg-purple-600/15 blur-[140px] rounded-full" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}