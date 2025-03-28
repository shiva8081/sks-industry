import "./App.css";
import Navbar from "./components/Navbar";
import Images from "./components/Images";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Enquiry from "./components/Enquiry";

function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
