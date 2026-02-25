import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Book, Globe, Users } from 'lucide-react';

const resources = [
  {
    title: 'Official Documentation',
    desc: 'cppreference.com is the ultimate source for the C++ standard - everything you need about syntax, functions and libraries.',
    icon: Globe,
    link: 'https://en.cppreference.com'
  },
  {
    title: 'Interactive Tutorials',
    desc: 'LearnCpp.com - free tutorials to learn C++ from scratch, with practical examples.',
    icon: Book,
    link: 'https://www.learncpp.com'
  },
  {
    title: 'Practice Platforms',
    desc: 'LeetCode and HackerRank to practice your logic and prepare for technical interviews.',
    icon: ExternalLink,
    link: 'https://leetcode.com'
  },
  {
    title: 'Online Communities',
    desc: 'r/cpp - the official subreddit for C++ developers and language questions.',
    icon: Users,
    link: 'https://reddit.com/r/cpp'
  },
  {
    title: 'C++ Standard',
    desc: 'ISO C++ Foundation - official documentation and news about C++ standards.',
    icon: Globe,
    link: 'https://isocpp.org'
  },
  {
    title: 'Recommended Books',
    desc: '"The C++ Programming Language" by Bjarne Stroustrup - the language author.',
    icon: Book,
    link: 'https://www.stroustrup.com/programming.html'
  },
  {
    title: 'STL Documentation',
    desc: 'Complete documentation for Standard Template Library - containers, algorithms.',
    icon: ExternalLink,
    link: 'https://cplusplus.com/reference/'
  },
  {
    title: 'Best Practices',
    desc: 'Effective Modern C++ - guide for modern C++ programming (C++11/14/17/20).',
    icon: Book,
    link: 'https://www.oreilly.com/library/view/effective-modern-c/9781491978385/'
  }
];

export const LearningResources = () => {
  return (
    <section id="resources" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white mb-16">Learning Resources</h2>
        
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
                Explore <ExternalLink size={14} />
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
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#history" className="hover:text-white transition-colors">History</a>
            <a href="#concepts" className="hover:text-white transition-colors">Concepts</a>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
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
          © {new Date().getFullYear()} C++ Mastery. The Power of Extreme Performance.
        </div>
      </div>
    </footer>
  );
};
