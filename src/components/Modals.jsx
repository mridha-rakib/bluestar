import React, { useState } from "react";
import layer1 from "/logo_wh.svg";
import { X } from "lucide-react";
import axios from "axios";

const Modals = ({ closeModal }) => {
  // Form state (use "message", not "msg")
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/error message

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit (Axios → your Nodemailer API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("/api/contact", {
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (res.status >= 200 && res.status < 300) {
        setStatus("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" }); // reset form
      } else {
        setStatus("Failed to send message. Try again!");
      }
    } catch (error) {
      setStatus("Error: " + (error?.response?.data?.error || error.message));
    }
  };

  return (
    <div className="relative bg-black flex flex-col justify-center items-center py-24">
      <button className="absolute top-4 right-4" onClick={closeModal}>
        <X className="text-white w-6 h-6" />
      </button>

      <div>
        <div className="flex flex-col lg:flex-row items-center gap-6 p-5 lg:p-12 bg-black/80 w-[852px] h-[652px] relative rounded-2xl">
          {/* Left */}
          <div className="flex flex-col items-center gap-6 w-[366px]">
            <img src={layer1} alt="Logo" className="w-[250px] h-[46.37px]" />
            <p className="text-white font-poppins font-medium text-[16px] leading-[24px] text-center">
              Join Us - in building timeless spaces, creating lasting values.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-6 w-[366px]">
            <div className="flex flex-col items-center gap-3 w-full">
              <h3 className="text-white font-poppins font-semibold text-[28px] leading-[36px] text-center">
                Let's Connect
              </h3>
              <p className="text-white font-poppins font-medium text-[16px] leading-[24px] text-center">
                Have questions or ideas? Connect with us—we're here to help
                bring your vision to life!
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full h-[52px] px-4 py-3 bg-[#E8F4FF] text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
                className="w-full h-[52px] px-4 py-3 bg-[#E8F4FF] text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="w-full h-[208px] px-4 py-3 bg-[#E8F4FF] text-gray-800 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="submit"
                className="w-full h-[52px] bg-[#1890FF] border-2 border-white text-white font-poppins font-medium text-[16px] rounded-md hover:bg-blue-700 transition"
              >
                Connect
              </button>
            </form>

            {status && <p className="text-white mt-2">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
