import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Signup() {
    return (
        // Signup form
        <div className="flex items-center justify-center mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <p className="text-xs mb-6 text-center">Create an account to get started.</p>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="sName">Name</label>
                        <input
                            type="text"
                            id="sName"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="sEmail">Email</label>
                        <input
                            type="email"
                            id="sEmail"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="sPassword">Password</label>
                        <input
                            type="password"
                            id="sPassword"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Create a password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#FF9500] text-white py-2 rounded-md hover:bg-[#FF9500] transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-xs text-center mt-3">Already have an account? <a href="#" className="text-[#FF9500]">Login</a></p>
            </div>
        </div>
    );
}

export default Signup;