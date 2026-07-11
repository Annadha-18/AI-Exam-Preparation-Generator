import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import useAuth from "../../hooks/useAuth";
import robot from "../../assets/robot.png";

function WelcomeBanner() {

  const { user } = useAuth();

  return (

    <motion.div

      initial={{ opacity:0,y:40 }}

      animate={{ opacity:1,y:0 }}

      transition={{ duration:.6 }}

      className="
      mt-8
      bg-gradient-to-r
      from-blue-600
      via-indigo-600
      to-violet-600
      rounded-3xl
      shadow-xl
      p-10
      text-white
      grid
      lg:grid-cols-3
      gap-8
      items-center
      "

    >

      <div className="lg:col-span-2">

        <h1 className="text-4xl font-bold">

          Welcome Back,

          {user?.name || "Student"} 👋

        </h1>

        <p className="mt-5 text-blue-100 leading-8">

          Continue your AI powered learning journey.

          Upload notes,

          generate questions,

          attempt quizzes,

          and improve every day.

        </p>

        <button

          className="
          mt-8
          bg-white
          text-blue-700
          font-semibold
          px-8
          py-4
          rounded-xl
          hover:scale-105
          transition
          "

        >

          Continue Learning

        </button>

      </div>

      <div className="flex justify-center">

        <div className="relative">

          <img

            src={robot}

            className="w-56"

          />

          <div className="absolute -right-10 -bottom-2 w-28">

            <CircularProgressbar

              value={78}

              text="78%"

            />

          </div>

        </div>

      </div>

    </motion.div>

  );

}

export default WelcomeBanner;