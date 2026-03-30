import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import BentoFeatures from "@/components/BentoFeatures";
import Playground   from "@/components/Playground";
import CodeSwitcher from "@/components/CodeSwitcher";
import Solutions    from "@/components/Solutions";
import Process      from "@/components/Process";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative bg-white">
        <Navbar />
        <Hero />
        <BentoFeatures />
        <Playground />
        <CodeSwitcher />
        <Solutions />
        <Process />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
