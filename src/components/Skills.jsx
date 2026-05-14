import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* VERY SUBTLE BACKGROUND */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/5 blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/5 blur-[140px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-3">
            Tech Stack
          </p>
          <br />

          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Tools
          </h2>

          <br /><br />

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
              className="w-full max-w-[190px]"
            >

              {/* CARD */}
              <div className="glass rounded-2xl p-7 text-center border border-white/10 hover:border-white/20 transition duration-300">

                {/* IMAGE FIXED CENTER */}
                <div className="flex justify-center items-center mb-5">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}