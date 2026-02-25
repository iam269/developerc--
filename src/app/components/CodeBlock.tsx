import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="bg-[#0d1117] rounded-xl border border-white/10 overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-white/30 text-xs">main.cpp</span>
      </div>
      <pre className="p-6 text-white/90 leading-relaxed overflow-x-auto">
        <code>
          {code.split('\n').map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-white/20 select-none w-4 text-right">{i + 1}</span>
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};
