import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-0 p-0'>
        <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
          <h1 className='text-xl logo'>
            <image src='/vite.svg' alt='Vite Logo' className='h-8 w-8 inline-block mr-2' />
          </h1>
          <nav className='flex space-x-4 items-center'>
            <a href='#' className='text-white hover:underline'>Home</a>
            <a href='#' className='text-white hover:underline'>Courses</a>
            <a href='#' className='text-white hover:underline'>About</a>
            <a href='#' className='text-white hover:underline'>Contact</a>
            <button
              className='px-2 py-1 bg-indigo-500 hover:bg-fuchsia-500 text-white rounded cursor-pointer'
            >
              Login / Sing up?
            </button>
          </nav>
        </header>
      </div>
    </>
  )
}

export default App
