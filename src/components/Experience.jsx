// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaLaptopCode,
//   FaDatabase,
// } from "react-icons/fa";

// const experiences = [
//   {
//     icon: <FaReact />,
//     role: "Frontend Developer",
//     company: "Creative Web Studio",
//     year: "2024 - Present",
//     color: "from-cyan-500 to-blue-500",
//     points: [
//       "Built responsive React applications with modern UI/UX.",
//       "Created reusable component architecture using Tailwind CSS.",
//       "Implemented smooth animations using Framer Motion and GSAP.",
//       "Optimized performance for mobile and desktop devices.",
//     ],
//   },

//   {
//     icon: <FaNodeJs />,
//     role: "Full Stack Developer",
//     company: "Tech Agency",
//     year: "2023 - 2024",
//     color: "from-green-500 to-emerald-500",
//     points: [
//       "Developed REST APIs using Node.js and Express.",
//       "Integrated MongoDB databases and authentication systems.",
//       "Worked on scalable dashboard and admin panel systems.",
//       "Improved loading speed and SEO optimization.",
//     ],
//   },

//   {
//     icon: <FaDatabase />,
//     role: "Backend Developer",
//     company: "Startup Project",
//     year: "2022 - 2023",
//     color: "from-purple-500 to-pink-500",
//     points: [
//       "Designed secure backend architecture.",
//       "Managed cloud database deployment.",
//       "Implemented authentication and authorization.",
//       "Built scalable API structures for applications.",
//     ],
//   },
// ];

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative py-28 px-6 overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 blur-[120px]" />

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-24"
//         >
//           <p className="uppercase tracking-[6px] text-cyan-400 mb-4">
//             My Journey
//           </p>

//           <h2 className="text-5xl md:text-6xl font-bold gradient-text">
//             Experience
//           </h2>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Center Line */}
//           <div className="absolute left-1/2 top-0 hidden md:block w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600 transform -translate-x-1/2 rounded-full" />

//           <div className="space-y-20">

//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   x: index % 2 === 0 ? -100 : 100,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`relative flex flex-col md:flex-row items-center ${
//                   index % 2 === 0
//                     ? "md:justify-start"
//                     : "md:justify-end"
//                 }`}
//               >

//                 {/* Timeline Dot */}
//                 <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
//                   <div
//                     className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl shadow-2xl`}
//                   >
//                     {exp.icon}
//                   </div>
//                 </div>

//                 {/* Card */}
//                 <motion.div
//                   whileHover={{
//                     scale: 1.03,
//                     rotateY: 3,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 200,
//                   }}
//                   className={`w-full md:w-[45%] glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 duration-300`}
//                 >

//                   {/* Mobile Icon */}
//                   <div
//                     className={`md:hidden w-14 h-14 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl mb-6`}
//                   >
//                     {exp.icon}
//                   </div>

//                   <div className="flex items-center justify-between flex-wrap gap-4">
//                     <div>
//                       <h3 className="text-3xl font-bold">
//                         {exp.role}
//                       </h3>

//                       <p className="text-cyan-400 mt-2">
//                         {exp.company}
//                       </p>
//                     </div>

//                     <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
//                       {exp.year}
//                     </div>
//                   </div>

//                   {/* Divider */}
//                   <div className="w-full h-[1px] bg-white/10 my-6" />

//                   {/* Points */}
//                   <ul className="space-y-4">
//                     {exp.points.map((point, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-gray-300 leading-[1.8]"
//                       >
//                         <span className="text-cyan-400 mt-2">
//                           ●
//                         </span>

//                         {point}
//                       </li>
//                     ))}
//                   </ul>

//                 </motion.div>

//               </motion.div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }