import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function Home({ user }) {

  const username =
    user?.name ||
    user?.email?.split("@")[0] ||
    "Guest";

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* WELCOME MESSAGE */}
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold text-green-400">
          Welcome {username} 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Thanks for visiting my portfolio
        </p>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-green-400 text-lg">Hello I'm</h2>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            G V V S C Chantibabu
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            Full Stack Developer
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Full Stack Developer with 2+ years of experience building scalable
            web and mobile applications using React, Next.js, React Native and
            Node.js.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#projects"
              className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-green-500 px-6 py-3 rounded-lg hover:bg-green-500"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-6 text-2xl">
            <FaGithub className="hover:text-green-400 cursor-pointer" />
            <FaLinkedin className="hover:text-green-400 cursor-pointer" />
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-72 rounded-xl shadow-lg border border-gray-700"
          />
        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="bg-slate-900 p-6 rounded-xl">
            <FaReact className="text-4xl mx-auto text-cyan-400" />
            <p className="mt-3">React.js</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <SiNextdotjs className="text-4xl mx-auto" />
            <p className="mt-3">Next.js</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <SiRedux className="text-4xl mx-auto text-purple-400" />
            <p className="mt-3">Redux Toolkit</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <FaNodeJs className="text-4xl mx-auto text-green-400" />
            <p className="mt-3">Node.js</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <SiMongodb className="text-4xl mx-auto text-green-500" />
            <p className="mt-3">MongoDB</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <SiTailwindcss className="text-4xl mx-auto text-sky-400" />
            <p className="mt-3">Tailwind CSS</p>
          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="bg-slate-900 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Experience
          </h2>

          <div className="bg-slate-800 p-8 rounded-xl">

            <h3 className="text-xl font-semibold text-green-400">
              Frontend Developer – Creeno Solutions
            </h3>

            <p className="text-gray-400 mt-2">
              Nov 2023 – Present
            </p>

            <ul className="mt-4 space-y-2 text-gray-300 list-disc ml-6">
              <li>Developed healthcare dashboards using React and Redux Toolkit</li>
              <li>Built mobile apps with React Native and TypeScript</li>
              <li>Integrated REST APIs and secure authentication</li>
              <li>Implemented role-based access for healthcare data</li>
            </ul>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-green-400">
              Healthcare Dashboard (HealthCapita)
            </h3>

            <p className="mt-3 text-gray-400">
              Doctor dashboard for managing patient records, reports,
              and secure authentication workflows.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              React • Redux Toolkit • React Native
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-green-400">
              Science Samagra Mahotsav Portal
            </h3>

            <p className="mt-3 text-gray-400">
              Government platform used by schools across Andhra Pradesh
              for science exhibition registrations and analytics.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Next.js • Node.js • MongoDB
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}