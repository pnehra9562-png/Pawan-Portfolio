import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";

const cards = [
  {
    icon: <FaCode size={30} />,
    title: "Frontend Development",
    desc: "Building responsive and modern web applications using React.",
  },
  {
    icon: <FaPalette size={30} />,
    title: "UI/UX Design",
    desc: "Creating clean, smooth and user-friendly interfaces.",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Continuous Learning",
    desc: "Improving skills by building real-world projects.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold gradient-text">
            Building Modern Web Experiences
          </h2>

        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="glass rounded-3xl p-8 md:p-10 border border-white/10">

              <h3 className="text-3xl font-bold mb-5">
                Creative Frontend Developer
              </h3>

              <p className="text-gray-400 leading-[1.9] text-lg">
                I am a passionate frontend developer focused on
                building modern, responsive and interactive web
                applications using React and JavaScript.
              </p>

              <p className="text-gray-400 leading-[1.9] text-lg mt-5">
                I love creating smooth UI experiences, clean layouts
                and animated interfaces that work perfectly on all
                devices.
              </p>

              <p className="text-gray-400 leading-[1.9] text-lg mt-5">
                As a fresher, I am continuously improving my skills
                by building real projects and learning modern frontend
                technologies.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5 mt-8">

                <div className="text-center glass rounded-2xl p-4">
                  <h4 className="text-2xl font-bold text-cyan-400">
                    2+
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Projects
                  </p>
                </div>

                <div className="text-center glass rounded-2xl p-4">
                  <h4 className="text-2xl font-bold text-purple-400">
                    React
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Core Skill
                  </p>
                </div>

                <div className="text-center glass rounded-2xl p-4">
                  <h4 className="text-2xl font-bold text-pink-400">
                    100%
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Responsive
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >

            {cards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="glass rounded-2xl p-6 border border-white/10"
              >

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500">
                    {card.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {card.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-[1.6] mt-1">
                      {card.desc}
                    </p>
                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}