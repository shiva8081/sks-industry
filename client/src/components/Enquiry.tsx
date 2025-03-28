import React, { useState, useRef } from "react";

import { motion } from "framer-motion";

const Enquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    mobile: "",
    product: "E2P Gas Genset",
    address: "",
    message: "",
  });

  const formRef = useRef<HTMLDivElement | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4007/send-email", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      console.log("Email sent successfully");
      setSuccessMessage("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    console.log("Form Submitted", formData);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" mt-8  mx-auto p-6 text-center text-2xl font-bold
        rounded-md"
      >
        Please fill the below form for Business Enquiries. We will get in touch
        with you.
      </motion.div>

      {successMessage ? (
        <div className="mt-4 text-green-500 text-center">{successMessage}</div>
      ) : (
        <div
          ref={formRef}
          className=" mt-8 max-w-lg mx-auto p-6 bg-[#0C1E56] text-white rounded-md"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Enquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 rounded bg-white text-black"
                onChange={handleChange}
              />
            </div>

            {/* Organization Name */}
            <div>
              <label className="block text-sm font-medium">
                Organization Name
              </label>
              <input
                type="text"
                name="organization"
                className="w-full p-2 rounded bg-white text-black"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 rounded bg-white text-black"
                onChange={handleChange}
              />
            </div>

            {/* Mobile No */}
            <div>
              <label className="block text-sm font-medium">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                required
                className="w-full p-2 rounded bg-white text-black"
                onChange={handleChange}
              />
            </div>

            {/* Product Dropdown */}
            <div>
              <label className="block text-sm font-medium">Product</label>
              <select
                name="product"
                className="w-full p-2 rounded bg-white text-black"
                onChange={handleChange}
              >
                <option value="E2P Gas Genset">E2P Gas Genset</option>
                <option value="Diesel Generator">Diesel Generator</option>
                <option value="Solar Panels">Solar Panels</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                className="w-full p-2 rounded bg-white text-black"
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium">
                Message (optional)
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full p-2 rounded bg-white text-black"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* reCAPTCHA
        <div className="flex justify-center">
          <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptcha} />
        </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              SEND ENQUIRY
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Enquiry;
