import { useState } from "react"

const music = new Audio()

function playMusic() {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
}

export function MainMusic() {
    const [songs, setsongs] = useState([
        
             
                {
                    "title": "hello",
                    "url": "https://youtu.be/SAFHQobvqXI"
                },
                {
                    "title": "gold",
                    "url": "https://youtu.be/SAFHQobvqXI"
                },
                {
                    "title": "nice beat",
                    "url": "https://youtu.be/SAFHQobvqXI"
                }
    ])

    return (
        <div>
            {songs.map(song => (
                <button
                    onClick={() => {
                        music.src = song.url
                        playMusic()
                    }}
                >
                    {song.title}
                </button>
            ))}
        </div>
    )
}