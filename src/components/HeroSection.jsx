import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import my from "./my.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-70 md:pr-30 p-4 bg-gradient-to-r from-purple-100 via-white to-green-100 min-h-screen">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left max-w-lg mt-20 md:mt-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Hello, I’m <br /> Amit Kumar
        </motion.h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I’m a{" "}
          <span className="font-semibold text-gray-800">
            Full Stack Developer
          </span>
          based in Noida, India, specializing in
          <span className="font-semibold text-gray-800">
            {" "}
            MERN Stack, Next.js, and Tailwind CSS
          </span>
          . I also have a strong grasp of
          <span className="font-semibold text-gray-800">
            {" "}
            Data Structures & Algorithms
          </span>
          in C++ and Java, and I love helping others learn to code efficiently.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg font-medium hover:bg-purple-700 transition duration-300 transform hover:scale-105"
        >
          Say Hello!
        </motion.button>
        <div className="flex flex-wrap justify-center md:justify-start mt-8 gap-6">
          <div className="bg-purple-200 p-4 rounded-lg text-center w-24 shadow-md">
            <p className="text-2xl font-bold">3+</p>
            <p className="text-sm text-gray-700">Years Experience</p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg text-center w-28 shadow-md">
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm text-gray-700">Projects Completed</p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg text-center w-24 shadow-md">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-700">Client Satisfaction</p>
          </div>
        </div>
      </motion.div>

      {/* Right Section with Image and Social Media */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 md:mt-0 flex flex-col items-center"
      >
        <img
          src={my}
          alt="Amit Kumar"
          className="w-80 md:w-full rounded-lg  "
        />

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center   gap-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="flex items-center  text-blue-600 transition duration-300"
          >
            <FaFacebook className="text-2xl mr-2" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="flex items-center  text-blue-400 transition duration-300"
          >
            <FaTwitter className="text-2xl mr-2" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            className="flex items-center  text-red-500 transition duration-300"
          >
            <FaGoogle className="text-2xl mr-2" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="flex items-center text-red-600 transition duration-300"
          >
            <FaYoutube className="text-2xl mr-2" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="flex items-center  text-blue-700 transition duration-300"
          >
            <FaLinkedin className="text-2xl mr-2" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
