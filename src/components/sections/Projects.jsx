import React from 'react';
import { Sparkles, ArrowUpRight, Rocket, Zap, Palette, Terminal } from 'lucide-react';
import { PROJECTS } from '../../data/portfolio';
import Card from '../common/Card';
import Button from '../common/Button';

const iconMap = {
  Rocket,
  Zap,
  Palette,
  Terminal
};

const FeaturedProject = ({ project }) => {
  return (
    <div className="md:col-span-2 md:row-span-2 p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-green-500/50 transition-all group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500" />
      
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-4">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-400 font-medium">Proyecto Destacado</span>
        </div>

        {/* Project Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>

        {/* Content */}
        <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 rounded-full mb-4">
          <span className="text-xs text-orange-400 font-medium">{project.category}</span>
        </div>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono">
              {tech}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">{project.status}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" href={project.demoUrl}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Ver Demo
          </Button>
          <Button variant="secondary" href={project.detailsUrl} icon>
            Más Detalles
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const Icon = iconMap[project.icon];

  return (
    <Card hoverColor={project.hoverColor} className="cursor-pointer">
      <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
        <Icon className="w-7 h-7" />
      </div>
      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-mono">
            {tech}
          </span>
        ))}
      </div>
      <div className={`flex items-center gap-2 text-${project.hoverColor} text-sm font-medium`}>
        Ver proyecto
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </Card>
  );
};

const Projects = () => {
  const featuredProject = PROJECTS.find(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <div id="projects" className="mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Featured Project */}
        {featuredProject && <FeaturedProject project={featuredProject} />}

        {/* Other Projects */}
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;