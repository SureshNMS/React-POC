import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Courses from './Pages/Course/Courses'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/course" element={<Courses />} />
        {/* <Route path="/courses/:id" element={<CourseDetails />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
