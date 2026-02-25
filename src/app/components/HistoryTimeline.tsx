import React from 'react';
import { motion } from 'motion/react';

const events = [
  {
    year: '1979',
    title: 'The Beginning',
    description: 'Bjarne Stroustrup starts working on "C with Classes" at AT&T Bell Labs.',
    type: 'origin'
  },
  {
    year: '1983',
    title: 'C++',
    description: 'The name is officially changed to C++. Virtual functions, overloading, and references are added.',
    type: 'major'
  },
  {
    year: '1998',
    title: 'C++98',
    description: 'The first official international standard (ISO). STL (Standard Template Library) is introduced.',
    type: 'standard'
  },
  {
    year: '2011',
    title: 'Modern C++ (C++11)',
    description: 'A revolution: auto, lambda expressions, move semantics and smart pointers.',
    type: 'standard'
  },
  {
    year: '2020',
    title: 'C++20',
    description: 'Concepts, Modules, Coroutines and Ranges. A new era of efficiency.',
    type: 'standard'
  },
  {
    year: '2023+',
    title: 'The Future (C++23)',
    description: 'Continuous evolution with a focus on simplicity and safety.',
    type: 'future'
  }
];

export const HistoryTimeline = () => {
  return (
    <section id="history" className="py-24 bg-[#030303] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            The Evolution of Performance
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            From an experiment in Bell Labs to the language that powers modern technology.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />

          <div className="space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:w-full`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[45%] p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group`}>
                  <span className="text-cyan-400 font-bold text-lg mb-2 block">{event.year}</span>
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <p className="text-white/60 leading-relaxed">{event.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#030303] shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
