import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/course-management-logo-dark.png';
import LoginButton from "./LoginButton";

function Header() {
  return (  
    <div className="m-0 p-2">
      {/* Banner */}
      <div className="bg-[#FF9500] h-10 flex items-center justify-center rounded-lg p-2 mb-4 text-white text-center">
        Free Courses 🌟 Sale Ends Soon, Get It Now <a href="#">{" \u2192 "}</a>
      </div>
      <div className="mx-auto border-b border-[#E4E4E7]">
        <header className="flex items-center justify-between p-4 text-[#262626] container">
          <div className="flex items-center mr-12">
            <img
              src={Logo}
              alt="Course Management Logo"
              className="h-auto w-[100px] mr-3"
            />
          </div>
          <nav className="flex space-x-4 items-center text-sm">
            <Link
              to="/"
              className="text-black active font-semibold p-2 bg-[#F1F1F3] rounded-md"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-black hover:bg-[#F1F1F3] p-2 rounded-md"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-black hover:bg-[#F1F1F3] p-2 rounded-md"
            >
              About
            </a>
            <a
              href="#"
              className="text-black hover:bg-[#F1F1F3] p-2 rounded-md"
            >
              Contact
            </a>
          </nav>
          <LoginButton />
        </header>
      </div>
    </div>
  );
}

export default Header;
