import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages (create empty files for now)
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Industrial from "./pages/Industrial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/industrial" element={<Industrial />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer (later) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
