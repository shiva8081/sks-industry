import React from "react";
import logo from "../assets/logo2.png";
const Footer = () => {
  return (
    <div className="bg-gray-200 text-gray-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Logo and Certifications */}
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <img src={logo} alt="Website Logo" className="h-32 w-36 mb-2" />
          {/* <p className="text-lg font-semibold">SkS POWER TECH NIGERIA LIMITED P.LTD</p> */}
          {/* <p className="text-sm">Certifications</p>
          <div className="flex space-x-2 mt-2">
            <img src="/path/to/iaf.png" alt="IAF" className="h-8" />
            <img src="/path/to/ukas.png" alt="UKAS" className="h-8" />
            <img src="/path/to/sgs.png" alt="SGS" className="h-8" />
            <img src="/path/to/cpcb.png" alt="CPCB" className="h-8" />
          </div> */}
        </div>

        {/* Quick Links
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>DRUPS</li>
            <li>EPC</li>
            <li>Carbon Capture</li>
            <li>Hydrogen</li>
            <li>Railway Electrification</li>
            <li>Projects</li>
            <li>Our Presence</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Media */}
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="font-semibold">Media</h3>
          <ul className="space-y-1">
            <li>News</li>
            <li>Catalogues</li>
            <li>ISO Certificate</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Career */}
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="font-semibold">Career</h3>
          <ul className="space-y-1">
            <li>Culture</li>
            <li>Working</li>
            <li>Possibilities</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col mb-4 md:mb-0">
          <h3 className="font-semibold">Connect with us!</h3>
          <h3 className="font-semibold text-red-700 ">
            SKS POWER TECH NIGERIA LIMITED P.LTD
          </h3>
          <p>Plot 609F Lekan Asuni Close, Omole Phase 2,<br/> Olowora Oshodi-Isolo, Lagos Nigeria</p>
          <p>
            Email:{" "}
            <a
              href="mailto:skspowertech@gmail.com 
"
              className="text-blue-600"
            >
              skspowertech@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a href="tel:+2349046827127" className="text-blue-600">
              {" "}
              +234 9046827127
            </a>
          </p>
          <h3 className="font-semibold text-red-700 ">
            SKS INDUSTRIAL SERVICE PRIVATE LIMITED
          </h3>
          <p>
            263/1, North vibhav Nagar Tapa peth jalesar Road,
            <br /> Firozabad-283203, Uttar Pradesh (India)
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:skspowertech@gmail.com 
"
              className="text-blue-600"
            >
              skspowertech@gmail.com
            </a>
          </p>

          <p>Phone:{" "}
            <a href="tel:+919660649686" className="text-blue-600">
              {" "}
              +91 9660649686
            </a>
            ,{" "}
            <a href="tel:+919837014453" className="text-blue-600"> 9837014453</a>
          </p>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Footer;
