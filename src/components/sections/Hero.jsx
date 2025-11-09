import React from 'react';
import { Sparkles, Star, Terminal } from 'lucide-react';
import { HERO } from '../../data/portfolio';
import Card from '../common/Card';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      {/* Main Hero Card */}
      <div className="md:col-span-3 md:row-span-2 p-8 md:p-12 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm rounded-3xl border border-white/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/10 group-hover:to-fuchsia-500/10 transition-all duration-500" />
        
        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm">{HERO.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent leading-tight">
            {HERO.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            {HERO.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" href="#projects">
              Ver mis proyectos
            </Button>
            <Button variant="secondary" href="#services">
              Ver mis servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Experience Badge */}
      <Card hoverColor="violet-500" className="cursor-pointer">
        <Star className="w-8 h-8 text-yellow-400 mb-4 group-hover:rotate-12 transition-transform" />
        <div className="text-4xl font-black text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text mb-2">
          {HERO.experience.years}
        </div>
        <div className="text-sm text-gray-400">{HERO.experience.label}</div>
      </Card>

      {/* Projects Count */}
      <Card hoverColor="cyan-500" className="cursor-pointer">
        <Terminal className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
        <div className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
          {HERO.projects.count}
        </div>
        <div className="text-sm text-gray-400">{HERO.projects.label}</div>
      </Card>
    </div>
  );
};

export default Hero;