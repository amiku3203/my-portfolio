import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 md:pl-40  p-4 ">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
            A
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-800">
            Codefetch
          </span>
        </motion.div>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Process", "Portfolio", "Blog", "Services"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 font-medium hover:text-purple-500 transition duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            className="hidden md:block bg-purple-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Contact
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 text-3xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md py-6 absolute top-full left-0 w-full flex flex-col items-center space-y-6"
        >
          {["Home", "About", "Process", "Portfolio", "Blog", "Services"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 text-lg font-medium hover:text-purple-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="#contact"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
