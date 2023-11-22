import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
