import layer1 from "/logo_bl.svg";

const AfterHero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-[141px] lg:px-[144px] pb-[120px] px-4 w-full max-w-[1220px] mx-auto">
      {/* Logo */}
      <div className="flex justify-center lg:justify-start w-full lg:w-auto">
        <img
          src={layer1}
          alt="BlueStar Logo"
          className="w-[250px] h-[46.37px] lg:w-[400px] lg:h-[84px]"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[563px] h-auto text-black">
        <h2 className="text-center lg:text-left text-[18px] leading-[26px] lg:text-2xl lg:leading-snug font-semibold w-full lg:w-[563px]">
          BlueStar Building Timeless Spaces, Creating Lasting Value
        </h2>
        <p className="text-center lg:text-left text-[14px] leading-[22px] lg:text-base lg:leading-relaxed w-full lg:w-[563px]">
          For more than 30 years, BlueStar has sought to create only the highest
          quality estates in residential and commercial real estate development
          and provides plots and custom functional spaces for clients while
          continuously and noticeably increasing market value for years to come.
        </p>
      </div>
    </div>
  );
};

export default AfterHero;
