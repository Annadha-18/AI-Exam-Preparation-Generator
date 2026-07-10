import { motion } from "framer-motion";
// import CountUp from "react-countup";
import {
  FaUsers,
  FaBookOpen,
  FaClipboardList,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: 5000,
    suffix: "+",
    title: "Students",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaBookOpen />,
    value: 2500,
    suffix: "+",
    title: "Study Notes Uploaded",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <FaClipboardList />,
    value: 10000,
    suffix: "+",
    title: "Questions Generated",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaAward />,
    value: 98,
    suffix: "%",
    title: "Student Satisfaction",
    color: "from-orange-500 to-yellow-500",
  },
];

function Statistics() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Trusted by Thousands
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Our AI-powered platform helps students prepare
            smarter, faster and more efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl shadow-xl bg-white p-8 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-3xl`}
              >
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mt-6 text-slate-800">
              {item.value}
              {item.suffix}
              </h3>

              <p className="mt-3 text-gray-500 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;