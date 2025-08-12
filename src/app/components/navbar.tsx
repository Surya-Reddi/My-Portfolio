'use client'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 fixed w-full top-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
        >
          My Portfolio
        </motion.h1>
        <div className="space-x-6">
          <motion.a 
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            href="#about" 
            className="hover:text-yellow-300 transition-colors"
          >
            About
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            href="#skills" 
            className="hover:text-yellow-300 transition-colors"
          >
            Skills
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            href="#projects" 
            className="hover:text-yellow-300 transition-colors"
          >
            Projects
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            href="#experience" 
            className="hover:text-yellow-300 transition-colors"
          >
            Experience
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            href="#achievements" 
            className="hover:text-yellow-300 transition-colors"
          >
            Achievements
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, color: '#fbbf24' }}
            href="#contact" 
            className="hover:text-yellow-300 transition-colors"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}