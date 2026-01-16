import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
