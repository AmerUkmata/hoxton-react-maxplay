
import { AddMusic } from "../components/AddMusic"
import { Link } from "react-router-dom"
export function YourMusic({songs, setSongs}) {
    return (
        <div>
            <AddMusic
                songs={songs}
                setSongs={setSongs}
            />
            <Link to="/Home">Home</Link>
        </div>
    )
}