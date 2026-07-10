import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          ExamAI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">

          <Link to="/">Home</Link>

          <Link to="/login">Login</Link>

          <Link to="/signup">Signup</Link>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>

        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu size={30} />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;