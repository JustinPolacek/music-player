import React from 'react';
import LibrarySong from  './LibrarySong';


const Library = ({songs, setCurrentSong, audioRef,isPlaying, setSongs, libraryStatus }) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library': ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                     <LibrarySong 
                     songs={songs} 
                     id={song.id} 
                     key={song.id} 
                     audioRef={audioRef} 
                     setCurrentSong={setCurrentSong} 
                     song={song} 
                     isPlaying={isPlaying}
                     setSongs={setSongs}
                     
                    />
                ))}
            
            
               

            </div>
      </div>
    )


}


export default Library;