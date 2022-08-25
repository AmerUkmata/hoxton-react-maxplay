
import { AddMusic } from "../components/AddMusic"
export function YourMusic() {
    return (
        <div>
            <AddMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}