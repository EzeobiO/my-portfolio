"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Conversational Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Available for opportunities</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Obie Ezeobi
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Computer Science graduate specializing in AI, Machine Learning, and intelligent systems
          </p>
        </motion.div>

        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Role & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-zinc-100">Multi-Disciplinary Engineer</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </div>
              <div className="space-y-4 text-zinc-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-zinc-100">AI Engineer:</span> Designing and deploying intelligent systems
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-zinc-100">Machine Learning:</span> Building predictive models and neural networks
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-zinc-100">Software Engineer:</span> Creating scalable applications
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-zinc-100">Research:</span> Exploring cutting-edge AI techniques
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center: Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="lg:col-span-4 flex justify-center"
>
  <div className="relative">
    {/* Pulsing gradient ring - ANIMATED */}
    <motion.div 
      className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl"
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    ></motion.div>
    
    {/* Profile image */}
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
      <img
        src="/images/20240330_171732_03.JPG"
        alt="Obie Ezeobi"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</motion.div>

          {/* Right: Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-zinc-100">Mission & Vision</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                I'm passionate about leveraging cutting-edge AI and machine learning techniques to solve real-world problems. 
                My goal is to bridge the gap between theoretical research and practical implementation.
              </p>
              <p className="text-zinc-400 italic border-l-2 border-cyan-400 pl-4">
                "Building intelligent systems that transform data into meaningful insights."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}