import { useState } from "react";
import about from "../assets/image5.jpeg";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full px-6 md:px-32 mt-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-mulish text-[#941100] tracking-wide font-semibold">
            About SKS Power
          </h1>
          <p className="mt-4 text-sm leading-relaxed font-mulish tracking-wide">
            At SKS Power Tech Nigeria Limited, we are dedicated to providing
            comprehensive power solutions tailored to diverse industries. Our
            expertise ensures that your operations remain uninterrupted and
            efficient.
            {isExpanded ? (
              <>
                <h3 className="font-semibold text-lg mt-4 mb-2">
                  Industries We Serve
                </h3>
                <p className="mb-4">
                  You can depend on SKS Power Tech Nigeria Limited to provide
                  rental power solutions that meet the needs of various
                  industries, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Commercial</li>
                  <li>Construction</li>
                  <li>Manufacturing</li>
                  <li>Oil & Gas</li>
                  <li>Retail Services</li>
                  <li>Utilities</li>
                </ul>

                <h3 className="font-semibold text-lg mb-2">
                  Our Comprehensive Services
                </h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <span className="font-medium">
                      Installation of D.G. Sets:
                    </span>{" "}
                    Our expert team ensures that all installations comply with
                    local, state, and national electrical regulations, providing
                    you with a safe and reliable setup.
                  </li>
                  <li>
                    <span className="font-medium">
                      Overhauling of D.G. Sets:
                    </span>{" "}
                    Regular maintenance is key to reliability. We offer
                    comprehensive overhauling services to keep your generators
                    in optimal condition.
                  </li>
                  <li>
                    <span className="font-medium">Repair of D.G. Sets:</span>{" "}
                    Our skilled technicians are available 24/7 to address any
                    generator issues promptly, minimizing downtime.
                  </li>
                  <li>
                    <span className="font-medium">
                      Annual Maintenance Contracts (AMC):
                    </span>{" "}
                    We provide tailored AMC packages to ensure your generators
                    operate efficiently year-round.
                  </li>
                  <li>
                    <span className="font-medium">
                      Soundproof Canopy & AMF Panels:
                    </span>{" "}
                    We offer soundproof solutions and automatic mains failure
                    panels for seamless operations.
                  </li>
                  <li>
                    <span className="font-medium">
                      D.G. Sets with Mobility:
                    </span>{" "}
                    We offer generator sets mounted on two/four-wheel trolleys
                    for enhanced mobility and easy relocation.
                  </li>
                </ul>
              </>
            ) : (
              <span>...</span>
            )}
          </p>
          <button
            className="mt-4 bg-[#941100] text-white py-2 px-4 rounded"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={about}
            alt="about"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
