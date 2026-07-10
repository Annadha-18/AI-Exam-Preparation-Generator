import { Link } from "react-router-dom";
import { FaBrain, FaBookOpen, FaFileUpload } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 AI Powered Learning Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6">
            Prepare Smarter with
            <span className="text-blue-600"> AI Exam Generator</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Upload your study notes, generate intelligent questions,
            attempt quizzes, track your performance, and prepare
            efficiently using Artificial Intelligence.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link to="/signup">
              <Button>
                Get Started Free
              </Button>
            </Link>

            <Link to="/login">
              <Button variant="outline">
                Login
              </Button>
            </Link>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                10K+
              </h2>
              <p className="text-gray-500">
                Questions
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-600">
                5K+
              </h2>
              <p className="text-gray-500">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-600">
                98%
              </h2>
              <p className="text-gray-500">
                Accuracy
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="space-y-6">

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-blue-50">
                <FaFileUpload
                  className="text-blue-600 text-3xl"
                />
                <div>
                  <h3 className="font-bold">
                    Upload Notes
                  </h3>
                  <p className="text-gray-500 text-sm">
                    PDF, DOCX & Images
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-violet-50">
                <FaBrain
                  className="text-violet-600 text-3xl"
                />
                <div>
                  <h3 className="font-bold">
                    AI Question Generator
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Generate MCQs instantly
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-green-50">
                <FaBookOpen
                  className="text-green-600 text-3xl"
                />
                <div>
                  <h3 className="font-bold">
                    Practice Quiz
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Improve your score
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Floating Badge */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute -top-5 -right-5 bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-xl"
          >
            AI Powered ✨
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;