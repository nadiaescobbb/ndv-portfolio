import React from 'react';
import { Code2, Terminal, Palette, Zap, Smartphone, Globe, Github } from 'lucide-react';
import { SKILLS } from '../../data/portfolio';
import Card from '../common/Card';
import { Sparkles } from 'lucide-react';

const iconMap = {
  Code2,
  Terminal,
  Palette,
  Zap,
  Smartphone,
  Globe,
  Github
};

const SkillCard = ({ skill }) => {
  const Icon = iconMap[skill.icon];

  return (
    <Card hoverColor={skill.hoverColor}>
      <Icon className={`w-10 h-10 text-${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
      <div className="font-bold mb-1">{skill.name}</div>
      <div className="text-sm text-gray-400">{skill.level}</div>
    </Card>
  );
};

const Skills = () => {
  return (
    <>
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}

        {/* Creativity Statement */}
        <Card 
          className="md:col-span-3" 
          gradient="from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-violet-400" />
            <div className="font-bold text-lg">Pasión por la creatividad y el detalle</div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fuerte énfasis en diseño responsivo, accesibilidad web y habilidades socioemocionales. 
            Cada proyecto es elaborado con atención al detalle para asegurar que realmente destaque.
          </p>
        </Card>
      </div>
    </>
  );
};

export default Skills;