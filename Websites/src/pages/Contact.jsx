import { motion } from "framer-motion";
import BgContact from "../assets/images/img4.jpg"; // main floating background
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";

export default function Contact() {
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
    },
  };

  const imagesSection = [
    { img: img3, headline: "🌟 Dream Big", quote: "Believe in yourself and you’ll be unstoppable." },
    { img: img13, headline: "🚀 Keep Moving", quote: "Every step you take is a step closer to your dreams." },
    { img: img9, headline: "🔥 Stay Strong", quote: "Turn your challenges into opportunities for growth." },
    { img: img11, headline: "🌈 Embrace Life", quote: "Life is a journey, make every moment count." },
    { img: img5, headline: "💡 Stay Creative", quote: "Ideas are powerful — turn them into action." },
    { img: img6, headline: "🌸 Positive Vibes", quote: "Your mindset shapes your reality." },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden flex flex-col items-center">
      {/* Floating Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgContact})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* ---------------- Headings ---------------- */}
      <motion.div
        className="relative z-10 text-center mt-20 px-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-4xl font-greatvibes font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-lg">
          Life Quotes & Inspiration
        </h1>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          I believe every image tells a story. Here are some moments and thoughts that inspire me daily.
        </p>
      </motion.div>

      {/* ---------------- Motivational Quote ---------------- */}
      <motion.div
        className="relative z-10 mt-12 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl md:text-3xl font-bold text-yellow-400 drop-shadow-lg">
          "Push yourself, because no one else is going to do it for you."
        </h2>
      </motion.div>

      {/* ---------------- Images Section ---------------- */}
<section className="relative z-10 max-w-6xl w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
  {imagesSection.map((item, i) => (
    <motion.div
      key={i}
      className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer aspect-w-3 aspect-h-4"
      variants={floatVariants}
      animate="float"
    >
      {/* Image */}
      <img
        src={item.img}
        alt={item.headline}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-500 rounded-2xl"
      />

      {/* Overlay with headline & quote */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl">
        <h2 className="text-2xl font-greatvibes text-cyan-400 mb-2">{item.headline}</h2>
        <p className="text-white text-lg font-poppins">{item.quote}</p>
      </div>
    </motion.div>
  ))}
</section>


      {/* ---------------- Contact Form ---------------- */}
      <section className="relative z-10 bg-black/70 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-3xl w-full text-white shadow-2xl border border-gray-700 mt-20">
        <motion.h1
          className="text-4xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let’s Connect
        </motion.h1>

        <p className="text-gray-300 text-center mb-8">
          Have a project in mind, an opportunity, or just want to chat?  
          Drop a message below and I’ll get back to you ✨
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 text-black shadow-lg hover:shadow-2xl transition duration-300"
          >
            🚀 Send Message
          </motion.button>
        </form>
      </section>

      {/* ---------------- Social Links ---------------- */}
      <section className="relative z-10 mt-16 mb-20 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-6">🌐 Find Me On</h2>
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/mukeshkanna112/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            className="text-white text-3xl transition duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/mukeshkanna11"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#fff" }}
            className="text-white text-3xl transition duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_the.mukesh_/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#F56040" }}
            className="text-white text-3xl transition duration-300"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="mailto:mukeshkanna1066@example.com"
            whileHover={{ scale: 1.2, color: "#FFD700" }}
            className="text-white text-3xl transition duration-300"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
