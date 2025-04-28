import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SongDetails from "./pages/SongDetails";
import AddSong from "./pages/AddSong";
import EditSong from "./pages/EditSong";
import Navbar from "./components/Navbar"; // if you have one

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/add" element={<AddSong />} />
        <Route path="/edit/:id" element={<EditSong />} />
      </Routes>
    </Router>
  );
}

export default App;
