
import { AddMusic } from "../components/AddMusic"
export function YourMusic({songs, setSongs}) {
    return (
        <div>
            <AddMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}