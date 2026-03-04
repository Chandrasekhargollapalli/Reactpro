import axios from "axios";
import { useState } from "react";

export default function Login({ onSignup, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onLogin({ email });
  // };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
// const  res = await axios.post('http://localhost:5004/api/auth/login',{email,password})
const  res = await axios.post('http://44.198.157.33/api/auth/login',{email,password})
console.log('response of login dataaa..',res)
console.log('response of login dataaa..',res?.data)
if(res?.data?.status){
  alert("Login Successfully")
  onLogin({email})
}else{
alert(res?.data?.message || 'Login failed')
}
    }catch(err){
      console.log(err)
      
    }
  }
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-80">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
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

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>

      <p className="text-sm text-center mt-3">
        New user?{" "}
        <button
          onClick={onSignup}
          className="text-blue-600 font-semibold"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}