import React from "react";

export function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Course Management</h1>
        <p className="text-gray-700">
          This is the home page of the Course Management application. You can
          manage your courses, view details, and more.
        </p>
        </div>
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Get Started</h2>
            <p className="text-gray-600">
                To begin, please log in or sign up to access your courses.
            </p>
        </div>
    </div>
  );
}
