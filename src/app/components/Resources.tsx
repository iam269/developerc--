import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Book, Globe, Users } from 'lucide-react';

const resources = [
  {
    title: 'Documentație Oficială',
    desc: 'cppreference.com este sursa supremă pentru standardul C++ - tot ce ai nevoie despre sintaxă, funcții și biblioteci.',
    icon: Globe,
    link: 'https://en.cppreference.com'
  },
  {
    title: 'Tutoriale Interactive',
    desc: 'LearnCpp.com - tutoriale gratuite pentru a învăța C++ de la zero, cu exemple practice.',
    icon: Book,
    link: 'https://www.learncpp.com'
  },
  {
    title: 'Platforme de Exerciții',
    desc: 'LeetCode și HackerRank pentru a-ți exersa logica și a pregăti interviuri tehnice.',
    icon: ExternalLink,
    link: 'https://leetcode.com'
  },
  {
    title: 'Comunități Online',
    desc: 'r/cpp - subreddit-ul oficial pentru dezvoltatori C++ și întrebări despre limbaj.',
    icon: Users,
    link: 'https://reddit.com/r/cpp'
  },
  {
    title: 'Standardul C++',
    desc: 'ISO C++ Foundation - documentație oficială și noutăți despre standardele C++.',
    icon: Globe,
    link: 'https://isocpp.org'
  },
  {
    title: 'Cărți Recomandate',
    desc: '"The C++ Programming Language" de Bjarne Stroustrup - autorul limbajului.',
    icon: Book,
    link: 'https://www.stroustrup.com/programming.html'
  },
  {
    title: 'STL Documentation',
    desc: 'Documentație completă pentru Standard Template Library - containere, algoritmi.',
    icon: ExternalLink,
    link: 'https://cplusplus.com/reference/'
  },
  {
    title: 'Best Practices',
    desc: 'Effective Modern C++ - ghid pentru programare modernă în C++ (C++11/14/17/20).',
    icon: Book,
    link: 'https://www.oreilly.com/library/view/effective-modern-c/9781491978385/'
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
