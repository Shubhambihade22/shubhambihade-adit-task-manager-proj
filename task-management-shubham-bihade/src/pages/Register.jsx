import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(form.password)
    ) {
      newErrors.password =
        "Password must contain at least 6 characters, one uppercase letter, one number, and one special character";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      await API.post("/auth/register", form);

      toast.success("Registration Successful...!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-gray-600 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          User Registration
        </h2>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.name
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.email
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.password
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                setErrors({ ...errors, password: "" });
              }}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className={`w-full border p-3 rounded-lg outline-none ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "focus:ring-2 focus:ring-blue-500"
              }`}
              value={form.confirmPassword}
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
                setErrors({ ...errors, confirmPassword: "" });
              }}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-6 py-3 rounded-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-teal-600 hover:bg-teal-700 text-2xl"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
