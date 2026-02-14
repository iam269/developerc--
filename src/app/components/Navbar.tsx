import React from 'react';
import { motion } from 'motion/react';
import { Cpu, History, Brain, Factory, Rocket, BookOpen, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Istorie', href: '#history', icon: History },
    { name: 'Concepte', href: '#concepts', icon: Cpu },
    { name: 'Algoritmi', href: '#algorithms', icon: Brain },
    { name: 'Industrie', href: '#industry', icon: Factory },
    { name: 'Resurse', href: '#resources', icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-2xl font-bold tracking-tighter"
        >
          <span className="text-cyan-400">C++</span>
          <span className="text-white">Mastery</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-cyan-500/20"
          >
            Învață acum
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#030303] border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-cyan-400 flex items-center gap-3 py-2"
            >
              <link.icon size={18} />
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
