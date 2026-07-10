import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-slate-100">

      <div className="text-center max-w-3xl px-6">

        <h1 className="text-6xl font-bold text-slate-800 leading-tight">

          AI Exam Preparation

          <span className="text-blue-600">

            {" "}Generator

          </span>

        </h1>

        <p className="mt-8 text-xl text-gray-600">

          Upload your study material,

          generate AI-powered questions,

          practice quizzes,

          and prepare smarter.

        </p>

        <div className="mt-10 flex justify-center gap-6">

          <Link to="/signup">

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">

              Get Started

            </button>

          </Link>

          <Link to="/login">

            <button className="border border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">

              Login

            </button>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;