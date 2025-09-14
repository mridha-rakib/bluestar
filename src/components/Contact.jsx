import React, { useState } from "react";
import layer1 from "/logo_bl.svg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "", // ✅ use "message" consistently
  });

  const [loading, setLoading] = useState(false);
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
    <div className="flex justify-center py-20 bg-white relative">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 p-4 lg:p-6 rounded-lg max-w-5xl w-full">
        {/* Left Section */}
        <div className="flex flex-col lg:mt-32 items-center lg:items-start gap-6 lg:w-[366px]">
          <img
            src={layer1}
            alt="BlueStar Logo"
            className="w-[250px] h-[46px] lg:w-[250px] lg:h-[50px] object-contain"
          />
          <p className="text-center lg:text-left text-gray-800 font-medium text-sm lg:text-base leading-5 lg:leading-6">
            Join us in building timeless spaces, creating lasting values.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:w-[366px]">
          <div className="flex flex-col gap-3 text-center lg:text-left w-full">
            <h2 className="text-lg lg:text-2xl font-semibold text-gray-900">
              Let’s Connect
            </h2>
            <p className="text-sm lg:text-base font-medium text-gray-700">
              Have questions or ideas? Connect with us—we’re here to help bring
              your vision to life!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-3 bg-[#E8F4FF] rounded outline-none placeholder:text-gray-500 w-full"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="p-3 bg-[#E8F4FF] rounded outline-none placeholder:text-gray-500 w-full"
            />

            <textarea
              name="message" // ✅ matches state
              value={formData.message} // ✅ matches state
              onChange={handleChange}
              placeholder="Message"
              required
              className="p-3 bg-[#E8F4FF] rounded outline-none h-32 placeholder:text-gray-500 w-full"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#1890FF] text-white font-medium rounded shadow hover:bg-blue-700 transition w-full lg:w-auto disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {status && <p className="text-sm mt-2">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
