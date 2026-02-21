// src/App.tsx
import { useState } from 'react';
import ChatWidget from './components/Chat/Chat.tsx'; // adjust path

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'} min-h-screen font-mono`}>
      {/* Dark/Light toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-800/80 text-sm hover:bg-gray-700 transition"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Header / Name */}
        <header className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
            Md Mosaraf Hossain
          </h1>
          <p className="text-xl md:text-2xl text-cyan-500 font-medium mb-4">
            Final-Year CSE • Full-Stack Developer • Ethical Hacker
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm md:text-base text-gray-400">
            <span>Hyderabad, India</span>
            <span>+91 7488795577</span>
            <a href="mailto:rtmosaraf@gmail.com" className="hover:text-cyan-400 transition">
              rtmosaraf@gmail.com
            </a>
            <a href="https://linkedin.com/in/mosaraf1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              LinkedIn
            </a>
            <a href="https://github.com/mosa12" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              GitHub
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/30 pb-2 inline-block">
            Summary
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            Final-year CSE student with strong skills in Kotlin, Firebase, web design, UI/UX, Ethical Hacking.  
            Developed multiple self-initiated projects to solve real-world problems, demonstrating initiative, creativity, 
            and practical application of technical knowledge. Looking for opportunities in software development, 
            web/mobile application roles, and cybersecurity.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/30 pb-2 inline-block">
            Projects
          </h2>

          <div className="space-y-10">
            {[
              {
                title: "Online Scams Awareness Platform",
                link: "https://solveit257.wixsite.com/online-scams",
                desc: "Self-initiated informational website to raise awareness about online scams, phishing, and digital fraud. Built with Wix — responsive design, structured educational content, accessibility across devices.",
                tags: ["Wix", "Cybersecurity", "UI/UX"]
              },
              {
                title: "Reuse-Mee",
                link: "https://solveit257.wixsite.com/reuse-mee",
                desc: "Web application helping campus students reuse items. Features user listings, item posting, contact workflows. Built with Wix / HTML / CSS / JavaScript + backend & database integration.",
                tags: ["Web App", "Wix", "Responsive Design"]
              },
              {
                title: "Oxford Education Consultancy Website",
                link: "https://solveit257.wixsite.com/oecc",
                desc: "Freelance multi-page responsive website for education consultancy startup in Kolkata. Sections: Home, Courses (MBBS/B.Tech/Nursing), About, Contact, Enrollment form. Client collaboration for brand-aligned UI.",
                tags: ["Freelance", "Wix", "Lead Generation"]
              },
              {
                title: "Attendance Percentage Calculator",
                link: null,
                desc: "Android application developed in Kotlin to calculate attendance percentage and required classes to meet threshold. Advanced version includes Firebase integration for persistent records.",
                tags: ["Kotlin", "Android Studio", "Firebase", "XML UI"]
              }
            ].map((project, i) => (
              <div key={i} className="group">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-cyan-400 transition"
                    >
                      View →
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-800/50 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/30 pb-2 inline-block">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Roadmap Planning</li>
                <li>Development Strategy</li>
                <li>Research</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Programming & Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python • Java • Kotlin</li>
                <li>XML • HTML • CSS</li>
                <li>Firebase • API Integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Other Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Kali Linux • Ethical Hacking</li>
                <li>Git • Debugging & Testing</li>
                <li>Web Hosting & Deployment</li>
                <li>Android Studio</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-cyan-500/30 pb-2 inline-block">
            Education
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">B.Tech in Computer Science & Engineering</h3>
              <p className="text-gray-400">Hyderabad Institute of Technology and Management, Hyderabad</p>
              <p className="text-gray-300">2022 – 2026</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400">Intermediate (12th / Higher Secondary)</h3>
              <p className="text-gray-400">English Oriental Academy, West Bengal</p>
              <p className="text-gray-300">2020 – 2022 • 56%</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400">Matriculation (10th / SSC)</h3>
              <p className="text-gray-400">Delhi Public School, West Bengal</p>
              <p className="text-gray-300">2020 • 73%</p>
            </div>
          </div>
        </section>

        {/* AI Chat – positioned at the bottom */}
        <section id="chat" className="mt-20 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center border-b border-cyan-500/30 pb-2 inline-block">
            Ask My AI Version Anything
          </h2>

          <div className="border border-gray-700 rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm shadow-2xl max-w-4xl mx-auto">
            <ChatWidget />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          © 2026 Md Mosaraf Hossain • Built with React, Tailwind & Groq AI
        </footer>
      </div>
    </div>
  );
}