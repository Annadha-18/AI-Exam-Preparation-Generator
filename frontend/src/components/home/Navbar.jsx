import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";
import Button from "../common/Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "#features" },
    { name: "FAQ", path: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <FaGraduationCap />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                ExamAI
              </h1>

              <p className="text-xs text-gray-500">
                AI Exam Platform
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Desktop Buttons */}

          <div className="hidden md:flex gap-3">

            <Link to="/login">
              <Button variant="outline">
                Login
              </Button>
            </Link>

            <Link to="/signup">
              <Button>
                Get Started
              </Button>
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-4">

            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>

            <Link to="/signup" onClick={() => setOpen(false)}>
              Signup
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;