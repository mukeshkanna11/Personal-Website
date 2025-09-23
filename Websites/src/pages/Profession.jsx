import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BgProfession from "../assets/images/img4.jpg"; // Replace with your background image
import {
  FaLaptopCode,
  FaDatabase,
  FaDraftingCompass,
  FaUsers,
  FaProjectDiagram,
  FaLeaf,
  FaLink,
} from "react-icons/fa";

export default function Profession() {
  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  const skills = [
    {
      title: "Frontend",
      desc: "React.js, Tailwind CSS, Responsive Design",
      icon: <FaLaptopCode className="text-brandIndigo w-8 h-8" />,
    },
    {
      title: "Backend",
      desc: "Node.js, Express.js, REST APIs",
      icon: <FaLaptopCode className="text-brandIndigo w-8 h-8" />,
    },
    {
      title: "Database",
      desc: "MongoDB, MySQL",
      icon: <FaDatabase className="text-brandIndigo w-8 h-8" />,
    },
    {
      title: "Design",
      desc: "UI/UX, Figma, Wireframing",
      icon: <FaDraftingCompass className="text-brandIndigo w-8 h-8" />,
    },
    {
      title: "State Management",
      desc: "Redux, Context API",
      icon: <FaProjectDiagram className="text-brandIndigo w-8 h-8" />,
    },
    {
      title: "Collaboration",
      desc: "Git, GitHub, Teamwork",
      icon: <FaUsers className="text-brandIndigo w-8 h-8" />,
    },
  ];

  const agricultureCore = [
    {
      title: "Soil Science",
      desc: "Studied soil properties and sustainable farming practices",
      icon: <FaLeaf className="text-green-400 w-8 h-8" />,
    },
    {
      title: "Crop Management",
      desc: "Learned effective crop rotation and pest management techniques",
      icon: <FaLeaf className="text-green-400 w-8 h-8" />,
    },
    {
      title: "Farm Technology",
      desc: "Hands-on experience with modern agricultural machinery and tools",
      icon: <FaLeaf className="text-green-400 w-8 h-8" />,
    },
  ];

  const projects = [
    {
      title: "Movie Searching App",
      link: "https://react-movie-searching-app1.netlify.app/",
      desc: "A responsive movie search app with filters and favorites.",
      icon: <FaLink className="text-yellow-400 w-6 h-6" />,
    },
    {
      title: "Clockify Timer App",
      link: "https://effervescent-malabi-99afd1.netlify.app/",
      desc: "A productivity timer app built with React and MERN stack.",
      icon: <FaLink className="text-yellow-400 w-6 h-6" />,
    },
    {
      title: "Expense Tracker",
      link: "https://luxury-klepon-b1ce62.netlify.app/p",
      desc: "Track income and expenses with CRUD and local storage.",
      icon: <FaLink className="text-yellow-400 w-6 h-6" />,
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Floating Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BgProfession})` }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-center mt-12">
        <motion.h1
          className="text-5xl md:text-4xl font-bold font-greatvibes text-brandIndigo drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Profession & Skills
        </motion.h1>
        <motion.p
          className="text-gray-200 md:text-base max-w-3xl drop-shadow-md mb-10 font-poppins"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am a Full Stack MERN Developer, passionate about building modern web
          applications that are responsive, intuitive, and visually appealing.
          My studies and professional journey have equipped me with technical
          expertise, creativity, and problem-solving abilities that drive every
          project forward.
        </motion.p>

      {/* Contact Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
  className="mt-6"
>
  <Link
    to="/contact"
    className="px-6 py-3 border font-greatvibes border-brandIndigo text-white rounded-full hover:bg-brandIndigo hover:text-white transition"
  >
    Contact Me
  </Link>
</motion.div>


      </section>

      {/* Studies Section */}
      <section className="relative z-10 py-16 px-6 md:px-16 bg-black/50">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-playfair text-brandIndigo mb-4"
            variants={sectionVariants}
          >
            My Education
          </motion.h2>
          <motion.p
            className="text-gray-200 md:text-base drop-shadow-md font-poppins"
            variants={sectionVariants}
          >
            I graduated in Agriculture Engineering in 2022 with a CGPA of 7.99.
            During my studies, I focused on combining technical knowledge with
            practical problem-solving, which inspired me to pursue a career in
            software development and UI/UX design.
          </motion.p>
        </motion.div>
      </section>

      {/* Work Experience Section */}
      <section className="relative z-10 py-16 px-6 md:px-16">
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-cinzel text-brandIndigo mb-6">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-black/70 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              variants={floatVariants}
              animate="float"
            >
              <h3 className="text-2xl font-greatvibes text-yellow-400 mb-2">
                Delta Itech Solutions, Bangalore
              </h3>
              <p className="text-gray-200 font-poppins text-sm">
                <strong>2.5 Years Experience</strong> <br />
                First Year as <span className="text-brandYellow">Software Associate</span> (Work from Home) <br />
                Next 1.5 Years as <span className="text-brandYellow">Software Developer</span> (Work from Home)
              </p>
            </motion.div>

            <motion.div
              className="bg-black/70 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              variants={floatVariants}
              animate="float"
            >
              <h3 className="text-2xl font-greatvibes text-yellow-400 mb-2">
                ReadyTech Solutions, Coimbatore
              </h3>
              <p className="text-gray-200 font-poppins text-sm">
                Currently working as a <span className="text-brandYellow">MERN SDE</span>, building and
                maintaining scalable web applications with modern technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Agriculture Section */}
      <section className="relative z-10 py-16 px-6 md:px-16">
        <motion.div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {agricultureCore.map((item, i) => (
            <motion.div
              key={i}
              className="bg-black/70 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform cursor-default"
              variants={floatVariants}
              animate="float"
            >
              {item.icon}
              <h3 className="text-2xl font-greatvibes text-green-400">
                {item.title}
              </h3>
              <p className="text-gray-200 text-center font-poppins">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Profession Cards */}
      <section className="relative z-10 py-16 px-6 md:px-16">
        <motion.div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-black/70 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform cursor-default"
              variants={floatVariants}
              animate="float"
            >
              {skill.icon}
              <h3 className="text-2xl font-greatvibes text-brandIndigo">
                {skill.title}
              </h3>
              <p className="text-gray-200 text-center font-poppins">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-16 px-6 md:px-16 bg-black/60">
        <motion.div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/70 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform cursor-pointer"
              variants={floatVariants}
              animate="float"
            >
              {project.icon}
              <h3 className="text-2xl font-greatvibes text-yellow-400">
                {project.title}
              </h3>
              <p className="text-gray-200 text-center font-poppins">
                {project.desc}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Life Philosophy Section */}
      <section className="relative z-10 py-16 px-6 md:px-16 bg-black/50" id="contact">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-cinzel text-brandIndigo mb-4">
            Life Philosophy
          </h2>
          <p className="text-gray-200 md:text-base drop-shadow-md font-poppins">
            Life is about continuous learning, creativity, and meaningful
            connections. I believe in growing with every experience, embracing
            challenges, and sharing knowledge with others. Combining passion
            with dedication makes every moment count.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
