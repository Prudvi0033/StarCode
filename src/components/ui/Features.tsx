'use client'

import { Code, BrainCircuit, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Code size={32} className="text-white md:size-12" />, 
    title: "Code Compilation", 
    description: "Write, run, and debug your code instantly in the editor."
  },
  {
    icon: <BrainCircuit size={12} className="text-white md:size-12" />,
    title: "AI-Powered Insights", 
    description: "Get smart summaries and suggestions using AI."
  },
  {
    icon: <Layers size={32} className="text-white md:size-12" />,
    title: "Snippet Management", 
    description: "Save, organize, and share your code snippets easily."
  }
];

export default function FeatureHighlight() {
  return (
    <div className="relative flex items-center justify-center px-2 md:px-8 overflow-visible">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl w-full relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ 
              y: -8,
              zIndex: 20,
              boxShadow: "0 25px 50px -12px rgba(0, 10, 50, 0.35)",
              transition: { duration: 0.2 }
            }}
            className={`relative w-48 h-60 md:w-60 md:h-70 rounded-3xl border border-blue-700/50 backdrop-blur-sm shadow-lg shadow-blue-900/30
                       ${index === 0 ? 'origin-right z-0 md:-rotate-12 md:left-4': 
                         index === 1 ? 'z-10' : 
                         'origin-left z-0 md:rotate-12 md:right-4'}
                       drop-shadow-md`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/90 rounded-3xl" />
            <div className="absolute inset-0 bg-black/30 rounded-3xl" />
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 md:p-8 gap-4 md:gap-5">
              <motion.div 
                className="p-3 md:p-4 bg-blue-800/80 rounded-full shadow-xl drop-shadow-md"
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0 rgba(59, 130, 246, 0)"]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {feature.icon}
                </motion.div>
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-white text-center">{feature.title}</h3>
              <p className="text-xs md:text-sm text-blue-100 text-center">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}