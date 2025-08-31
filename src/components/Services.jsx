import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 2.png";
import img3 from "../assets/image 3.png";
import { MoveRightIcon } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="relative flex flex-col items-center gap-18 w-full max-w-[1156px] mx-auto px-4 lg:px-0">
      
      {/* Section Title */}
      <h2 className="w-full h-[48px] font-poppins font-semibold text-[40px] leading-[48px] text-center text-[#212121] mb-12">
        Services
      </h2>

      {/* Services List */}
      <div className="flex flex-col lg:flex-col items-center lg:items-start gap-[48px] w-full">

        {/* Commercial & Mixed Use */}
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <div className="w-full lg:w-[566px] h-[271px] lg:h-[424px] flex-shrink-0">
            <img src={img1} alt="Commercial & Mixed Use" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[563px]">
            <h3 className="font-poppins font-semibold text-[18px] lg:text-[28px] leading-[26px] lg:leading-[36px] text-center lg:text-left text-[#212121]">
              Commercial & Mixed Use
            </h3>
            <p className="font-poppins font-medium text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-center lg:text-left text-[#212121]">
              Our commercial and mixed-use projects combine functionality, aesthetic appeal, and long-term value. From office spaces and retail centers to integrated developments that blend residential, retail, and workspaces, we create dynamic environments designed to serve growing communities and evolving business needs.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 w-[127px] h-[52px] bg-[#1890FF]">
              <Link to="/service/com" className="flex gap-1.5 text-white font-poppins font-medium text-[16px] leading-[24px]">
                View <MoveRightIcon />
              </Link>
            </button>
          </div>
        </div>

        {/* Residential Development */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 w-full">
          <div className="w-full lg:w-[564px] h-[241px] lg:h-[376px] flex-shrink-0">
            <img src={img3} alt="Residential Development" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[563px]">
            <h3 className="font-poppins font-semibold text-[18px] lg:text-[28px] leading-[26px] lg:leading-[36px] text-center lg:text-left text-[#212121]">
              Residential Development
            </h3>
            <p className="font-poppins font-medium text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-center lg:text-left text-[#212121]">
              We specialize in thoughtfully planned residential communities, from custom homes to large-scale housing developments. Each project is designed with comfort, functionality, and long-term value in mind—creating beautiful living spaces that meet the needs of modern families while enhancing the surrounding neighborhood.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 w-[127px] h-[52px] bg-[#1890FF]">
              <Link to="/service/res" className="flex gap-1.5 text-white font-poppins font-medium text-[16px] leading-[24px]">
                View <MoveRightIcon />
              </Link>
            </button>
          </div>
        </div>

        {/* Custom Homes */}
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <div className="w-full lg:w-[566px] h-[271px] lg:h-[424px] flex-shrink-0">
            <img src={img2} alt="Custom Homes" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[563px]">
            <h3 className="font-poppins font-semibold text-[18px] lg:text-[28px] leading-[26px] lg:leading-[36px] text-center lg:text-left text-[#212121]">
              Custom Homes
            </h3>
            <p className="font-poppins font-medium text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-center lg:text-left text-[#212121]">
              Our custom homes are tailored to reflect each client’s unique vision, lifestyle, and needs. From concept to completion, we focus on quality craftsmanship, timeless design, and personalized details delivering one-of-a-kind living spaces that combine luxury, comfort, and lasting value.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 w-[127px] h-[52px] bg-[#1890FF]">
              <Link to="/service/cus" className="flex gap-1.5 text-white font-poppins font-medium text-[16px] leading-[24px]">
                View <MoveRightIcon />
              </Link>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
