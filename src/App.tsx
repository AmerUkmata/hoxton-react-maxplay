// import {Link} from 'react-router-dom';
import { useState } from "react"
import { Home } from './pages/Home'
import { FreeMusic } from './pages/FreeMusic'
import { MainMusic } from "./components/MainMusic"
import { AddMusic } from "./components/AddMusic"


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

function App() {
  // const myLink = document.getElementById('myLink');
  // if (myLink) myLink.click();

  return (
    <div className="App">
      <MainMusic
        songs={songs}
        setSongs={setSongs}
      />
      <AddMusic
        songs={songs}
        setSongs={setSongs}
      />
      <Home />

      <FreeMusic />
      <button>Next</button>
    </div>
  )
}

export default App
