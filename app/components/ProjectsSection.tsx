"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Brain Atrophy Analysis",
      description:
        "Deep learning system using CNNs to analyze and detect brain atrophy patterns in medical imaging data with high accuracy.",
      image: "/api/placeholder/400/300",
      tags: ["PyTorch", "Computer Vision", "CNNs", "Medical Imaging"],
      gradient: "from-cyan-400 to-blue-500",
      github: "https://github.com/yourusername/project1",
      demo: "#",
    },
    {
      id: 2,
      title: "Toxicity Detection System",
      description:
        "NLP-based classification model to identify and filter toxic content in online communications using advanced text analysis.",
      image: "/api/placeholder/400/300",
      tags: ["NLP", "TensorFlow", "Text Classification", "LSTM"],
      gradient: "from-blue-500 to-purple-600",
      github: "https://github.com/yourusername/project2",
      demo: "#",
    },
    {
      id: 3,
      title: "Reddit ML Pipeline",
      description:
        "End-to-end machine learning pipeline for analyzing Reddit data, including data collection, processing, and sentiment analysis.",
      image: "/api/placeholder/400/300",
      tags: ["Python", "Data Engineering", "Scikit-learn", "APIs"],
      gradient: "from-purple-600 to-pink-500",
      github: "https://github.com/yourusername/project3",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-zinc-900/50">
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
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Showcasing impactful solutions across AI, machine learning, and
            software engineering
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              {/* Gradient border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl blur`}
              />

              {/* Card */}
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                {/* Image placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`text-6xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.title.split(" ")[0].substring(0, 2)}
                    </div>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                  {/* Action buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-4 right-4 flex gap-2"
                  >
                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-cyan-400 transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4 text-zinc-300 hover:text-cyan-400 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483..."
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    {/* Demo */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-cyan-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-zinc-300 hover:text-cyan-400 transition-colors duration-200" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 group-hover:border-zinc-600 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}