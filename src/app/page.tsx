'use client'
import Navbar from './components/navbar'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="about" 
        className="min-h-screen p-8 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto pt-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-700"
          >
            <p>
        Hey there! I&apos;m <span className="font-bold text-purple-600">Surya Prasad</span>, a final-year student at IIT ISM Dhanbad pursuing Integrated M.Tech in Mathematics and Computing. 
        I&apos;m passionate about turning complex problems into elegant solutions through code and data.
      </p>
      <p>
        My journey in tech has been quite exciting - from developing AI-powered applications during my internship at Axtria to creating machine learning models that predict cricket match outcomes with 85% accuracy. 
        I love working at the intersection of mathematics, computer science, and real-world applications.
      </p>
      <p>
        When I&apos;m not coding, you&apos;ll find me strategizing over a chess board (I&apos;ve won gold at my college fest!), playing badminton, or volunteering with KARTAVYA to teach underprivileged children. 
        I believe in using technology not just to solve problems, but to make a positive impact on society.
      </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="skills" 
        className="min-h-screen p-8 bg-gradient-to-br from-green-50 to-teal-50"
      >
        <div className="max-w-4xl mx-auto pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Programming Languages */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-green-600">Programming Languages</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Python</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-green-600 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">C++</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-blue-600 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">JavaScript</span>
              <span className="text-sm font-medium">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1, delay: 0.9 }}
                className="bg-yellow-600 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-teal-600">Technologies & Frameworks</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Machine Learning</span>
              <span className="text-sm font-medium">88%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-purple-600 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Django</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.7 }}
                className="bg-red-600 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Data Analysis</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 1, delay: 0.9 }}
                className="bg-indigo-600 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="projects" 
        className="min-h-screen p-8 bg-gradient-to-br from-orange-50 to-red-50"
      >
        <div className="max-w-6xl mx-auto pt-20">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">My Projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* IPL Win Predictor */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-6xl">🏏</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">IPL Win Predictor</h3>
          <p className="text-gray-600 mb-4">ML model predicting cricket match outcomes with 85% accuracy using advanced data preprocessing.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Streamlit</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Scikit-learn</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Live Demo</button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">GitHub</button>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Optimizer */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
          <span className="text-white text-6xl">📈</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Portfolio Optimizer</h3>
          <p className="text-gray-600 mb-4">ML-powered investment tool reducing risk by 15% while maintaining returns. Flask web app with 90% prediction accuracy.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Flask</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Finance</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Live Demo</button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">GitHub</button>
          </div>
        </div>
      </motion.div>

      {/* Library Management System */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-6xl">📚</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Library Management System</h3>
          <p className="text-gray-600 mb-4">Full-stack web application for managing library operations with user authentication and book tracking.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Django</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">JavaScript</span>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Live Demo</button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">GitHub</button>
          </div>
        </div>
      </motion.div>

      {/* Document Questioning App */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
          <span className="text-white text-6xl">🤖</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">AI Document Q&A</h3>
          <p className="text-gray-600 mb-4">AI-powered app reducing query response time by 30% using Azure services. Built during Axtria internship.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">AI/ML</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">NLP</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700">Case Study</button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">Details</button>
          </div>
        </div>
      </motion.div>

      {/* Data Analytics Dashboard */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center">
          <span className="text-white text-6xl">📊</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Data Analytics Dashboard</h3>
          <p className="text-gray-600 mb-4">Interactive dashboard for data visualization and insights using modern web technologies and data science.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Pandas</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Plotly</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Live Demo</button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">GitHub</button>
          </div>
        </div>
      </motion.div>

      {/* Web Scraping Tool */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
          <span className="text-white text-6xl">🕷️</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Web Scraping Tool</h3>
          <p className="text-gray-600 mb-4">Automated data extraction tool for gathering and processing web data with smart scheduling and storage.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">BeautifulSoup</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Selenium</span>
          </div>
          <div className="flex gap-2">
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">Demo</button>
            <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">GitHub</button>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      <motion.section 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  id="experience" 
  className="min-h-screen p-8 bg-gradient-to-br from-slate-50 to-gray-100"
>
  <div className="max-w-4xl mx-auto pt-20">
    <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent text-center">Experience</h2>
    
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      
      {/* Experience Card */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-start mb-8"
      >
        {/* Timeline dot */}
        <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
        
        {/* Content */}
        <div className="ml-20 bg-white p-6 rounded-lg shadow-lg w-full">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">AI Engineer</h3>
              <h4 className="text-xl text-blue-600 font-semibold">Axtria</h4>
              <p className="text-gray-500">Bangalore, Karnataka</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              May 2024 - July 2024
            </span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <p className="text-gray-700">Developed a Document Questioning app to reduce query response time by <strong>30%</strong> and enhance information retrieval accuracy using Azure services</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <p className="text-gray-700">Collaborated with a team of 5 to implement innovative features, reducing latency by <strong>20%</strong> and increasing user engagement by <strong>15%</strong></p>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <p className="text-gray-700">Gained expertise in distributed systems and troubleshooting, contributing to seamless project execution and reliability</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">AI/ML</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Azure</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Team Collaboration</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Performance Optimization</span>
          </div>
        </div>
      </motion.div>
      
      {/* Education Timeline */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex items-start"
      >
        {/* Timeline dot */}
        <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
        
        {/* Content */}
        <div className="ml-20 bg-white p-6 rounded-lg shadow-lg w-full">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Integrated M.Tech Student</h3>
              <h4 className="text-xl text-purple-600 font-semibold">IIT (ISM) Dhanbad</h4>
              <p className="text-gray-500">Mathematics and Computing</p>
            </div>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              2020 - 2025 (Expected)
            </span>
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-700">CGPA: <strong>7.67/10.00</strong></p>
            <p className="text-gray-600">Relevant Coursework: Data Structures & Algorithms, Machine Learning, Database Management, Operating Systems, Computer Graphics</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="achievements" 
        className="min-h-screen p-8 bg-gradient-to-br from-yellow-50 to-pink-50"
      >
        <div className="max-w-4xl mx-auto pt-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {/* Flipkart Grid Achievement */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 text-6xl opacity-20">🏆</div>
        <div className="relative z-10">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-3">Flipkart Grid 2023</h3>
          <p className="text-lg mb-4">Pre-finalist Status</p>
          <p className="text-purple-100">Ranked among top performers out of <strong>500,000</strong> participants in India&apos;s biggest tech challenge</p>
        </div>
      </motion.div>

      {/* JEE Achievement */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-green-500 to-teal-600 text-white p-8 rounded-xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 text-6xl opacity-20">📚</div>
        <div className="relative z-10">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold mb-3">JEE Mains 2020</h3>
          <p className="text-lg mb-4">99.67 Percentile</p>
          <p className="text-green-100">Top <strong>0.33%</strong> out of 1.2 million applicants nationwide</p>
        </div>
      </motion.div>

      {/* Sports Achievement */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-8 rounded-xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 text-6xl opacity-20">♟️</div>
        <div className="relative z-10">
          <div className="text-4xl mb-4">👑</div>
          <h3 className="text-2xl font-bold mb-3">Chess Champion</h3>
          <p className="text-lg mb-4">Gold Medal at Parakram</p>
          <p className="text-yellow-100">Winner at IIT ISM&apos;s sports fest + Silver in General Championship</p>
        </div>
      </motion.div>

      {/* Multiple Talents */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8 rounded-xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 text-6xl opacity-20">🌟</div>
        <div className="relative z-10">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold mb-3">Multi-Talented</h3>
          <p className="text-lg mb-4">Various Competitions</p>
          <p className="text-pink-100">Multiple medals in Drawing, Volleyball, Essay Writing, and Badminton</p>
        </div>
      </motion.div>
    </div>

    {/* Beyond Achievements Section */}
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-12 bg-white p-8 rounded-xl shadow-lg"
    >
      <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Beyond Code</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-3xl mb-2">♟️</div>
          <h4 className="font-semibold text-lg">Chess Strategist</h4>
          <p className="text-gray-600">Gold medalist with strategic thinking skills</p>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-2">❤️</div>
          <h4 className="font-semibold text-lg">Social Impact</h4>
          <p className="text-gray-600">KARTAVYA volunteer teaching underprivileged children</p>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-2">🎯</div>
          <h4 className="font-semibold text-lg">Event Organizer</h4>
          <p className="text-gray-600">Coordinator at tech fests and cultural events</p>
        </div>
      </div>
    </motion.div>
  </div>
</motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        id="contact" 
        className="min-h-screen p-8 bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="max-w-4xl mx-auto pt-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Contact Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Let&apos;s Connect!</h3>
          <p className="text-lg text-gray-600 mb-8">
            I&apos;m always excited to discuss new opportunities, innovative projects, or just have a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="space-y-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <span className="text-2xl">📧</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-blue-600">suryaprasad5858@gmail.com</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-blue-600">+91 8374024793</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <span className="text-2xl">💼</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">LinkedIn</h4>
              <p className="text-blue-600">linkedin.com/in/Reddi-Taraka-Rama-Surya-Prasad</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <span className="text-2xl">🐙</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">GitHub</h4>
              <p className="text-blue-600">github.com/Surya-Reddi</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="What&apos;s this about?"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </div>

    {/* Footer */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-center mt-16 pt-8 border-t border-gray-200"
    >
      <p className="text-gray-600">
        © 2024 Surya Prasad. Built with Next.js and lots of ☕
      </p>
    </motion.div>
  </div>
</motion.section>
    </div>
  )
}