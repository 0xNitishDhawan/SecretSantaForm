import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Participants from './pages/Participants';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/participants" element={<Participants />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
