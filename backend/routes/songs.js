import { Router } from "express";
import {
    getAllSongs,
    getSongById,
    createSong,
    updateSong,
    deleteSong
} from "../controllers/songs.js"
import cors from 'cors';

const router = Router();

router.use(cors()); 

// Definir as routes e connectar com os controllers 
router.get("/", getAllSongs);
router.get("/:id", getSongById);
router.post("/", createSong);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;