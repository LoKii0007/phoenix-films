import Home from "./screens/home";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./screens/Services";
import Work from "./screens/Work";
import {Toaster} from 'react-hot-toast';
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./css/all.css";

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
