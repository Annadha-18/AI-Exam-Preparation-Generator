import {
  FaFileUpload,
  FaBrain,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

import { motion } from "framer-motion";

const features = [
  {
    icon: <FaFileUpload />,
    title: "Upload Notes",
    description:
      "Upload PDF, DOCX or text files securely and prepare smarter.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaBrain />,
    title: "AI Question Generator",
    description:
      "Generate intelligent MCQs, subjective questions and quizzes instantly.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Practice Quiz",
    description:
      "Attempt timed quizzes and improve your preparation with instant feedback.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Analytics",
    description:
      "Track scores, progress and identify weak topics using visual reports.",
    color: "from-orange-500 to-yellow-500",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Powerful Features
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to prepare efficiently using
            Artificial Intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white flex items-center justify-center text-3xl`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

              <button className="mt-8 text-blue-600 font-semibold hover:underline">
                Learn More →
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;