import {Link} from 'react-router-dom';
import { Home } from './pages/Home'
import './App.css'

function App() {
  const myLink = document.getElementById('myLink');
  if (myLink) myLink.click();
  
  return (
    <div className="App">
      <Home/>
      <Link to="/Home">Home</Link>
      <button>Next</button>
    </div>
  )
}

export default App
