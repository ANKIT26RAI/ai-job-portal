import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";
function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);

      navigate("/jobs");

    } catch {

      toast.error("Invalid credentials");

    }
  };

  return (
    <div className="flex min-h-screen">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-blue-500 text-white items-center justify-center">

        <div className="max-w-md text-center">

          <h1 className="text-4xl font-bold mb-6">
            AI Job Portal
          </h1>

          <p className="text-lg opacity-90">
            Find your dream job with AI-powered matching and smart recommendations.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">

        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-2xl shadow-lg w-96"
        >

          <h2 className="text-3xl font-bold mb-6 text-center">
            Sign In
          </h2>

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Login
          </button>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;