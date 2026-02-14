import React from 'react';
import { motion } from 'motion/react';

const events = [
  {
    year: '1979',
    title: 'Începutul',
    description: 'Bjarne Stroustrup începe lucrul la "C with Classes" la AT&T Bell Labs.',
    type: 'origin'
  },
  {
    year: '1983',
    title: 'C++',
    description: 'Numele este schimbat oficial în C++. Se adaugă funcții virtuale, overloading și referințe.',
    type: 'major'
  },
  {
    year: '1998',
    title: 'C++98',
    description: 'Primul standard internațional oficial (ISO). Apare STL (Standard Template Library).',
    type: 'standard'
  },
  {
    year: '2011',
    title: 'Modern C++ (C++11)',
    description: 'O revoluție: auto, lambda expressions, move semantics și smart pointers.',
    type: 'standard'
  },
  {
    year: '2020',
    title: 'C++20',
    description: 'Concepte, Module, Coroutine și Ranges. O nouă eră a eficienței.',
    type: 'standard'
  },
  {
    year: '2023+',
    title: 'Viitorul (C++23)',
    description: 'Evoluția continuă cu focus pe simplitate și siguranță.',
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
            Evoluția Performanței
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            De la un experiment în laboratoarele Bell până la limbajul care stă la baza tehnologiei moderne.
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
