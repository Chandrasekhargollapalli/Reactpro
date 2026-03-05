import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {

  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const goToSignup = () => {
    setShowSignup(true);
  };

  const goToLogin = () => {
    setShowSignup(false);
  };

  return (
  <div className="flex flex-col min-h-screen">

  <Header user={user} />

  <div className="flex-grow">
    {!user ? (
      showSignup ? (
        <Signup onBackToLogin={goToLogin} />
      ) : (
        <Login onSignup={goToSignup} onLogin={handleLogin} />
      )
    ) : (
      <Home user={user} />
    )}
  </div>

  <Footer />

  <ToastContainer position="top-right" autoClose={3000} />

</div>
  );
}