import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";

import { toast } from "react-toastify";

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const { data } = await API.post("/auth/login", form);

      login(data.token, data.user);

      toast.success("Login Successful...!");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-teal-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Adit - Task Manager</h1>

        <div className="flex gap-6 text-sm">
          <a
            href="https://adit.com/about-us"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>

          <a
            href="https://adit.com/contact"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>

          <a
            href="https://adit.com/practice-management-tools"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            Info
          </a>

          <a
            href="https://adit.com/careers"
            className="hover:underline text-xl"
            target="_blank"
            rel="noreferrer"
          >
            Careers
          </a>
        </div>
      </nav>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-gray-600 shadow-lg rounded-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Welcome to Adit
          </h1>

          <h2 className="text-center text-2xl text-white font-bold mb-6">
            Login
          </h2>

          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className={`
                  w-full
                  border
                  p-3
                  rounded-lg
                  outline-none
                  focus:ring-2
                  ${
                    errors.email
                      ? "border-red-500 focus:ring-red-300"
                      : "focus:ring-blue-400"
                  }
                `}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                className={`
                  w-full
                  border
                  p-3
                  rounded-lg
                  outline-none
                  focus:ring-2
                  ${
                    errors.password
                      ? "border-red-500 focus:ring-red-300"
                      : "focus:ring-blue-400"
                  }
                `}
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="text-right">
              <a
                href="#forgot"
                className="text-sm text-yellow-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-teal-600
                hover:bg-teal-700
                text-white
                py-3
                rounded-lg
                transition
                text-2xl
              "
            >
              Login
            </button>
            <p className="text-center mt-4 text-sm text-white">
              Don’t have an account?{" "}
              <Link to="/register" className="text-yellow-600 font-medium">
                Register
              </Link>
            </p>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white mb-3">Follow us</p>

            <div className="flex justify-center gap-5 text-2xl">
              <a
                href="https://www.instagram.com/aditgroup/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-pink-500 hover:scale-110 transition" />
              </a>

              <a
                href="https://www.youtube.com/@aditsoftware"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="text-red-600 hover:scale-110 transition" />
              </a>

              <a
                href="https://www.linkedin.com/company/grow-with-adit/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-blue-700 hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
