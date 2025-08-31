import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AfterHero from "../components/AfterHero.jsx";
import ServicesSection from "../components/Services.jsx";
import ContactSection from "../components/Contact.jsx";
import FooterSection from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Hero />
        <div className="pt-[120px]"></div> <AfterHero />
        <ServicesSection />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default Home;
