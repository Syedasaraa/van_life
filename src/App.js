import "./index.css";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Van/Vans";
import VanDetail from "./pages/Van/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import Hostlayout from "./pages/Host/Hostlayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";

import "./server";
import Error from "./components/Error";
import Login from "./pages/Login";
import AuthRequired from "./components/AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}
    
    > 
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route path="login" element={<Login/>}/>
       
       <Route element={<AuthRequired/>}>
       <Route path="host" element={<Hostlayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />\watch
        <Route path="reviews" element={<Review />} />
        <Route path="vans" element={<HostVans />} />

        <Route path="vans/:id" element={<HostVansDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        
      </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
