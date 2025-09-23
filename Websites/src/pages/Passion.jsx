import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChess, FaFutbol, FaGamepad, FaHeart, FaUserFriends } from "react-icons/fa";
import BgImage from "../assets/images/img2.jpg"; // Replace with your background image

const friends = [
  { name: "Stalin", funfact: "A true soul with a heart of gold ❤️" },
  { name: "Arun", funfact: "Master of jokes – always makes me laugh 😂" },
  { name: "Kavi", funfact: "Innocent with a broad mind and a kind soul 🌟" },
  { name: "Dhinesh", funfact: "The go-to guy for advice – no hesitation needed 🤝" },
];

const hobbies = [
  { name: "Cricket", icon: <FaFutbol className="text-cyan-400 w-8 h-8" />, description: "I love playing cricket and practicing strategies with friends." },
  { name: "Chess", icon: <FaChess className="text-cyan-400 w-8 h-8" />, description: "Chess sharpens my mind and improves my problem-solving skills." },
  { name: "Carrom", icon: <FaGamepad className="text-cyan-400 w-8 h-8" />, description: "Carrom is my fun and relaxing way to spend quality time." },
];

export default function Passion() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-center mb-2 ">
        <motion.h1
          className="font-greatvibes text-4xl md:text-4xl font-bold text-cyan-400 drop-shadow-lg mb-6 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Passion, Life & Friends
        </motion.h1>
        <motion.p
          className="font-poppins text-gray-200 md:text-base max-w-3xl drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Life is a mix of laughter, love, and experiences that make us who we are. Here are my friends, passions, hobbies, and the people I cherish the most, who inspire me to grow every day.
        </motion.p>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6"
        >
          <Link
            to="/profession"
            className="px-6 py-3 border font-greatvibes border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition "
          >
            Explore
          </Link>
        </motion.div>
      </section>

      {/* Friends Section */}
      <section className="relative z-10 py-16 px-6 font-greatvibes md:px-16">
        <motion.div
          className="max-w-6xl mx-auto font-greatvibes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }
          }}
        >
          {friends.map((friend, idx) => (
            <motion.div
              key={idx}
              className="bg-black/70 p-6 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-greatvibes font-bold text-cyan-400 mb-2">{friend.name}</h3>
              <p className="font-poppins text-gray-200">{friend.funfact}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Hobbies Section */}
      <section className="relative z-10 py-16 px-6 md:px-16 bg-black/50">
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-greatvibes text-3xl md:text-3xl font-bold text-cyan-400 mb-6">My Hobbies & Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {hobbies.map((hobby, idx) => (
              <motion.div
                key={idx}
                className="bg-black/70 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {hobby.icon}
                <h3 className="font-greatvibes text-xl text-cyan-400">{hobby.name}</h3>
                <p className="font-poppins text-gray-200 text-sm md:text-base">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Love Section */}
      <section className="relative z-10 py-16 px-6 md:px-16 bg-black/60">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-greatvibes text-3xl md:text-3xl font-bold text-cyan-400 mb-4"><FaHeart className="inline mr-2" />My Love</h2>
          <p className="font-poppins text-gray-200 md:text-base drop-shadow-md">
            She is my everything ❤️, my inspiration, and my source of happiness. Every day with her makes life brighter and teaches me the true meaning of love, care, and support. Our journey together is full of laughter, understanding, and shared dreams.
          </p>
        </motion.div>
      </section>

      {/* Parents Section */}
      <section className="relative z-10 py-16 px-6 md:px-16 bg-black/50">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-greatvibes text-3xl md:text-3xl font-bold text-cyan-400 mb-4"><FaUserFriends className="inline mr-2" />My Parents</h2>
          <p className="font-poppins text-gray-200 md:text-base drop-shadow-md">
            I owe everything to my parents 🙏. Their love, guidance, and support shape who I am today. They taught me values, perseverance, and kindness. Loving your parents and appreciating them is a lifelong treasure.
          </p>
        </motion.div>
      </section>

      {/* Life Philosophy Section */}
      <section className="relative z-10 py-16 px-6 md:px-16 bg-black/60">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-greatvibes text-3xl md:text-3xl font-bold text-cyan-400 mb-4">Life Philosophy</h2>
          <p className="font-poppins text-gray-200 md:text-base drop-shadow-md">
            Life is about curiosity, creativity, love, laughter, and connections. Every day is a chance to learn, share, and grow. Embrace passions, cherish people, and explore the world with a grateful heart. Happiness comes from the little joys, meaningful experiences, and the people who make life worthwhile.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
