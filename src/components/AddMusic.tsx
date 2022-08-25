// import App from "../App"

export function AddMusic({ songs, setSongs }){
    function addSong(){
      const newMusic : Songs = {
        id: Math.random(),
        title: "titles",
        source: "urls"
      }
      songs.push(newMusic)
  }    
  
    //   console.log(songs) < = this should show all your songs in the console. if its undefined - DONT TOUCH FUNCTIONS. FIX PROPS FIRST!
  
      return(
       <div>
          <form>
          <input className="titles" type="text" required />
          <input className="urls" type="url" pattern=".*\.mp3$" required />
          <button onClick={addSong}>ADD SONG</button>
        </form>
       </div>
      )
  }