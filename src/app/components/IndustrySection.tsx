import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Monitor, Car, Landmark, Bot, Palette } from 'lucide-react';

const industries = [
  {
    icon: Gamepad2,
    title: 'Game Development',
    desc: 'Unreal Engine is written in C++. AAA games rely on the memory control offered by this language.',
    examples: ['Unreal Engine', 'Unity (core)', 'Frostbite']
  },
  {
    icon: Monitor,
    title: 'Operating Systems',
    desc: 'Windows, macOS and large parts of Linux are written in C++ for speed and direct hardware access.',
    examples: ['Windows Kernel', 'macOS', 'Android Runtime']
  },
  {
    icon: Car,
    title: 'Auto & Embedded',
    desc: 'Navigation systems, engine control and software for autonomous vehicles use C++.',
    examples: ['Tesla', 'SpaceX', 'BMW']
  },
  {
    icon: Landmark,
    title: 'Financial Systems',
    desc: 'High-Frequency Trading requires microsecond-level latency, possible only with C++.',
    examples: ['Bloomberg', 'Morgan Stanley', 'HFT Firms']
  },
  {
    icon: Bot,
    title: 'Robotics & AI',
    desc: 'The TensorFlow library and robotics frameworks (ROS) have optimized cores in C++.',
    examples: ['TensorFlow', 'NASA Rover', 'Boston Dynamics']
  },
  {
    icon: Palette,
    title: 'Graphics Rendering',
    desc: 'Adobe Photoshop, Illustrator and Maya use C++ to process billions of pixels in real-time.',
    examples: ['Adobe Creative Cloud', 'Maya', 'Blender']
  }
];

export const IndustrySection = () => {
  return (
    <section id="industry" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-white mb-6">Where C++ Dominates</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            The language is present everywhere where performance is not optional, but mandatory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-cyan-500/10 text-cyan-400">
                <ind.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{ind.title}</h3>
              <p className="text-white/50 mb-6 leading-relaxed">{ind.desc}</p>
              <div className="flex flex-wrap gap-2">
                {ind.examples.map(ex => (
                  <span key={ex} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 text-white/40 rounded border border-white/10">
                    {ex}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-center text-white/20 text-sm mb-12 uppercase tracking-[0.2em]">Companies using C++</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
             <span className="text-2xl font-black text-white">Microsoft</span>
             <span className="text-2xl font-black text-white">Google</span>
             <span className="text-2xl font-black text-white">Adobe</span>
             <span className="text-2xl font-black text-white">Epic Games</span>
          </div>
        </div>
      </div>
    </section>
  );
};
