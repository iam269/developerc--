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
        {/* Developer Section */}
        <div className="mb-12 pb-12 border-b border-white/5">
          <h3 className="text-lg font-bold text-white mb-6">About the Developer</h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex items-center gap-4">
              <img 
                src="/iam269.png" 
                alt="Ioniță Aurel Mihai" 
                className="w-16 h-16 rounded-2xl object-cover border border-cyan-500/20" 
              />
              <div>
                <p className="text-white font-bold text-lg">Ioniță Aurel Mihai</p>
                <p className="text-white/40 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white/60 leading-relaxed max-w-xl">
                Passionate about creating high-performance web applications and exploring the depths of C++ programming. 
                This project showcases the power and elegance of modern C++ development, from game engines to system programming.
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <a href="https://github.com/iam269" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all text-sm font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ionita-aurel-mihai-20648536a/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all text-sm font-medium">
              LinkedIn
            </a>
          </div>
        </div>
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
