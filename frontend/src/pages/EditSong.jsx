import { useState, useEffect } from "react";
import { getSongById, updateSong } from "../api/songsApi";
import { useNavigate, useParams } from "react-router-dom";

function EditSong() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    release_year: "",
    genre: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSong() {
      try {
        const res = await getSongById(id);
        setFormData(res);
      } catch (error) {
        console.error("Error fetching song:", error);
      }
    }
    fetchSong();
  }, [id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateSong(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Error updating song:", error);
    }
  };

  return (
    <div className="center-text">
      <h1>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="artist" placeholder="Artist" value={formData.artist} onChange={handleChange} required />
        <input name="album" placeholder="Album" value={formData.album} onChange={handleChange} />
        <input name="release_year" placeholder="Release Year" value={formData.release_year} onChange={handleChange} />
        <input name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditSong;
