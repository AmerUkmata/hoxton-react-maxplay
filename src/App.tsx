// import {Link} from 'react-router-dom';
import { Home } from './pages/Home'
import { FreeMusic } from './pages/FreeMusic'


function App() {
  // const myLink = document.getElementById('myLink');
  // if (myLink) myLink.click();
  
  return (
    <div className="App">
       <Home/>
      
      <FreeMusic/>
      <button>Next</button>
    </div>
  )
}

export default App
