import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import DashBoard from './components/DashBoard/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">
       <Navbar></Navbar>
       {/* <h1 className='text-7xl mt-10 text-center text-purple-600'>Hello from tailwind</h1> */}
       <PriceList></PriceList>
       <DashBoard></DashBoard>

    </div>
  )
}

export default App
