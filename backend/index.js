import express from "express";
import cors from "cors";
import songRoutes from "./routes/songs.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", songRoutes);

app.listen(8800, () => {
    console.log("Server is running on port: 8800");
});