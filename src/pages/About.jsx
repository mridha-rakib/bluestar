import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";
import AfterHero from "../components/AfterHero";
import ContactForm from "../components/Modals";
function About() {
  return (
    <div>
      <Navbar />
      <div className=" mt-[120px]">
        <div className="py-[72px] text-gray-950 text-center font-semibold text-[40px]">
          About
        </div>
        <AfterHero />
      </div>

      <FooterSection />
    </div>
  );
}

export default About;
