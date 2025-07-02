import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header';
import { Home } from "./pages/home/home";
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        {/* Add more routes as needed */}
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/courses/:id" element={<CourseDetails />} /> */}
      </Routes>
    </>
  );
}

export default App
