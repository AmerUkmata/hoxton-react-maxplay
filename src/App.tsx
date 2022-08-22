import { useState } from 'react'
import { Home } from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <button>Back</button>
      <button>Next</button>
    </div>
  )
}

export default App
