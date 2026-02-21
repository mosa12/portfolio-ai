// src/App.tsx
import ChatWidget from './components/Chat/Chat.tsx';  // Adjust if path is different

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Md Mosaraf Hossain
        </h1>
        <p className="text-2xl md:text-3xl mb-6">
          Final-Year CSE Student | Developer | Ethical Hacker
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">
          Hyderabad | +91 7488795577 | rtmosaraf@gmail.com | linkedin.com/in/mosaraf1 | github.com/mosa12
        </p>
        <a href="#chat" className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Chat with AI Me
        </a>
      </header>

      {/* Summary */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Summary</h2>
        <p className="text-xl text-gray-700 max-w-4xl">
          Final-year CSE student with strong skills in Kotlin, Firebase, web design, UI/UX, Ethical Hacking. Developed multiple self-initiated projects to solve real-world problems, demonstrating initiative, creativity, and practical application of technical knowledge. Looking for opportunities in software development or web/mobile application roles and in cybersecurity.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Online Scams Awareness Platform</h3>
              <p className="text-gray-700 mb-4">Self-initiated informational website to raise awareness about scams, phishing, and fraud. Built with Wix, responsive design, educational content.</p>
              <a href="https://solveit257.wixsite.com/online-scams" className="text-blue-600 hover:underline">View Site</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Reuse-Mee</h3>
              <p className="text-gray-700 mb-4">Web app for campus students to reuse items. Built with Wix/HTML/CSS/JS, user listings, posting, responsive UI.</p>
              <a href="https://solveit257.wixsite.com/reuse-mee" className="text-blue-600 hover:underline">View Site</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Oxford Education Consultancy Website</h3>
              <p className="text-gray-700 mb-4">Freelance site for education startup. Multi-page layout, courses, contact form. Built with Wix, client collaboration.</p>
              <a href="https://solveit257.wixsite.com/oecc" className="text-blue-600 hover:underline">View Site</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Attendance Percentage Calculator</h3>
              <p className="text-gray-700 mb-4">Android app in Kotlin with Firebase integration for attendance tracking. Technologies: Android Studio, XML UI.</p>
              <a href="https://github.com/mosa12/Hitam-Attendance-Calculator-ph1" className="text-blue-600 hover:underline">View GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Management</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Roadmap Planning</li>
              <li>Development Strategy</li>
              <li>Research</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Programming & Development</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Python</li>
              <li>Java</li>
              <li>Kotlin</li>
              <li>XML</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Firebase</li>
              <li>API Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Other Skills</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Kali Linux</li>
              <li>Ethical Hacking</li>
              <li>Git</li>
              <li>Debugging & Testing</li>
              <li>Web Hosting and Deployment</li>
              <li>Android Studio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">B.Tech in Computer Science & Engineering</h3>
              <p className="text-gray-700">Hyderabad Institute of Technology and Management | 2022 – 2026</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Intermediate (12th / Higher Secondary)</h3>
              <p className="text-gray-700">English Oriental Academy, West Bengal | 2020 – 2022 | 56%</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Matriculation (10th / SSC)</h3>
              <p className="text-gray-700">Delhi Public School, West Bengal | 2020 | 73%</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="chat" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">Ask My AI About Me</h2>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <ChatWidget />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Md Mosaraf Hossain. Built with React, Tailwind, FastAPI & OpenRouter.</p>
      </footer>
    </div>
  );
}