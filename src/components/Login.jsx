import axios from "axios";
import { useState } from "react";

export default function Login({ onSignup, onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://44.198.157.33/api/auth/login",
        { email, password }
      );

      if (res?.data?.status) {
        alert("Login Successfully");
        onLogin({ email });
      } else {
        alert(res?.data?.message || "Login failed");
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-xl shadow-md w-80 border border-slate-700">

        <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded">
            Login
          </button>

        </form>

        <p className="text-sm text-center mt-3 text-gray-400">
          New user?{" "}
          <button
            onClick={onSignup}
            className="text-green-400 font-semibold"
          >
            Sign up
          </button>
        </p>

      </div>

    </div>
  );
}