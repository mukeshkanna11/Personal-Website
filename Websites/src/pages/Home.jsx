import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BgImage from "../assets/images/img1.jpg";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration:2, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Parallax & Zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgImage})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-center mt-24">
        <motion.h1
          className="text-5xl md:text-4xl font-greatvibes font-bold text-yellow-400 drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m Mukesh 👋
        </motion.h1>
        <motion.p
          className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-md mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          I love <span className="font-semibold">exploring ideas</span>, 
          <span className="font-semibold">solving challenges</span>, and creating things that make life fun and meaningful. 
          Cricket, music, photography, and experimenting with new hobbies are part of my journey.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Link
            to="/contact"
            className="px-6 py-3 border font-greatvibes font-bold border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Contact
          </Link>
        </motion.div>
      </section>

      {/* Personal Info Sections */}
      <section className="relative z-10 text-white py-20 px-6 md:px-16 space-y-20">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* About Me */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold font-greatvibes text-yellow-400 mb-4">About Me</h2>
            <p className="text-gray-200 text-lg md:text-xl drop-shadow-md">
              I’m passionate about exploring life and embracing creativity. From cricket to designing fun projects, I enjoy learning new skills, taking challenges, and sharing experiences. Life is about curiosity, joy, and growth.
            </p>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold font-greatvibes text-yellow-400 mb-4">Fun Facts About Me</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Cricket enthusiast – always up for a game!",
                "Loves exploring new technologies and ideas.",
                "Enjoys traveling and photography.",
                "Passionate about learning and personal growth.",
                "Fan of music, movies, and experimenting with hobbies.",
                "Curious about how things work and always tinkering.",
                "Coding fun projects just for the joy of creating.",
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  className="bg-black/60 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-default"
                  variants={floatVariants}
                  animate="float"
                >
                  <p className="text-gray-200 text-base md:text-lg">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quotes I Live By */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-4xl font-greatvibes font-bold text-yellow-400 mb-4">Quotes I Live By</h2>
            <div className="space-y-3 text-gray-200 text-lg md:text-xl drop-shadow-md">
              {[
                "Do what you love, love what you do.",
                "Life is an experiment – the more you try, the more you grow.",
                "Passion and curiosity are keys to creativity.",
                "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
                "Small steps every day lead to big transformations.",
              ].map((quote, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3 }}
                >
                  {quote}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Hobbies & Interests */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-4 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold font-greatvibes text-yellow-400 mb-4">Hobbies & Interests</h2>
            <p className="text-gray-200 text-lg md:text-xl drop-shadow-md">
              Cricket, music, photography, exploring nature, solving creative challenges, experimenting with tech, traveling, reading motivational books, and constantly finding ways to grow personally and creatively.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
