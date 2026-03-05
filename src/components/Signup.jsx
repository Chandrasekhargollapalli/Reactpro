import axios from "axios";
import { useState } from "react";

export default function Signup({ onBackToLogin }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://44.198.157.33/api/auth/signup",
        { name, email, password }
      );

      if (res?.data?.status) {
        alert("Signup successful");
        onBackToLogin();
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-xl shadow-md w-80 border border-slate-700">

        <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Name"
            className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            Sign Up
          </button>

        </form>

        <p className="text-sm text-center mt-3 text-gray-400">
          Already have account?{" "}
          <button
            onClick={onBackToLogin}
            className="text-green-400 font-semibold"
          >
            Login
          </button>
        </p>

      </div>

    </div>
  );
}