import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    handleScrollTo('contact');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Top Navigation */}
      <Navbar onConnectClick={() => handleScrollTo('contact')} />

      {/* Main Content */}
      <main>
        {/* Section B: Hero */}
        <Hero
          onExploreClick={() => handleScrollTo('projects')}
          onContactClick={() => handleScrollTo('contact')}
        />

        {/* Section C: About Me */}
        <About />

        {/* Section D: Technical Skills */}
        <Skills />

        {/* Section E: Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section F: Featured Projects */}
        <Projects />

        {/* Section G: Experience & Education */}
        <Experience />

        {/* Section H: Professional Philosophy */}
        <Philosophy />

        {/* Section I: Contact */}
        <Contact initialService={selectedServiceForContact} />
      </main>

      {/* Section J: Footer */}
      <Footer />
    </div>
  );
}
