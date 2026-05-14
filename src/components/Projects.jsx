import { motion } from "framer-motion";

const projects = [
  {
    title: "Snake Game",
    description:
      "A modern responsive Snake Game built using React with smooth gameplay and mobile support.",

    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://snake-game-ochre-six-11.vercel.app/",

    tech: ["React", "JavaScript", "CSS", "Vercel"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            My Projects
          </h2>
          <br/>
          
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl"
            >

              {/* Project Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/20">
                    Live Demo
                  </button>
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}