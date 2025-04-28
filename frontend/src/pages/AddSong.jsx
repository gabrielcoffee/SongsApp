import { useState } from "react";
import { createSong } from "../api/songsApi";
import { useNavigate } from "react-router-dom";

function AddSong() {
const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    release_year: "",
    genre: ""
});

const navigate = useNavigate();

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await createSong(formData);
    navigate("/");
    } catch (error) {
    console.error("Error creating song:", error);
    }
};

return (
    <div>
    <h1>Add New Song</h1>
    <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="artist" placeholder="Artist" value={formData.artist} onChange={handleChange} required />
        <input name="album" placeholder="Album" value={formData.album} onChange={handleChange} />
        <input name="release_year" placeholder="Release Year" value={formData.release_year} onChange={handleChange} />
        <input name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
        <button type="submit">Create</button>
    </form>
    </div>
);
}

export default AddSong;
