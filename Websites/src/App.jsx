import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Passion from "./pages/Passion";
import Profession from "./pages/Profession";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="bg-gray-950 min-h-screen">
        {/* Navbar Always Visible */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/profession" element={<Profession />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
