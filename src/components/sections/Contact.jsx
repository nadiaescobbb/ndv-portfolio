import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';
import Card from '../common/Card';
import Button from '../common/Button';

const SocialLink = ({ href, icon: Icon, title, subtitle, gradient, hoverColor }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-violet-500/50 transition-all group flex items-center gap-4"
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className="font-bold">{title}</div>
        <div className="text-sm text-gray-400">{subtitle}</div>
      </div>
      <ArrowUpRight className={`w-5 h-5 text-${hoverColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
    </a>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main Contact Card */}
      <div className="md:col-span-2 p-8 md:p-12 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl border border-white/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-violet-500/10 group-hover:via-fuchsia-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            ¿Listos para comenzar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-xl">
            Estoy lista para asumir nuevos desafíos...
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="primary" 
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </Button>
            <Button variant="secondary" href="#cv">
              Descargar CV
            </Button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-4">
        <SocialLink
          href={PERSONAL_INFO.github}
          icon={Github}
          title="GitHub"
          subtitle="Ver proyectos"
          gradient="from-violet-500 to-fuchsia-500"
          hoverColor="violet-400"
        />
        <SocialLink
          href={PERSONAL_INFO.linkedin}
          icon={Linkedin}
          title="LinkedIn"
          subtitle="Conectar"
          gradient="from-cyan-500 to-blue-500"
          hoverColor="cyan-400"
        />
      </div>
    </div>
  );
};

export default Contact;