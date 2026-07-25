import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button id='button' type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </>
  )
}

export default App
