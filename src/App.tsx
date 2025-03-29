import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Images from "./components/Images";
import Enquiry from "./components/Enquiry";
import OurMission from "./components/OurMission";
import WhyChooseSKS from "./components/WhyChooseSKS";

function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/why-choose-sks" element={<WhyChooseSKS />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
