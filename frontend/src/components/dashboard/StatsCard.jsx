import CountUp from "react-countup";
import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-2xl
        p-6
        shadow-lg
        text-white
        ${color}
      `}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm opacity-90">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
          {value}
          </h2>

        </div>

        <div className="text-5xl opacity-80">
          {icon}
        </div>

      </div>

    </motion.div>
  );
}

export default StatsCard;