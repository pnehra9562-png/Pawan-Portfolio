import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      setScrolled(scrollPos > 50);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos + 200 >= top && scrollPos < top + height) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 shadow-lg py-3"
          : "glass py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/PKLOGO.jpg"
            alt="PK Logo"
            className="w-10 h-10 rounded-full object-cover border border-white/20"
          />

          <h1 className="text-xl md:text-2xl font-bold gradient-text">
            Pawan
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">

          {links.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative flex items-center gap-2 transition duration-300 px-2 py-1 rounded-lg
                  ${
                    active === item.id
                      ? "text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                      : "hover:text-cyan-400"
                  }
                `}
              >
                {item.icon}
                {item.label}

                {/* glow underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300
                    ${
                      active === item.id
                        ? "bg-cyan-400 shadow-[0_0_10px_cyan]"
                        : "bg-transparent"
                    }
                  `}
                />
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col items-center py-6 gap-6">

              {links.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 text-lg transition
                    ${
                      active === item.id
                        ? "text-cyan-400"
                        : "text-white"
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}