import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Writing from "./pages//Writing/Writing";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element = {<Writing />}/>
        <Route path="/projects" element = {<Projects />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App