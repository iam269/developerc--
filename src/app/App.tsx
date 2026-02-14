import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistoryTimeline } from './components/HistoryTimeline';
import { Concepts } from './components/Concepts';
import { Algorithms } from './components/Algorithms';
import { IndustrySection } from './components/IndustrySection';
import { ComparisonTable } from './components/ComparisonTable';
import { LearningResources, Footer } from './components/Resources';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#030303] min-h-screen font-['Inter',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
              <div className="text-4xl font-black text-white">
                <span className="text-cyan-400">C++</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/20 font-mono text-xs uppercase tracking-[0.4em]"
            >
              Initializing performance core...
            </motion.p>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <HistoryTimeline />
            <Concepts />
            <Algorithms />
            <IndustrySection />
            <ComparisonTable />
            <LearningResources />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
