
import { useState } from "react"
import { Home } from './pages/Home'
import { FreeMusic } from './pages/FreeMusic'
import { MainMusic } from "./components/MainMusic"
import { AddMusic } from "./components/AddMusic"
import { YourMusic } from "./pages/YourMusic"
import { Routes } from "react-router"
import { Route } from "react-router"
import { Link } from "react-router-dom"

function App() {
  // const myLink = document.getElementById('myLink');
  // if (myLink) myLink.click();
  const [songs, setSongs] = useState([
    {
      title: 'Goldn',
      source:
        'https://cdn.pixabay.com/download/audio/2022/08/04/audio_2dde668d05.mp3?filename=goldn-116392.mp3'
    },
    {
      title: 'Inspiring Cinematic Ambient',
      source:
        'https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3?filename=inspiring-cinematic-ambient-116199.mp3'
    },
    {
      title: 'Lofi Study',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3'
    },
    {
      title: 'Stomping Rock (Four Shots)',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/17/audio_407815a564.mp3?filename=stomping-rock-four-shots-111444.mp3'
    },
    {
      title: 'Stomping Rock (Four Shots)',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/17/audio_407815a564.mp3?filename=stomping-rock-four-shots-111444.mp3'
    },
    {
      title: 'Stomping Rock (Four Shots)',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/17/audio_407815a564.mp3?filename=stomping-rock-four-shots-111444.mp3'
    },
    {
      title: 'Stomping Rock (Four Shots)',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/17/audio_407815a564.mp3?filename=stomping-rock-four-shots-111444.mp3'
    },
    {
      title: 'Stomping Rock (Four Shots)',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/17/audio_407815a564.mp3?filename=stomping-rock-four-shots-111444.mp3'
    },
    {
      title: 'Stomping Rock (Four Shots)',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/17/audio_407815a564.mp3?filename=stomping-rock-four-shots-111444.mp3'
    },
    {
      title: 'Stomping Rock (Four Shots)',
      source:
        'https://cdn.pixabay.com/download/audio/2022/05/17/audio_407815a564.mp3?filename=stomping-rock-four-shots-111444.mp3'
    }
  ])
  return (
    <div className="App">
      <div><h1>MAXPLAY</h1>
        <Link to="/Home">Home</Link>
        <Link to="/YourMusic">YourMusic</Link>
        <Link to="/FreeMusic">FreeMusic</Link>
        </div>
       <Routes>
       <Route path="/Home" element={<Home/>} />
            <Route
              path="/YourMusic"
              element={<YourMusic songs={songs} setSongs={setSongs}/>}
            />
            <Route
              path="/FreeMusic"
              element={<FreeMusic songs={songs} setSongs={setSongs}/>}
            />
      </Routes>
    </div>
  )
}

export default App
