import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Download from './Components/Download'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      <Download />
     <Footer />
      
    </>
  )
}

export default App
