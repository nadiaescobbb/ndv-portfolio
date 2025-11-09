import React from 'react';
import { Rocket, Zap, Gauge, Palette, ArrowUpRight } from 'lucide-react';
import { SERVICES, EDUCATION } from '../../data/portfolio';
import Card from '../common/Card';

const iconMap = {
  Rocket,
  Zap,
  Gauge,
  Palette
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon];
  const isLarge = service.size === 'large';

  return (
    <Card
      className={`${isLarge ? 'md:col-span-2' : ''} cursor-pointer`}
      gradient={`${service.gradient}/10 to-transparent`}
      hoverColor={service.hoverColor}
      size={isLarge ? 'large' : 'normal'}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`${isLarge ? 'w-16 h-16' : 'w-14 h-14'} bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform`}>
          <Icon className={`${isLarge ? 'w-8 h-8' : 'w-7 h-7'}`} />
        </div>
        {isLarge && (
          <ArrowUpRight className="w-6 h-6 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
      <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold mb-3`}>
        {service.title}
      </h3>
      <p className={`text-gray-400 ${isLarge ? '' : 'text-sm'} leading-relaxed`}>
        {service.description}
      </p>
    </Card>
  );
};

const Services = () => {
  return (
    <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {/* Service Cards */}
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}

      {/* Education Section */}
      <Card 
        className="md:col-span-2" 
        gradient="from-fuchsia-500/10 to-transparent"
        hoverColor="fuchsia-500"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Palette className="w-8 h-8 text-fuchsia-400" />
          Educación
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="p-4 bg-white/5 rounded-xl">
              <div className={`text-${edu.color} font-bold mb-1`}>
                {edu.name}
              </div>
              <div className="text-sm text-gray-400">{edu.description}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Services;