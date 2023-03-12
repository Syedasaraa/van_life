
import "./index.css"
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
