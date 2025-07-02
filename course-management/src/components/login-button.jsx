import React from "react";
import {useNavigate, Link} from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center space-x-4 ml-auto text-sm">
      <Link
        to="/auth/signup"
        className="px-3 py-1 text-black rounded hover:bg-[#E0E0E0]"
      >
        Sign Up
      </Link>
      <button
        onClick={() => navigate("/auth/login")}
        className="px-3 py-1 bg-[#FF9500] text-white rounded cursor-pointer"
      >
        Login
      </button>
    </nav>
  );
}

export default LoginButton;
