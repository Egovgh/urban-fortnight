import React from 'react';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <Portfolio />
        <Skills />
        <About />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/90 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 AskQris.inc. Crafted with cutting-edge technology and endless innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;