"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

// Helper: builds a microlink.io screenshot URL for any live site
function screenshotUrl(pageUrl: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(pageUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null; // null = use gradient placeholder
  liveUrl: string | null;
  githubUrl: string;
  tags: string[];
  gradient: string;
}

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const projects: Project[] = [
    {
      id: 1,
      title: "PPE Compliance Detector",
      description:
        "Real-time construction site safety monitoring powered by a custom-trained YOLOv8 model. Detects hard hats and safety vests, flags violations instantly with colour-coded bounding boxes, and generates downloadable compliance reports.",
      image: screenshotUrl("https://huggingface.co/spaces/Ezeobi-O/ppe-compliance-detector"),
      liveUrl: "https://huggingface.co/spaces/Ezeobi-O/ppe-compliance-detector",
      githubUrl: "https://github.com/EzeobiO/ppe-compliance-detector",
      tags: ["YOLOv8", "Computer Vision", "PyTorch", "Gradio"],
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      id: 2,
      title: "Brain Atrophy Analysis",
      description:
        "Deep learning system using CNNs to analyse and detect brain atrophy patterns in medical imaging data with high accuracy.",
      image: null,
      liveUrl: null,
      githubUrl: "https://github.com/EzeobiO/project2",
      tags: ["PyTorch", "Computer Vision", "CNNs", "Medical Imaging"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 3,
      title: "Reddit ML Pipeline",
      description:
        "End-to-end machine learning pipeline for analysing Reddit data, including data collection, processing, and sentiment analysis.",
      image: null,
      liveUrl: null,
      githubUrl: "https://github.com/EzeobiO/project3",
      tags: ["Python", "Data Engineering", "Scikit-learn", "APIs"],
      gradient: "from-purple-600 to-pink-500",
    },
  ];

  const handleImgError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

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
            Showcasing impactful solutions across AI, machine learning, and software engineering
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
              {/* Gradient border glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-2xl blur`}
              />

              {/* Card */}
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">

                {/* Image area */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                  {project.image && !imgErrors[project.id] ? (
                    // Live screenshot via microlink
                    <motion.img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      onError={() => handleImgError(project.id)}
                      animate={{ scale: hoveredProject === project.id ? 1.07 : 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    // Gradient placeholder for projects without a live URL
                    <motion.div
                      className="w-full h-full flex items-center justify-center"
                      animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`text-6xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        {project.title.split(" ")[0].substring(0, 2)}
                      </div>
                    </motion.div>
                  )}

                  {/* Fade overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />

                  {/* Live badge */}
                  {project.liveUrl && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-xs text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </div>
                  )}

                  {/* Action buttons (appear on hover) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-3 right-3 flex gap-2"
                  >
                    {/* GitHub / HuggingFace */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-cyan-400 transition-colors duration-200"
                      title="View source"
                    >
                      <svg
                        className="w-4 h-4 text-zinc-300 hover:text-cyan-400 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </a>

                    {/* External / Demo link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-700 hover:border-cyan-400 transition-colors duration-200"
                        title="Open live demo"
                      >
                        <ExternalLink className="w-4 h-4 text-zinc-300 hover:text-cyan-400 transition-colors duration-200" />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Card body */}
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