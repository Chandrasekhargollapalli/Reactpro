import { useState } from "react";
import axios from "axios";
export default function Signup({ onBackToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   alert("Signup successful");
  //   onBackToLogin();
  // };
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
// const res = await axios.post('http://localhost:5004/api/auth/signup',{name,email,password})
const res = await axios.post('http://44.198.157.33/api/auth/signup',{name,email,password})
console.log('response of sign up dataaa..',res)
if(res?.data?.status){
  alert('Signup successful')
  onBackToLogin()
}
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-80">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Sign Up
        </button>
      </form>

      <p className="text-sm text-center mt-3">
        Already have account?{" "}
        <button
          onClick={onBackToLogin}
          className="text-blue-600 font-semibold"
        >
          Login
        </button>
      </p>
    </div>
  );
}