import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        // Login form
        <div className="flex items-center justify-center mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <p className="text-xs mb-6 text-center">Welcome back! Please log in to access your account.</p>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#FF9500] text-white py-2 rounded-md hover:bg-[#FF9500] transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="text-xs text-center mt-3">Don’t have an account? <Link to="/auth/signup" className="text-[#FF9500]">Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login;
