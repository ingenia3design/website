import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Materials from "./sections/Materials";
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import WhyChooseUs from "./sections/WhyChooseUs";
import { useI18n } from "./i18n/i18n";

export type NavItem = { id: string; label: string };

export default function App() {
  const { c } = useI18n();
  const navItems: NavItem[] = c.nav.items;

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Background />
      <Navbar items={navItems} />

      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Materials />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer items={navItems} />
    </div>
  );
}

