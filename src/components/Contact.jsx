import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const response = await emailjs.send(
        "service_t21k9t9",
        "template_wsx2uk5",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "uGof_7HmXpijbGr7S"
      );

      console.log("SUCCESS!", response.status, response.text);

      alert("Message Sent Successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.log("EMAIL ERROR:", error);

      if (error.text) {
        alert(error.text);
      } else {
        alert("Something went wrong ❌");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 blur-[140px]" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >

          <p className="text-cyan-400 uppercase tracking-[6px]">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Let’s Talk
          </h2>

        </motion.div>

        {/* Form */}
        <form
          onSubmit={sendEmail}
          className="glass rounded-3xl p-10 space-y-6 border border-white/10 backdrop-blur-xl"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder:text-gray-400 focus:border-cyan-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder:text-gray-400 focus:border-cyan-400 transition"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder:text-gray-400 focus:border-cyan-400 transition resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold shadow-lg shadow-cyan-500/30 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
}