import React from 'react';
import { motion } from 'motion/react';
import { CodeBlock } from './CodeBlock';
import { Box, Layers, Zap, Database } from 'lucide-react';

const concepts = [
  {
    title: 'Programare Orientată pe Obiect (OOP)',
    description: 'C++ suportă clase, moștenire, polimorfism și încapsulare, permițând modelarea complexă a sistemelor.',
    icon: Box,
    code: `class Engine {
public:
  void start() {
    std::cout << "Engine started" << std::endl;
  }
};

class Car : public Engine {
  // Moștenire
};`
  },
  {
    title: 'Programare Generică',
    description: 'Template-urile permit scrierea unui cod flexibil care funcționează cu orice tip de date, fără a sacrifica performanța.',
    icon: Layers,
    code: `template <typename T>
T add(T a, T b) {
  return a + b;
}

auto result = add(5, 10); // int
auto res2 = add(5.5, 2.1); // double`
  },
  {
    title: 'Gestionarea Memoriei',
    description: 'Control direct asupra resurselor sistemului. Cu RAII și Smart Pointers, C++ este sigur și extrem de rapid.',
    icon: Database,
    code: `#include <memory>

auto ptr = std::make_unique<Data>();
// Memoria este eliberată automat
// când ptr iese din scop.`
  },
  {
    title: 'Performanță Low-Level',
    description: 'Abstracții cu cost zero. Plătești doar pentru ce folosești, având acces direct la hardware.',
    icon: Zap,
    code: `int main() {
  int* raw = new int[100];
  // Control total over memory
  delete[] raw;
  return 0;
}`
  }
];

export const Concepts = () => {
  return (
    <section id="concepts" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Concepte Fundamentale</h2>
            <p className="text-white/60">Arhitectura limbajului este construită pe principiul eficienței maxime și al libertății totale pentru dezvoltator.</p>
          </div>
          <div className="text-cyan-400 font-mono text-sm">{"std::cout << \"Unleash Power\";"}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {concepts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <c.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{c.description}</p>
                </div>
              </div>
              <CodeBlock code={c.code} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
