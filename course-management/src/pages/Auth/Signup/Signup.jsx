import React, { use, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Signup() {
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInput(e) {
    const value = e.target.value;
    const fieldName = e.target.name;
    setRegistration((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  }

  function register() {
    fetch("http://localhost:3000/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registration),
    });
  }

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // const isValidName = (value) => {
  //     if(!value.trim()) {
  //         setNameError("Name is Required");
  //         return false;
  //     }
  //     setNameError("");
  //     return true;
  // }

  // const isvalidEmail = (value) => {
  //     if(!value.trim()) {
  //         setEmailError("Email id is required");
  //         return false;
  //     }
  //     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  //     setEmailError(isValid ? "" : "Invalid email format");
  //     return isValid;
  // }

  // const isValidPassword = (value) => {
  //     if(!value.trim()) {
  //         setPasswordError("Password is required");
  //         return false;
  //     }
  //     setPasswordError("");
  //     return true;
  // }

  // const isValidConfirmPassword = (value) => {
  //     if(!value.trim()) {
  //         setConfirmPasswordError("Confirm Password is required");
  //         return false;
  //     }
  //     else if(value !== password){
  //         setConfirmPasswordError("Password and Confirm Password not same");
  //         return false;
  //     }
  //     setConfirmPasswordError("");
  //     return true;
  // }

  // const handleNameChnage = (e) => {
  //     const value = e.target.value;
  //     setName(value);
  //     setNameError("");
  // }

  // const handleEmailChnage = (e) => {
  //     const value = e.target.value;
  //     setEmail(value);
  //     setEmailError("");
  // }

  // const handlepasswordChnage = (e) => {
  //     const value = e.target.value;
  //     setPassword(value);
  //     setPasswordError("");
  // }

  // const handleConfirmPasswordChnage = (e) => {
  //     const value = e.target.value;
  //     setConfirmPassword(value);
  //     setConfirmPasswordError("");
  // }

  // const handleSignup = (e) => {
  //     e.preventDefault();

  //     const nameValid = isValidName(name);
  //     const emailValid = isvalidEmail(email);
  //     const passwordValid = isValidPassword(password);
  //     const confirmPasswordValid = isValidConfirmPassword(confirmPassword);

  //     if(nameValid && emailValid && passwordValid && confirmPasswordValid) {
  //         alert("Login Successfull !");
  //     }
  // }

  return (
    // Signup form
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <p className="text-xs mb-6 text-center">
          Create an account to get started.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="sName">
              Name
            </label>
            <input
              type="text"
              id="sName"
              name="name"
              value={registration.name}
              onChange={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="sEmail">
              Email
            </label>
            <input
              type="email"
              id="sEmail"
              name="email"
              value={registration.email}
              onChange={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="sPassword"
            >
              Password
            </label>
            <input
              type="password"
              id="sPassword"
              name="password"
              value={registration.password}
              onChange={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="cPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cPassword"
              name="confirmPassword"
              value={registration.confirmPassword}
              onChange={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>
          <button
            type="button"
            onClick={register}
            className="w-full bg-[#FF9500] text-white py-2 rounded-md hover:bg-[#FF9500] transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center mt-3">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-[#FF9500]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
