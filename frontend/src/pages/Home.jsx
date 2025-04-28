import { useEffect, useState } from "react";
import { getAllSongs, deleteSong } from "../api/songsApi";
import { Link } from "react-router-dom";

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const res = await getAllSongs();
      setSongs(res);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSong(id);
      fetchSongs(); // Refresh after delete
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  return (
    <div>
      <h1>All Songs</h1>
      <Link to="/add">Add New Song</Link>
      <ul>
        {
        songs ?
        songs.map((song) => (
          <li key={song.song_id}>
            <Link to={`/songs/${song.song_id}`}>{song.title} - {song.artist}</Link>
            <button onClick={() => handleDelete(song.song_id)}>Delete</button>
          </li>
        ))
        :
        <></>
        }
      </ul>
    </div>
  );
}

export default Home;
