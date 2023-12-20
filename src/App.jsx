import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import UploadUrl from './Components/UploadUrl'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      <UploadUrl />
     <Footer />
      
    </>
  )
}

export default App
