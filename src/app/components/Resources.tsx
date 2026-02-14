import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Book, Globe, Users } from 'lucide-react';

const resources = [
  {
    title: 'Documentație Oficială',
    desc: 'cppreference.com este sursa supremă pentru standardul C++.',
    icon: Globe,
    link: 'https://cppreference.com'
  },
  {
    title: 'Cărți Recomandate',
    desc: '"The C++ Programming Language" de Bjarne Stroustrup și seria "Effective C++".',
    icon: Book,
    link: '#'
  },
  {
    title: 'Platforme de Exerciții',
    desc: 'LeetCode, HackerRank și Exercism pentru a-ți exersa logica.',
    icon: ExternalLink,
    link: '#'
  },
  {
    title: 'Comunități Online',
    desc: 'Subreddit-ul r/cpp și comunitatea Stack Overflow.',
    icon: Users,
    link: '#'
  }
];

export const LearningResources = () => {
  return (
    <section id="resources" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white mb-16">Resurse de Învățare</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <motion.a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                <res.icon size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{res.title}</h3>
              <p className="text-white/40 mb-8 flex-grow leading-relaxed">{res.desc}</p>
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                Explorează <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#030303] border-t border-white/5 text-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="text-cyan-400">C++</span> Mastery
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Acasă</a>
            <a href="#history" className="hover:text-white transition-colors">Istorie</a>
            <a href="#concepts" className="hover:text-white transition-colors">Concepte</a>
            <a href="#resources" className="hover:text-white transition-colors">Resurse</a>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Globe size={16} />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <Users size={16} />
            </div>
          </div>
        </div>
        <div className="text-center text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} C++ Mastery. Puterea performanței extreme.
        </div>
      </div>
    </footer>
  );
};
