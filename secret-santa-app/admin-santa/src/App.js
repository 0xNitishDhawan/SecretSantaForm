import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Participants from './pages/Participants';
import MatchParticipants from './pages/MatchParticipants';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/match" element={<MatchParticipants />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
