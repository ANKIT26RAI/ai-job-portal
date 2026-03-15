import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";
function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", {
        name,
        email,
        password
      });

toast.success("Account created successfully");
      navigate("/");

    } catch {

      toast.error("Registration failed");

    }

  };

  return (
    <div className="flex min-h-screen">

      {/* LEFT PANEL */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-500 text-white items-center justify-center">

        <div className="max-w-md text-center">

          <h1 className="text-4xl font-bold mb-4">
            Join AI Job Portal
          </h1>

          <p className="opacity-90">
            Create an account to discover AI-powered job recommendations.
          </p>

        </div>

      </div>

      {/* FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">

        <form
          onSubmit={handleRegister}
          className="bg-white p-10 rounded-2xl shadow-lg w-96"
        >

          <h2 className="text-3xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Register
          </button>

          <p className="text-center text-gray-500 mt-6 text-sm">

            Already have an account?{" "}

            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </span>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;