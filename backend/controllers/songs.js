import { db } from "../db.js"; // assuming you have db connection

// Get all songs
export const getAllSongs = (req, res) => {
    const q = "SELECT * FROM songs;";
    
    db.query(q, (error, data) => {
        if (error) return res.status(500).json({ error: "Database error", details: error });
        return res.status(200).json(data);
    });
};

// Get a single song by ID
export const getSongById = (req, res) => {
    const { id } = req.params;

    const q = "SELECT * FROM songs WHERE song_id = ?;";

    db.query(q, [id], (error, data) => {
        if (error) return res.status(500).json({ error: "Database error", details: error });
        if (data.length === 0) return res.status(404).json({ error: "Song not found" });
        
        return res.status(200).json(data[0]); // return first (and only) song
    });
};

// Create a new song
export const createSong = (req, res) => {
    const { title, artist, album, release_year, genre } = req.body;

    if (!title || !artist) {
        console.log(title, artist)
        return res.status(400).json({ error: "Missing required fields: title and artist" });
    }

    const q = "INSERT INTO songs (title, artist, album, release_year, genre) VALUES (?, ?, ?, ?, ?);";

    db.query(q, [title, artist, album, release_year, genre], (error, result) => {
        if (error) return res.status(500).json({ error: "Database error", details: error });
        
        console.log("A new song was created");
        return res.status(201).json({ message: "Song created", songId: result.insertId });
    });
};

// Update an existing song
export const updateSong = (req, res) => {
    const { id } = req.params;
    const { title, artist, album, release_year, genre } = req.body;

    if (!title || !artist) {
        return res.status(400).json({ error: "Missing required fields: title and artist" });
    }

    const q = `
        UPDATE songs 
        SET title = ?, artist = ?, album = ?, release_year = ?, genre = ?
        WHERE song_id = ?;
    `;

    db.query(q, [title, artist, album, release_year, genre, id], (error, result) => {
        if (error) return res.status(500).json({ error: "Database error", details: error });
        if (result.affectedRows === 0) return res.status(404).json({ error: "Song not found" });

        console.log("A song was updated");
        return res.status(200).json({ message: "Song updated successfully" });
    });
};

// Delete a song
export const deleteSong = (req, res) => {
    const { id } = req.params;

    const q = "DELETE FROM songs WHERE song_id = ?;";

    db.query(q, [id], (error, result) => {
        if (error) return res.status(500).json({ error: "Database error", details: error });
        if (result.affectedRows === 0) return res.status(404).json({ error: "Song not found" });

        console.log("A song was deleted");
        return res.status(200).json({ message: "Song deleted successfully" });
    });
};