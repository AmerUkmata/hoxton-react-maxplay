// import App from "../App"

export function AddMusic({ songs, setSongs }){
    function addSong(event){
     
        event.preventDefault()

        const song = {
            title: event.target.title.value,
            source: event.target.url.value
        }
        setSongs([...songs, song])
  }    
  
    //   console.log(songs) < = this should show all your songs in the console. if its undefined - DONT TOUCH FUNCTIONS. FIX PROPS FIRST!
  
      return(
       <div>
          <form onSubmit={addSong}>
          <input name="title"  type="text" required />
          <input name="url" type="url" pattern=".*\.mp3$" required />
          <button >ADD SONG</button>
        </form>
       </div>
      )
  }