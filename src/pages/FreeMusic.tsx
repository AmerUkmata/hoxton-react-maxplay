import { MainMusic } from "../components/MainMusic"

export function FreeMusic({songs, setSongs}) {
    return (
        <div>
            <MainMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}