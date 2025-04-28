import { useEffect, useState } from "react";
import { getSongById } from "../api/songsApi";
import { useParams, Link } from "react-router-dom";

function SongDetails() {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    async function fetchSong() {
      try {
        const res = await getSongById(id);
        setSong(res);
      } catch (error) {
        console.error("Error fetching song:", error);
      }
    }
    fetchSong();
  }, [id]);

  if (!song) return <div>Loading...</div>;

  return (
    <div>
      <h1>{song.title}</h1>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Release Year: {song.release_year}</p>
      <p>Genre: {song.genre}</p>
      <Link to={`/edit/${song.song_id}`}>Edit</Link>
    </div>
  );
}

export default SongDetails;
