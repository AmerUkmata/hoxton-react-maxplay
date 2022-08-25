import App from "../App"

function getMusic(){
    fetch('need')
    .then(resp => resp.json)
    .then()
}

export function AddMusic({ songs, setSongs }){
    function addSong(){
      // we will build this soon  
  }    
  
    //   console.log(songs) < = this should show all your songs in the console. if its undefined - DONT TOUCH FUNCTIONS. FIX PROPS FIRST!
  
      return(
       <div>
          <form>
          <input type="text" required />
          <input type="url" pattern=".*\.mp4$" required />
          <button onClick={addSong}>ADD SONG</button>
        </form>
       </div>
      )
  }