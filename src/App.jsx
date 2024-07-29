import { useState } from 'react'
import './App.css'
import Sidenav from './components/sidenav.jsx'
function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidenav />
    </>
  )
}

export default App
