// Throttle function para optimizar eventos
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Mapeo de iconos (para usar con strings)
export const iconMap = {
  Rocket: 'Rocket',
  Zap: 'Zap',
  Code2: 'Code2',
  Palette: 'Palette',
  Gauge: 'Gauge',
  Terminal: 'Terminal',
  Smartphone: 'Smartphone',
  Globe: 'Globe',
  Github: 'Github',
  Star: 'Star',
  Sparkles: 'Sparkles'
};