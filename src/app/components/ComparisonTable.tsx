import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export const ComparisonTable = () => {
  const pros = [
    'Extreme performance and low latency',
    'Total memory control (manual and smart)',
    'Vast ecosystem of libraries and frameworks',
    'Portability on almost any hardware',
    'Excellent support for critical systems'
  ];

  const cons = [
    'High complexity and dense syntax',
    'Manual memory management (risk of memory leaks)',
    'Very steep learning curve',
    'Long compilation time for large projects',
    'Hard-to-debug errors (segmentation faults)'
  ];

  return (
    <section className="py-24 bg-[#030303]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white mb-16 text-center">Pros vs Cons</h2>
        
        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/5">
          {/* Pros */}
          <div className="bg-[#0a0a0a] p-10">
            <h3 className="text-xl font-bold text-cyan-400 mb-8 flex items-center gap-2">
              <Check className="text-cyan-400" /> Pros
            </h3>
            <ul className="space-y-6">
              {pros.map((pro, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 text-white/70"
                >
                  <span className="text-cyan-400 font-bold">•</span>
                  {pro}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-[#0a0a0a] p-10">
            <h3 className="text-xl font-bold text-red-400 mb-8 flex items-center gap-2">
              <X className="text-red-400" /> Cons
            </h3>
            <ul className="space-y-6">
              {cons.map((con, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 text-white/70"
                >
                  <span className="text-red-400 font-bold">•</span>
                  {con}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
