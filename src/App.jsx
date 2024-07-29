import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function NavBar () {
  return (
    <nav>
      <ul>
        <li>
          <h1>VM</h1>
        </li>
      </ul>
    </nav>
  )
}
function buttonclicked () {
  document.getElementsByClassName('h1')[0].innerHTML = 'Nothing Much You Tell'
}
function MyButton () {
  return (
    <button class='button1' onClick={buttonclicked}>
      Submit
    </button>
  )
}

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1 class='h1'>Wassup Bro</h1>
      <MyButton />
    </>
  )
}

export default App
