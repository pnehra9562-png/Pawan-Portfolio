import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeBackground />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10"
          >

            {/* Small Intro */}
            <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
              Welcome To My Portfolio
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight hero-title">
              Hi, I'm{" "}
              <span className="gradient-text">
                Pawan Kumar
              </span>
            </h1>

            {/* Typing Animation */}
            <h2 className="text-2xl md:text-3xl mt-6 text-gray-300 font-medium">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "Creative Coder",
                  "UI/UX Enthusiast",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </h2>

            {/* Description */}
            <p className="mt-8 text-gray-400 text-lg leading-[2] max-w-xl">
              I build modern, responsive and highly animated
              websites using React, Three.js and modern web
              technologies with beautiful UI/UX experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              {/* About Button */}
              <a href="#about">
                <button className="btn-primary">
                  About Me
                </button>
              </a>

              {/* Download CV Button */}
              <a
                href="/Pawan-Kumar-Resume.pdf"
                download
              >
                <button className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 font-semibold">
                  Download CV
                </button>
              </a>

            </div>

          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center relative"
          >

            {/* Background Glow */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-[100px] rounded-full" />

            {/* Profile Image */}
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              src="/profile.jpeg"
              alt="Pawan Kumar"
              className="
                relative z-10
                w-[240px]
                sm:w-[270px]
                md:w-[320px]
                lg:w-[350px]
                h-[400px]
                rounded-[40px]
                border border-white/10
                object-cover
                image-glow
                shadow-2xl
              "
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}