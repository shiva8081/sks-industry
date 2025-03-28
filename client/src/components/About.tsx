import React, { useState } from "react";
import about from "../assets/image5.jpeg"

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mt-10">
      <div className="flex ml-32 ">
        <div className="w-1/2">
          <h1 className=" text-2xl font-mulish   text-[#941100] tracking-wide   font-semibold">
            About SKS Power
          </h1>
          <p className="mt-4 text-sm leading-relaxed  font-mulish tracking-wide">
            At SKS Power Tech Nigeria Limited, we are dedicated to providing
            comprehensive power solutions tailored to diverse industries. Our
            expertise ensures that your operations remain uninterrupted and
            efficient. Industries We Serve You can depend on SKS Power Tech
            Nigeria Limited to provide rental power solutions that meet the
            needs of various industries, including: Commercial Construction
            Manufacturing Oil & Gas Retail Services Utilities Our Comprehensive
            Services We offer a wide range of dependable services to our valued
            customers: Installation of D.G. Sets: Our expert team ensures that
            all installations comply with local, state, and national electrical
            regulations, providing you with a safe and reliable setup.
            {isExpanded ? (
              <>
                Overhauling of D.G. Sets: Regular maintenance is key to
                reliability. We offer comprehensive overhauling services to keep
                your generators in optimal condition. Repair of D.G. Sets: Our
                skilled technicians are available 24/7 to address any generator
                issues promptly, minimizing downtime. Annual Maintenance
                Contracts (AMC) for D.G. Sets: We provide tailored AMC packages
                to ensure your generators operate efficiently year-round.
                Soundproof Canopy: Our soundproof canopies are designed to
                reduce noise levels, ensuring a quieter and more comfortable
                environment. Automatic Mains Failure (AMF) Panels for D.G. Sets:
                We supply AMF panels that automatically switch to standby
                generators during power outages, ensuring continuous operations.
                Vibration-Free Rooftop Installation: Our specialized
                installation techniques ensure that rooftop generator setups are
                vibration-free, preserving structural integrity. D.G. Sets with
                Two/Four-Wheel Trolley: For enhanced mobility, we offer
                generator sets mounted on trolleys, allowing for easy relocation
                as needed. Why Choose SKS Power Tech Nigeria Limited? Expertise
                and Experience: With years of industry experience, we deliver
                solutions that are both reliable and efficient. 24/7 Support:
                Our dedicated team is available around the clock to assist with
                any inquiries or issues. Customized Solutions: We tailor our
                services to meet the unique requirements of each client,
                ensuring optimal satisfaction.
              </>
            ) : (
              <span>
                Overhauling of D.G. Sets: Regular maintenance is key to
                reliability. We offer comprehensive overhauling services to keep
                your generators in optimal condition. Repair of D.G. Sets: Our
                skilled technicians are available 24/7 to address any generator
                issues promptly, minimizing downtime.
              </span>
            )}
          </p>
          <button
            className="mt-4 bg-[#941100] text-white py-2 px-4 rounded"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="w-1/2">
          <img src={about} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
