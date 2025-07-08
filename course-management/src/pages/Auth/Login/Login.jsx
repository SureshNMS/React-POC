import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pswdError, setPswdError] = useState("");
  const [apiError, setApiError] = useState("");
  const [success, setSuccess] = useState();

  // const isvalidEmail = (value) => {
  //     if(!value.trim()) {
  //         setEmailError("Email is required");
  //         return false;
  //     }
  //     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  //     setEmailError(isValid ? "" : "Invalid email format");
  //     return isValid;
  // }

  // const isValidPswd = (value) => {
  //     if(!value.trim()) {
  //         setPswdError("Password is required");
  //         return false;
  //     }
  //     if(value.length < 6) {
  //         setPswdError("Password must be at least 6 characters long.");
  //         return false;
  //     }
  //     else if (!/[A-Z]/.test(value)) {
  //         setPswdError("Password must include at least one uppercase letter.");
  //         return false;
  //     }
  //     else if (!/\d/.test(value)) {
  //         setPswdError("Password must include at least one number.");
  //         return false;
  //     }
  //     else {
  //         setPswdError("");
  //         return true;
  //     }
  // }

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError("");
  };

  const handlePswdChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPswdError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    //reset prev errors
    setEmailError("");
    setPswdError("");
    setApiError("");
    setSuccess("");
   
    //Basic Client Validation
    let isValid = true;

    if(!email.trim()) {
        setEmailError("Email is required");
        isValid = false;
    }

    if(!password.trim()) {
        setPswdError("Password is required");
        isValid = false;
    }

    if(!isValid) return; // no need to call API

    // Mock API connection
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ 
            email: "eve.holt@reqres.in",
            password: "cityslicka",
         }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("✅ Login successful!");
        console.log("Token", data.token);
      } else {
        setApiError("❌ Login failed: " + data.error);
      }
    } catch (err) {
      setApiError("❌ Network error. Please try again.");
    }
  };

  return (
    // Login form
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <p className="text-xs mb-6 text-center">
          Welcome back! Please log in to access your account.
        </p>
        <p className="text-xs mb-6 text-center text-gray-600">
          Try with: <span className="font-semibold">eve.holt@reqres.in</span> / <span className="font-semibold">cityslicka</span>
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-sm text-red-500 mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePswdChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {pswdError && (
              <p className="text-sm text-red-500 mt-1">{pswdError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF9500] text-white py-2 rounded-md hover:bg-[#FF9500] transition duration-200"
          >
            Login
          </button>
          {apiError && <p className="text-red-600 text-sm mt-4">{apiError}</p>}
          {success && <p className="text-green-600 text-sm mt-4">{success}</p>}
        </form>
        <p className="text-xs text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-[#FF9500]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
