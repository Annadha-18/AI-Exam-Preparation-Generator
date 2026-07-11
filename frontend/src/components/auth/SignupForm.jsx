import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import Button from "../common/Button";
import Input from "../common/Input";
import useAuth from "../../hooks/useAuth";

function SignupForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] =useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ----------------------------
  // Password Strength Checker
  // ----------------------------

  const getStrength = (password) => {
    if (!password) {
      return {
        text: "Enter Password",
        color: "bg-gray-300",
        width: "0%",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      return {
        text: "Weak",
        color: "bg-red-500",
        width: "33%",
      };
    }

    if (score <= 4) {
      return {
        text: "Medium",
        color: "bg-yellow-500",
        width: "66%",
      };
    }

    return {
      text: "Strong",
      color: "bg-green-500",
      width: "100%",
    };
  };

  const strength = getStrength(form.password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!form.terms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      login({
        name: form.name,
        email: form.email,
      });

      navigate("/dashboard");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Full Name */}

      <div className="relative">

        <User
          className="absolute left-4 top-11 text-gray-400"
          size={18}
        />

        <Input
          label="Full Name"
          name="name"
          placeholder="John Doe"
          className="pl-12"
          value={form.name}
          onChange={handleChange}
        />

      </div>

      {/* Email */}

      <div className="relative">

        <Mail
          className="absolute left-4 top-11 text-gray-400"
          size={18}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="pl-12"
          value={form.email}
          onChange={handleChange}
        />

      </div>

      {/* Password */}

      <div className="relative">

        <Lock
          className="absolute left-4 top-11 text-gray-400"
          size={18}
        />

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          className="pl-12 pr-12"
          value={form.password}
          onChange={handleChange}
        />

        <button
          type="button"
          className="absolute right-4 top-11"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

      </div>

      {/* Confirm Password */}

      <div className="relative">

        <Lock
          className="absolute left-4 top-11 text-gray-400"
          size={18}
        />

        <Input
          label="Confirm Password"
          type={showConfirm ? "text" : "password"}
          name="confirmPassword"
          className="pl-12 pr-12"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="button"
          className="absolute right-4 top-11"
          onClick={() => setShowConfirm(!showConfirm)}
        >
          {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

      </div>

      {/* Password Strength */}

      <div>

        <div className="flex justify-between mb-2">

          <span className="text-sm font-medium">
            Password Strength
          </span>

          <span className="text-sm font-semibold">
            {strength.text}
          </span>

        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

          <div
            className={`${strength.color} h-full transition-all duration-500`}
            style={{
              width: strength.width,
            }}
          />

        </div>

      </div>

      {/* Terms */}

      <label className="flex items-center gap-2 text-sm">

        <input
          type="checkbox"
          name="terms"
          checked={form.terms}
          onChange={handleChange}
        />

        I accept the Terms & Conditions

      </label>

      {/* Button */}

      <Button
        type="submit"
        className="w-full"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </Button>

      <p className="text-center text-sm">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 text-blue-600 font-semibold"
        >
          Login
        </Link>

      </p>

    </form>
  );
}

export default SignupForm;