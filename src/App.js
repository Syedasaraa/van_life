import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Van/Vans";
import VanDetail from "./pages/Van/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import Hostlayout from "./pages/Host/Hostlayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<Hostlayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="reviews" element={<Review/>}/>
        <Route path="vans" element={<HostVans/>}/>
        <Route path="vans/:id" element={<HostVansDetails/>}/>
        </Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
