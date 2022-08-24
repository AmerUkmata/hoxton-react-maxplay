export function AddMusic(){
    return(
     <div>
        <form>
        <input type="text" required />
        <input type="url" pattern=".*\.mp4$" required />
        <button>ADD SONG</button>
      </form>
     </div>
    )
}