import { useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main className={"bg-black"}>
            
            <Navbar></Navbar>
            <Hero></Hero>
            <Highlights></Highlights>


        </main>
      </>
  )
}

export default App
