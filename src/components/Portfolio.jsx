import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useScrollProgress } from '../hooks/useScrollProgress';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Portfolio = () => {
  const mousePos = useMousePosition();
  const scrollProgress = useScrollProgress();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor glow effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          transition: 'left 0.1s, top 0.1s'
        }}
      />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;