import { FaRobot, FaArrowRight } from "react-icons/fa";

function AIAssistant() {
  return (
    <div className="mt-10">

      <div
        className="
        bg-gradient-to-r
        from-indigo-600
        via-blue-600
        to-cyan-600
        rounded-3xl
        shadow-xl
        p-8
        text-white
        "
      >

        <div className="flex items-center gap-4">

          <div className="bg-white/20 p-4 rounded-2xl">

            <FaRobot size={35} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              AI Study Assistant
            </h2>

            <p className="text-blue-100 mt-2">
              Your intelligent learning companion
            </p>

          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            What can I help you with?
          </h3>

          <ul className="mt-4 space-y-3 text-blue-100">

            <li>📄 Summarize uploaded notes</li>

            <li>❓ Generate important questions</li>

            <li>🧠 Explain difficult concepts</li>

            <li>📝 Create quizzes instantly</li>

          </ul>

        </div>

        <button
          className="
          mt-8
          bg-white
          text-blue-700
          px-6
          py-3
          rounded-xl
          font-semibold
          flex
          items-center
          gap-3
          hover:scale-105
          transition
          "
        >
          Ask AI

          <FaArrowRight />

        </button>

      </div>

    </div>
  );
}

export default AIAssistant;