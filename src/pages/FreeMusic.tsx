import { MainMusic } from "../components/MainMusic"
import "./FreeMusic.css"

export function FreeMusic({songs, setSongs}) {
    return (
        <div className="Musicpage">
            <h1 style={{color:"black"}}>CHOSE YOUR MUSIC</h1>
            <MainMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}