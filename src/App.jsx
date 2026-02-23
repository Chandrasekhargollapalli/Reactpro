import { useState } from "react"
import Header from "./components/Header"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
 const [page, setPage] = useState("login"); 
  const [user, setUser] = useState(null);


  return (
 <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-gray-100">
        {page === "login" && (
          <Login
            onSignup={() => setPage("signup")}
            onLogin={(userData) => {
              setUser(userData);
              setPage("home");
            }}
          />
        )}

        {page === "signup" && (
          <Signup onBackToLogin={() => setPage("login")} />
        )}

        {page === "home" && <Home user={user} />}
      </main>

      <Footer />
    </div>
  )
}

export default App
