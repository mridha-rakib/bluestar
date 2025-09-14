import React, { useState } from "react";
import layer1 from "/logo_wh.svg";
import { X } from "lucide-react";

const Modals = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://bluestar-server.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json(); // ✅ parse the JSON response

      if (res.ok && data.success) {
        setStatus("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message: " + (data.error || res.statusText));
      }
    } catch (error) {
      console.error(error);
      setStatus("Error: " + (error?.message || "Network error"));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={closeModal}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-neutral-900/90">
        {/* Close button (stays visible) */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <X className="text-white w-6 h-6" />
          <span className="sr-only">Close</span>
        </button>

        {/* Content */}
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
            {/* Left */}
            <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-[366px]">
              <img
                src={layer1}
                alt="Logo"
                className="w-40 h-auto sm:w-56 lg:w-[250px]"
              />
              <p className="text-white/90 font-poppins font-medium text-sm sm:text-base text-center lg:text-left">
                Join Us — in building timeless spaces, creating lasting values.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[366px]">
              <div className="flex flex-col items-center lg:items-start gap-2 w-full">
                <h3 className="text-white font-poppins font-semibold text-xl sm:text-2xl text-center lg:text-left">
                  Let&apos;s Connect
                </h3>
                <p className="text-white/90 font-poppins text-sm sm:text-base text-center lg:text-left">
                  Have questions or ideas? Connect with us—we&apos;re here to
                  help bring your vision to life!
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
                  className="w-full h-12 px-4 bg-[#E8F4FF] text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full h-12 px-4 bg-[#E8F4FF] text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full min-h-40 px-4 py-3 bg-[#E8F4FF] text-gray-800 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                  type="submit"
                  className="w-full h-12 bg-[#1890FF] border-2 border-white text-white font-poppins font-medium text-base rounded-md hover:bg-blue-700 transition"
                >
                  Connect
                </button>
              </form>

              {status && <p className="text-white mt-1">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
