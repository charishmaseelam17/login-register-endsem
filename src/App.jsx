import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Login Successful!" : "Registration Successful!");
  };

  return (
    <div className="container">
      <div className="form-box">

        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
            />
          )}

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default App;