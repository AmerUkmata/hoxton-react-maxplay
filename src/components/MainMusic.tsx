import { useState } from "react"
import App from "../App"



const music = new Audio()

function playMusic() {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
}


export function MainMusic({songs, setSongs}) {

    

    return (
        <div>
            {songs.map(song => (
                <button
                    onClick={() => {
                        music.src = song.source
                        playMusic()
                    }}
                >
                    {song.title}
                </button>
                
            ))}
            
            <button onClick={playMusic}>PLAY/PAUSE MUSIC</button>
            
        </div>
    )
}