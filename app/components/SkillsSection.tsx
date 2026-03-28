"use client";

import { motion } from "framer-motion";
import { Brain, Database, Code, Wrench } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      id: 1,
      icon: Brain,
      title: "AI & Machine Learning",
      gradient: "from-cyan-400 to-blue-500",
      skills: [
        "PyTorch",
        "Deep Learning",
        "Computer Vision",
        "NLP",
        "CNNs",
        "Transformers",
        "XGBoost",
        "Scikit-Learn",
      ],
    },
    {
      id: 2,
      icon: Database,
      title: "Data Science & Analytics",
      gradient: "from-blue-500 to-purple-600",
      skills: [
        "pandas",
        "NumPy",
        "Matplotlib",
        "SciPy",
        "SQL",
        "MongoDB",
        "Tableau",
        "Data Pipelines",
      ],
    },
    {
      id: 3,
      icon: Code,
      title: "Backend & Full-Stack",
      gradient: "from-purple-600 to-pink-500",
      skills: [
        "Spring Boot",
        "FastAPI",
        "Flask",
        "Node.js/Express",
        "React Native",
        "Next.js",
        "REST APIs",
        "Unity",
      ],
    },
    {
      id: 4,
      icon: Wrench,
      title: "Languages & Tools",
      gradient: "from-pink-500 to-red-500",
      skills: [
        "Python",
        "Java",
        "JavaScript/TypeScript",
        "C#",
        "AWS (EC2, S3)",
        "Docker",
        "Git/GitHub",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            5+ years of programming experience with expertise in AI/ML, backend development, and data science
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl blur`}
                ></div>

                {/* Card content */}
                <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-sm text-zinc-300 group/item"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient} group-hover/item:w-2 group-hover/item:h-2 transition-all duration-200`}></div>
                        <span className="group-hover/item:text-zinc-100 transition-colors duration-200">{skill}</span>
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