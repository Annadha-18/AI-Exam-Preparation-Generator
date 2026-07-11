import {
  FaHome,
  FaUpload,
  FaQuestionCircle,
  FaHistory,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaRobot,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Sidebar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      name: "Upload Notes",
      icon: <FaUpload />,
      path: "/upload",
    },
    {
      name: "Generate Questions",
      icon: <FaQuestionCircle />,
      path: "/generate",
    },
    {
      name: "History",
      icon: <FaHistory />,
      path: "/history",
    },
    {
      name: "Profile",
      icon: <FaUserCircle />,
      path: "/profile",
    },
  ];

  return (
    <aside
      className="
      fixed
      left-0
      top-0
      w-72
      h-screen
      bg-gradient-to-b
      from-slate-900
      to-slate-800
      text-white
      flex
      flex-col
      shadow-2xl
      "
    >

      {/* Logo */}

      <div className="flex items-center gap-3 p-8 border-b border-slate-700">

        <div className="bg-blue-600 p-3 rounded-xl">

          <FaRobot size={28} />

        </div>

        <div>

          <h1 className="text-2xl font-bold">
            ExamAI
          </h1>

          <p className="text-xs text-gray-300">
            AI Learning Platform
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-6 space-y-3">

        {menu.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
              flex
              items-center
              gap-4
              px-5
              py-4
              rounded-xl
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-slate-700"
              }
              `
            }
          >

            <span className="text-xl">

              {item.icon}

            </span>

            {item.name}

          </NavLink>

        ))}

      </nav>

      {/* User */}

      <div className="border-t border-slate-700 p-6">

        <div className="flex items-center gap-3 mb-5">

          <FaUserCircle size={45} />

          <div>

            <h2 className="font-semibold">

              {user?.name || "Student"}

            </h2>

            <p className="text-sm text-gray-400">

              {user?.email}

            </p>

          </div>

        </div>

        <button
          className="
          flex
          items-center
          justify-center
          gap-3
          w-full
          bg-red-500
          hover:bg-red-600
          py-3
          rounded-xl
          transition
          "
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;