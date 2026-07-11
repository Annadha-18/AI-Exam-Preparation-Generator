import { Link } from "react-router-dom";
import {
  FaUpload,
  FaQuestionCircle,
  FaClipboardCheck,
  FaHistory,
} from "react-icons/fa";

const actions = [
  {
    title: "Upload Notes",
    description: "Upload PDF, DOCX or TXT files",
    icon: <FaUpload />,
    color: "from-blue-500 to-blue-700",
    link: "/upload",
    button: "Upload",
  },
  {
    title: "Generate Questions",
    description: "Generate AI-powered questions",
    icon: <FaQuestionCircle />,
    color: "from-purple-500 to-violet-700",
    link: "/generate",
    button: "Generate",
  },
  {
    title: "Start Quiz",
    description: "Practice with quizzes",
    icon: <FaClipboardCheck />,
    color: "from-green-500 to-emerald-700",
    link: "/quiz",
    button: "Start",
  },
  {
    title: "View History",
    description: "Check previous attempts",
    icon: <FaHistory />,
    color: "from-orange-500 to-red-600",
    link: "/history",
    button: "Open",
  },
];

function QuickActions() {
  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((action) => (
          <div
            key={action.title}
            className={`bg-gradient-to-r ${action.color} rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition duration-300`}
          >
            <div className="text-4xl mb-4">
              {action.icon}
            </div>

            <h3 className="text-xl font-bold">
              {action.title}
            </h3>

            <p className="text-sm mt-2 opacity-90">
              {action.description}
            </p>

            <Link
              to={action.link}
              className="inline-block mt-5 bg-white text-slate-800 px-5 py-2 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              {action.button}
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;