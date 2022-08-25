import { MainMusic } from "../components/MainMusic"

export function FreeMusic() {
    return (
        <div>
            <MainMusic
                songs={songs}
                setSongs={setSongs}
            />
        </div>
    )
}