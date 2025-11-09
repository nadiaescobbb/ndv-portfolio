import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 px-6 text-center text-gray-500">
      <p>© {new Date().getFullYear()} ndv - Front-End Developer Portfolio.</p>
    </footer>
  );
};

export default Footer;