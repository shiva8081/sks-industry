import React, { useState, useEffect } from 'react'
import client from "../assets/image6.jpg"
import { motion } from "framer-motion";
import client1 from "../assets/image7.jpg"

const ValuableClinet = () => {
    const image = [client, client1];
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % image.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center   ">
        <div className="w-1/2 text-center  ">
          <h1 className=" text-2xl font-mulish   text-[#941100] tracking-wide   font-semibold">
            Valuable Clients
          </h1>
        </div>
      <div className=" flex justify-center items-center  ">
        <div className="w-1/2   flex justify-center items-center">
          <img src={image[currentImage]} alt="client" />
        </div>
      </div>
    </div>
  );
};

export default ValuableClinet