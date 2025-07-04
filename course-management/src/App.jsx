import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Courses from './Pages/Course/Courses'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/course" element={<Courses />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path="/courses/:id" element={<CourseDetails />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
