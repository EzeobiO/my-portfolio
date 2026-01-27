"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Briefcase } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// TypeScript interfaces for type safety
interface EducationItem {
  degree: string;
  school: string;
  year: string;
  focus: string;
}

interface FocusAreaItem {
  area: string;
  description: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export function InteractiveCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrollingRef = useRef(false);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const startAutoScroll = () => {
      autoScrollTimerRef.current = setInterval(() => {
        if (isUserScrollingRef.current) return;

        container.scrollTop += 1;

        const halfHeight = container.scrollHeight / 2;
        if (container.scrollTop >= halfHeight) {
          container.scrollTop -= halfHeight;
        }
      }, 32);
    };

    const stopAutoScroll = () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
        autoScrollTimerRef.current = null;
      }
    };

    const handleUserIntent = () => {
      isUserScrollingRef.current = true;
      setShowScrollbar(true);
      stopAutoScroll();

      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }

      userScrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
        setShowScrollbar(false);
        startAutoScroll();
      }, 6000);
    };

    container.addEventListener("wheel", handleUserIntent);
    container.addEventListener("touchstart", handleUserIntent);
    container.addEventListener("pointerdown", handleUserIntent);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
      container.removeEventListener("wheel", handleUserIntent);
      container.removeEventListener("touchstart", handleUserIntent);
      container.removeEventListener("pointerdown", handleUserIntent);
    };
  }, []);

  const coursework = {
    ai: [
      "Artificial Intelligence",
      "Machine Learning",
      "Machine Vision (Computer Vision)",
      "Natural Language Processing",
    ],
    core: [
      "Data Structures",
      "Algorithm Analysis",
      "Operating Systems",
      "Database Systems",
      "Computer Organization & Architecture",
      "Software Engineering",
      "Parallel & Distributed Computing",
      "Programming Languages",
    ],
    swe: [
      "Software Architecture & Design",
      "Software Testing & QA",
      "User Centered Design",
    ],
    math: [
      "Discrete Mathematics",
      "Linear Algebra",
      "Calculus I & II",
      "Probability and Data Analysis",
    ],
  };

  const educationItems: EducationItem[] = [
    {
      degree: "B.Sc. Computer Science",
      school: "Kennesaw State University",
      year: "2025",
      focus: "AI Concentration | Minor: Software Engineering",
    },
  ];

  const focusAreaItems: FocusAreaItem[] = [
    { area: "Machine Learning & AI", description: "Deep learning, CNNs, NLP, and computer vision systems" },
    { area: "Backend Development", description: "Spring Boot, FastAPI, Flask, Node.js with cloud deployment" },
    { area: "Research & Innovation", description: "EEG data analysis, brain imaging, and emerging tech" },
    { area: "Software Engineering", description: "CI/CD, testing, Docker, and scalable system design" },
  ];

  const experienceItems: ExperienceItem[] = [
    {
      role: "Undergraduate Research Assistant",
      company: "Kennesaw State University",
      period: "Dec 2023 - Dec 2025",
      description: "EEG data systems & AI research",
    },
    {
      role: "Backend Software Engineer Intern",
      company: "XR DOJO (Immersive Tech Studio)",
      period: "May 2024 - Aug 2024",
      description: "Mixed-reality portal systems",
    },
    {
      role: "IEEE Computer Society President",
      company: "Kennesaw State University",
      period: "Apr 2024 - Dec 2025",
      description: "Leading 100+ member org",
    },
  ];

  const cards = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Education",
      gradient: "from-cyan-400 to-blue-500",
      items: educationItems,
    },
    {
      id: 2,
      icon: Target,
      title: "Focus Areas",
      gradient: "from-blue-500 to-purple-600",
      items: focusAreaItems,
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Experience",
      gradient: "from-purple-600 to-pink-500",
      items: experienceItems,
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
                />

                {/* Card content */}
                <div className="relative bg-zinc-900 rounded-2xl p-8 h-full border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${card.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-100">{card.title}</h3>
                  </div>

                  {/* Education Card */}
                  {card.id === 1 && (() => {
                    const items = card.items as EducationItem[];
                    const eduItem = items[0];
                    
                    return (
                      <>
                        {/* Degree Info */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredCard === card.id ? 1 : 0.7 }}
                          transition={{ duration: 0.3 }}
                          className="pb-4 border-b border-zinc-800"
                        >
                          <div className="font-medium text-zinc-100">{eduItem.degree}</div>
                          <div className="text-sm text-zinc-400">{eduItem.school}</div>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-zinc-500">{eduItem.focus}</span>
                            <span className="text-xs text-cyan-400">{eduItem.year}</span>
                          </div>
                        </motion.div>

                        {/* Coursework with auto-scroll */}
                        <div className="mt-4">
                          <div className="text-sm font-medium text-zinc-300 mb-3">Relevant Coursework</div>
                          <div
                            ref={scrollRef}
                            className={`h-48 overflow-y-auto pr-2 transition-all duration-300 ${
                              showScrollbar ? "scrollbar-thin" : "scrollbar-hide"
                            }`}
                          >
                            {/* Duplicate content for seamless loop */}
                            {[0, 1].map((copyIndex) => (
                              <div key={copyIndex}>
                                <CourseSection title="AI & Machine Learning" color="cyan" courses={coursework.ai} />
                                <CourseSection title="Core Computer Science" color="blue" courses={coursework.core} />
                                <CourseSection title="Software Engineering" color="purple" courses={coursework.swe} />
                                <CourseSection title="Mathematics" color="pink" courses={coursework.math} />
                                {copyIndex === 0 && <div className="h-1" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}

                  {/* Focus Areas Card */}
                  {card.id === 2 && (() => {
                    const items = card.items as FocusAreaItem[];
                    
                    return items.map((item, idx) => (
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
                    ));
                  })()}

                  {/* Experience Card */}
                  {card.id === 3 && (() => {
                    const items = card.items as ExperienceItem[];
                    
                    return items.map((item, idx) => (
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
                    ));
                  })()}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Course section component
function CourseSection({ title, color, courses }: { title: string; color: string; courses: string[] }) {
  const colorMap = {
    cyan: "text-cyan-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };

  const colorClass = colorMap[color as keyof typeof colorMap];

  return (
    <div className="mb-3 last:mb-0">
      <div className={`text-xs font-semibold mb-1.5 ${colorClass}`}>{title}</div>
      <div className="space-y-1">
        {courses.map((course, i) => (
          <div key={i} className="text-xs text-zinc-400 flex items-start gap-1.5">
            <span className={`${colorClass} mt-0.5`}>•</span>
            <span className="leading-tight">{course}</span>
          </div>
        ))}
      </div>
    </div>
  );
}