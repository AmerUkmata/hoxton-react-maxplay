import './MainMusic.css'



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
                <button className="Musicbuttons"
                    onClick={() => {
                        music.src = song.source
                        playMusic()
                    }}
                >
                   <img src="https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg" width="50px"/> {song.title}
                </button>
                
            ))}
            
            <button className="playandStop" onClick={playMusic}>PLAY/PAUSE MUSIC</button>
            
        </div>
    )
}