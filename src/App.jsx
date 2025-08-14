import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import SplineBot from './Components/SplineBot/SplineBot.jsx'
import Spline from '@splinetool/react-spline'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
    <Navbar />
      <div className='main'><Hero /></div>
    </>
  )
}

export default App
