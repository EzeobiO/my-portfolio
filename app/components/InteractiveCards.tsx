"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Briefcase } from "lucide-react";
import { useState } from "react";

export function InteractiveCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Education",
      gradient: "from-cyan-400 to-blue-500",
      items: [
        { degree: "B.S. Computer Science", school: "Your University", year: "2024", focus: "Artificial Intelligence" },
        // Add more education items here
      ],
    },
    {
      id: 2,
      icon: Target,
      title: "Focus Areas",
      gradient: "from-blue-500 to-purple-600",
      items: [
        { area: "Computer Vision", description: "CNNs, object detection, image segmentation" },
        { area: "Natural Language Processing", description: "Text analysis, sentiment detection" },
        { area: "Machine Learning Pipelines", description: "Data engineering and model deployment" },
        { area: "Software Testing", description: "Quality assurance and test automation" },
      ],
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Experience",
      gradient: "from-purple-600 to-pink-500",
      items: [
        { role: "Research Assistant", company: "University Lab", period: "2023 - 2024", description: "AI research projects" },
        { role: "Software Tester", company: "Tech Company", period: "2022 - 2023", description: "Quality assurance" },
        // Add more experience items here
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Gradient border effect */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur`}
                ></div>

                {/* Card content */}
                <div className="relative bg-zinc-900 rounded-2xl p-8 h-full border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${card.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-100">{card.title}</h3>
                  </div>

                  {/* Card content */}
                  <div className="space-y-4">
                    {card.id === 1 && card.items.map((item: any, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === card.id ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                        className="pb-4 border-b border-zinc-800 last:border-0"
                      >
                        <div className="font-medium text-zinc-100">{item.degree}</div>
                        <div className="text-sm text-zinc-400">{item.school}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-zinc-500">{item.focus}</span>
                          <span className="text-xs text-cyan-400">{item.year}</span>
                        </div>
                      </motion.div>
                    ))}

                    {card.id === 2 && card.items.map((item: any, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === card.id ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                        className="pb-4 border-b border-zinc-800 last:border-0"
                      >
                        <div className="font-medium text-zinc-100">{item.area}</div>
                        <div className="text-sm text-zinc-400 mt-1">{item.description}</div>
                      </motion.div>
                    ))}

                    {card.id === 3 && card.items.map((item: any, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === card.id ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                        className="pb-4 border-b border-zinc-800 last:border-0"
                      >
                        <div className="font-medium text-zinc-100">{item.role}</div>
                        <div className="text-sm text-zinc-400">{item.company}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-zinc-500">{item.description}</span>
                          <span className="text-xs text-purple-400">{item.period}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}