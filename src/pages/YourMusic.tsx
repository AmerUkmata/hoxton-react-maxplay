
import { AddMusic } from "../components/AddMusic"
import './YourMusic.css'
export function YourMusic({songs, setSongs}) {
    return (
        <div className="YourMusicpage">
            <h1 style={{color:'black'}}>ADD YOUR OUN MUSIC</h1>
            <AddMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}