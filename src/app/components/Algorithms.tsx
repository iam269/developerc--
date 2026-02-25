import React from 'react';
import { motion } from 'motion/react';
import { Search, SortAsc, GitBranch, Terminal, Layers } from 'lucide-react';

const algoItems = [
  {
    title: 'Efficient Sorting',
    desc: 'QuickSort and MergeSort implemented in STL (std::sort) provide O(n log n) complexity.',
    icon: SortAsc,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Binary Search',
    desc: 'std::lower_bound and std::upper_bound for ultra-fast searches in sorted data.',
    icon: Search,
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Graph Algorithms',
    desc: 'High-performance implementations for BFS, DFS and Dijkstra using adjacency lists.',
    icon: GitBranch,
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Dynamic Programming',
    desc: 'Optimization of complex problems through memoization and bottom-up approaches.',
    icon: Terminal,
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Data Structures',
    desc: 'Vectors, stacks, queues and maps (hash tables) with guaranteed performance.',
    icon: Layers,
    color: 'from-cyan-500/20 to-blue-500/20'
  }
];

export const Algorithms = () => {
  return (
    <section id="algorithms" className="py-24 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white mb-16 text-center">Algorithms & Data Structures</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {algoItems.map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${item.color} border border-white/5 hover:border-white/20 transition-all cursor-default group`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
