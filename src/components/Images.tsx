import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import About from "./About";
import ValuableClinet from "./ValuableClinet";
const Images = () => {
  const image = [image1, image2, image3, image4];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % image.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <motion.div
      className="w-full"
    
      initial={{ opacity: 1, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}

    >
      <motion.img
          src={image[currentImage]}
          className="w-full h-64 md:h-96 object-cover"
          alt="image"
        />
    </motion.div>
    <About />
    <ValuableClinet />
    </>
  );
};

export default Images;
