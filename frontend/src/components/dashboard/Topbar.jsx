import { Search, Bell, Moon, Sun } from "lucide-react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

function Topbar() {
  const { user } = useAuth();

  const [darkMode, setDarkMode] = useState(false);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white rounded-2xl shadow-md p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      {/* Left Side */}
      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Welcome back, {user?.name || "Student"} 👋
        </h1>

        <p className="text-gray-500 mt-1">
          {today}
        </p>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="
            w-64
            pl-10
            pr-4
            py-2.5
            rounded-xl
            border
            border-gray-300
            focus:ring-2
            focus:ring-blue-500
            outline-none
            "
          />

        </div>

        {/* Notification */}
        <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

          <Bell size={20} />

        </button>

        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
        >

          {darkMode ? <Sun size={20} /> : <Moon size={20} />}

        </button>

        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">

          {user?.name?.charAt(0).toUpperCase() || "S"}

        </div>

      </div>

    </header>
  );
}

export default Topbar;