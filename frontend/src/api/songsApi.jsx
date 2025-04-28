const BASE_URL = "http://localhost:8800"; // Important: BASE_URL should point to "/songs"

export const getAllSongs = () => {  
    return fetch(BASE_URL)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch songs');
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching all songs:', error);
            throw error;
        });
};

export const getSongById = (id) => {
    return fetch(`${BASE_URL}/${id}`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch song with id ${id}`);
            return response.json();
        })
        .catch(error => {
            console.error(`Error fetching song with id ${id}:`, error);
            throw error;
        });
};

export const createSong = (song) => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to create song');
        return response.json();
    })
    .catch(error => {
        console.error('Error creating song:', error);
        throw error;
    });
};

export const updateSong = (id, updatedSong) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSong),
    })
    .then(response => {
        if (!response.ok) throw new Error(`Failed to update song with id ${id}`);
        return response.json();
    })
    .catch(error => {
        console.error(`Error updating song with id ${id}:`, error);
        throw error;
    });
};

export const deleteSong = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) throw new Error(`Failed to delete song with id ${id}`);
        return response.json();
    })
    .catch(error => {
        console.error(`Error deleting song with id ${id}:`, error);
        throw error;
    });
};
