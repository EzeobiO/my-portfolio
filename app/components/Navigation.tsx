"use client";

import { motion } from "framer-motion";

export function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Obie Ezeobi
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/EzeobiO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
              title="GitHub"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2 C6.48 2 2 6.58 2 12.25 c0 4.52 2.87 8.36 6.84 9.71 c0.5 0.09 0.68 -0.22 0.68 -0.49 c0 -0.24 -0.01 -0.87 -0.01 -1.71 c-2.78 0.62 -3.37 -1.38 -3.37 -1.38 c-0.45 -1.17 -1.11 -1.48 -1.11 -1.48 c-0.91 -0.64 0.07 -0.63 0.07 -0.63 c1 0.07 1.53 1.06 1.53 1.06 c0.89 1.56 2.34 1.11 2.91 0.85 c0.09 -0.67 0.35 -1.11 0.64 -1.37 c-2.22 -0.26 -4.56 -1.14 -4.56 -5.07 c0 -1.12 0.39 -2.03 1.03 -2.75 c-0.1 -0.26 -0.45 -1.3 0.1 -2.71 c0 0 0.84 -0.27 2.75 1.04 c0.8 -0.23 1.65 -0.35 2.5 -0.36 c0.85 0.01 1.7 0.13 2.5 0.36 c1.91 -1.31 2.75 -1.04 2.75 -1.04 c0.55 1.41 0.2 2.45 0.1 2.71 c0.64 0.72 1.03 1.63 1.03 2.75 c0 3.94 -2.34 4.8 -4.57 5.05 c0.36 0.32 0.68 0.94 0.68 1.9 c0 1.37 -0.01 2.48 -0.01 2.82 c0 0.27 0.18 0.59 0.69 0.49 C19.14 20.61 22 16.77 22 12.25 C22 6.58 17.52 2 12 2 Z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com/in/ezeobio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45 h-3.55 v-5.57 c0 -1.33 -0.03 -3.04 -1.85 -3.04 c-1.85 0 -2.14 1.45 -2.14 2.94 v5.67 H9.35 V9 h3.41 v1.56 h0.05 c0.47 -0.9 1.63 -1.85 3.37 -1.85 c3.6 0 4.27 2.37 4.27 5.46 v6.28 Z M5.34 7.43 c-1.14 0 -2.06 -0.93 -2.06 -2.07 c0 -1.14 0.92 -2.06 2.06 -2.06 c1.14 0 2.06 0.92 2.06 2.06 c0 1.14 -0.92 2.07 -2.06 2.07 Z M7.12 20.45 H3.56 V9 h3.56 v11.45 Z M22.23 0 H1.77 C0.79 0 0 0.77 0 1.73 v20.54 C0 23.23 0.79 24 1.77 24 h20.45 C23.21 24 24 23.23 24 22.27 V1.73 C24 0.77 23.21 0 22.23 0 Z" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:ezeobiebube9@gmail.com"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
              title="Email"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8 l7.89 5.26 a2 2 0 0 0 2.22 0 L21 8 M5 19 h14 a2 2 0 0 0 2 -2 V7 a2 2 0 0 0 -2 -2 H5 a2 2 0 0 0 -2 2 v10 a2 2 0 0 0 2 2 Z"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}