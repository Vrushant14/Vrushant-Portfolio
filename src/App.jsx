import { useState } from 'react'
import './App.css'
import Sidenav from './components/sidenav.jsx'
function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidenav />
      <h1>Hello World</h1>
    </>
  )
}

export default App
