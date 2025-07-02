import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'


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
      <Footer />
    </>
  );
}

export default App
