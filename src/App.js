import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js'
import Footer from "./components/Footer.js"




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
          <Route path="/projects/project1" element={<div>Project 1</div>} />
          <Route path="/projects/project2" element={<div>Project 2</div>} />
          <Route path="/projects/project3" element={<div>Project 3</div>} />
          <Route path="/projects/project4" element={<div>Project 4</div>} />    
        <Route path="/contact-us" element={<div>Contact Us</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
