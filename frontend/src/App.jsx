import Home from "./screens/home";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./screens/Services";
import Work from "./screens/Work";
import {Toaster} from 'react-hot-toast';
import Navbar from "./components/Navbar";
import "./css/all.css";

function App() {
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
