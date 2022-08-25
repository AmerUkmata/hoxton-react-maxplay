import { MainMusic } from "../components/MainMusic"
import "./FreeMusic.css"

export function FreeMusic({songs, setSongs}) {
    return (
        <div className="Musicpage">
            <MainMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}