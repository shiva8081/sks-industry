import "./App.css";
// import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Images from "./components/Images";
import About from "./components/About";
import ValuableClinet from "./components/ValuableClinet";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Enquiry from "./components/Enquiry";
import { useRef } from "react";

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<ValuableClinet />} />
        <Route path="/enquiry" element={<Enquiry formRef={formRef} />} />
      </Routes>
      {/* <Images />
      <About /> */}
      {/* <ValuableClinet /> */}
      <Footer />
    </div>
  );
}

export default App;
