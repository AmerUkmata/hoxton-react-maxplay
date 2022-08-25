function getMusic(){
    fetch('need')
    .then(resp => resp.json)
    .then()
}

export function AddMusic(){

    return(
     <div>
        <form>
        <input id="need" type="text" required />
        <input id="need" type="url" pattern=".*\.mp4$" required />
        <button onClick={() => {
            getMusic()
        }}>ADD SONG</button>
      </form>
     </div>
    )
}