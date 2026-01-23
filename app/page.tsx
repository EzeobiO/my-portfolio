export default function Home() {
  const projects = [
    {
      title: "Brain Atrophy Analysis",
      description: "Deep learning system using CNNs to analyze and detect brain atrophy patterns in medical imaging data.",
      tags: ["PyTorch", "Computer Vision", "CNNs", "Medical Imaging"],
      link: "#",
    },
    {
      title: "Toxicity Detection System",
      description: "NLP-based classification model to identify and filter toxic content in online communications.",
      tags: ["NLP", "TensorFlow", "Text Classification", "LSTM"],
      link: "#",
    },
    {
      title: "Reddit ML Pipeline",
      description: "End-to-end machine learning pipeline for analyzing Reddit data, including data collection, processing, and sentiment analysis.",
      tags: ["Python", "Data Engineering", "Scikit-learn", "APIs"],
      link: "#",
    },
    {
      title: "CNN Image Segmentation",
      description: "Convolutional neural network for precise image segmentation tasks with real-time processing capabilities.",
      tags: ["PyTorch", "Computer Vision", "Segmentation", "CNNs"],
      link: "#",
    },
    {
      title: "Excel Internship Tracker",
      description: "Automated tracking system for internship applications built with data validation and analytics features.",
      tags: ["Python", "Pandas", "Automation", "Data Analysis"],
      link: "#",
    },
  ];

  // Certificates data - READY TO USE WHEN YOU GET THEM
  // Just uncomment the section below when ready
  /*
  const certificates = [
    {
      title: "Your Certificate Name",
      issuer: "Platform (e.g., Coursera)",
      organization: "Institution Name",
      year: "2024",
      category: "Category",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
    },
    // Add more certificates here
  ];
  */

  return (
    <main className="min-h-screen bg-[#0E0E11] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            I build intelligent systems that see, learn, and reason.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Computer Science (AI) • Machine Learning • Research • Vision Systems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-[#4F7CFF] text-white rounded-lg font-semibold hover:bg-[#3D64E0] transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold hover:border-[#4F7CFF] hover:text-[#4F7CFF] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {['Python', 'PyTorch', 'TensorFlow', 'Computer Vision', 'NLP', 'React'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a Computer Science graduate with a focus on Artificial Intelligence, 
                passionate about building intelligent systems that solve real-world problems.
              </p>
              <p>
                My work spans computer vision, natural language processing, and machine learning 
                pipelines. I've worked on projects ranging from brain atrophy analysis using CNNs 
                to toxicity detection systems and data engineering workflows.
              </p>
              <p>
                I believe in combining technical rigor with creative problem-solving, whether 
                that's through research, software engineering, or exploring the intersection 
                of technology and art.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] transition-all duration-300">
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-400">Computer Science (AI)</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] transition-all duration-300">
                <div className="text-3xl mb-2">🧠</div>
                <h3 className="text-xl font-semibold mb-2">Focus Areas</h3>
                <p className="text-gray-400">Machine Learning • Computer Vision • NLP</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] transition-all duration-300">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-400">Research Assistant • Software Testing • Data Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-20 px-4 bg-[#0A0A0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Skills & Tools</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Technologies and frameworks I use to build intelligent systems
          </p>

          {/* AI/ML */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[#4F7CFF]">AI & Machine Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'CNNs', 'RNNs', 'LSTMs', 'NLP'].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-[#4F7CFF] hover:scale-105 transition-all duration-300"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data & Analytics */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[#7B61FF]">Data & Analytics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau', 'SQL', 'Data Pipelines', 'EDA'].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-[#7B61FF] hover:scale-105 transition-all duration-300"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-[#10B981]">Software Engineering</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Python', 'Java', 'Git', 'Testing', 'CI/CD', 'React', 'Next.js', 'REST APIs'].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-[#10B981] hover:scale-105 transition-all duration-300"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[#F59E0B]">Tools & Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Jupyter', 'VS Code', 'Docker', 'AWS', 'Linux', 'OpenCV', 'EMOTIV', 'UltraFractal'].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-[#F59E0B] hover:scale-105 transition-all duration-300"
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of my work in AI, machine learning, and software engineering
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4F7CFF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center text-[#4F7CFF] hover:text-[#3D64E0] transition-colors font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION - HIDDEN UNTIL YOU'RE READY */}
      {/* 
      Uncomment this entire section when you have certificates to add
      
      <section id="certificates" className="py-20 px-4 bg-[#0A0A0D]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Certificates & Credentials</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Verified expertise from industry-recognized programs, directly applied in my work
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-1">
                  {cert.organization}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {cert.issuer} • {cert.year}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a 
                  href="#"
                  className="text-[#4F7CFF] hover:text-[#3D64E0] text-sm font-medium inline-flex items-center"
                >
                  View Credential
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or engineering roles? 
            I'd love to hear from you.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a 
              href="mailto:your.email@example.com"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4F7CFF] transition-colors">Email</h3>
              <p className="text-gray-400 text-sm">your.email@example.com</p>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4F7CFF] transition-colors">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#4F7CFF] transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">💻</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4F7CFF] transition-colors">GitHub</h3>
              <p className="text-gray-400 text-sm">View my code</p>
            </a>
          </div>

          {/* Resume Button */}
          <a 
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-[#4F7CFF] text-white rounded-lg font-semibold hover:bg-[#3D64E0] transition-all duration-300 hover:scale-105"
          >
            Download Resume
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Your Name. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}