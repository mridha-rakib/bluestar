import layer1 from "/logo_wh.svg";
import { BookUser, Mail, Phone } from "lucide-react";
import ConnectButtonWithModal from "./ConnectButton";

const FooterSection = () => {
  return (
    <footer className="bg-[#212121] text-white">
      {/* Container */}
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-14">
        {/* Top: Logo */}
        <div className="flex items-center justify-start">
          <img
            src={layer1}
            alt="BlueStar Logo"
            className="h-[38px] sm:h-[46px] w-auto max-w-full"
          />
        </div>

        {/* Middle: 3 columns on lg, 2 on md, 1 on mobile */}
        <div className="mt-8 grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-6">
            <p className="text-sm leading-6 sm:text-base sm:leading-7">
              Have questions or ideas? Connect with us—we’re here to help bring
              your vision to life!
            </p>
            <ConnectButtonWithModal />
          </div>

          {/* Middle Column (Quick Links) */}
          <nav className="flex flex-col items-start gap-3 sm:gap-3.5 text-sm sm:text-base">
            <a href="#home" className="hover:underline focus:underline">
              Home
            </a>
            <a href="#commercial" className="hover:underline focus:underline">
              Commercial &amp; Mixed Use
            </a>
            <a href="#residential" className="hover:underline focus:underline">
              Residential Development
            </a>
            <a href="#custom" className="hover:underline focus:underline">
              Custom House
            </a>
            <a href="#about" className="hover:underline focus:underline">
              About
            </a>
          </nav>

          {/* Right Column (Contact + Socials) */}
          <div className="flex flex-col items-start gap-5">
            <p className="text-sm sm:text-base flex gap-2">
              <BookUser className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 shrink-0" />
              1900 W. Nickerson St. Suite 116, PMB #39 Seattle, WA 98119
            </p>
            <p className="text-sm sm:text-base flex items-center gap-2">
              <Phone className="w-5 h-5 shrink-0" /> 206-850-7883
            </p>
            <p className="text-sm sm:text-base flex items-center gap-2">
              <Mail className="w-5 h-5 shrink-0" /> info@bluestarmgt.com
            </p>

            {/* Socials */}
            <div className="mt-1 flex flex-wrap items-center gap-5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_24_195)">
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.8 13.875 9.749V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M16.6711 15.4688L17.2031 12H13.875V9.749C13.875 8.8 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_24_195">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_24_194)">
                    <path
                      d="M6.08588 23.9151C5.15758 23.9047 4.23801 23.7344 3.36753 23.4118C2.73187 23.1768 2.15676 22.8027 1.68424 22.3169C1.19712 21.8454 0.822514 21.2701 0.588235 20.6339C0.265824 19.7634 0.0958076 18.8439 0.0856471 17.9158C0.0143529 16.3727 0 15.9099 0 12C0 8.09012 0.0157647 7.62894 0.0849412 6.08471C0.0963347 5.15689 0.26656 4.23788 0.588235 3.36753C0.823654 2.73176 1.19773 2.15642 1.68329 1.68329C2.15523 1.19662 2.73061 0.822358 3.36682 0.588235C4.2373 0.265557 5.15687 0.0953008 6.08518 0.0849412C7.62871 0.0143529 8.09224 0 12 0C15.9078 0 16.3711 0.0157647 17.9153 0.0849412C18.8433 0.0962542 19.7626 0.266481 20.6332 0.588235C21.2691 0.822667 21.8443 1.1968 22.3165 1.68306C22.8029 2.15535 23.1772 2.73073 23.4118 3.36682C23.7345 4.23729 23.9049 5.15686 23.9153 6.08518C23.9859 7.62941 24.0002 8.09176 24.0002 12.0005C24.0002 15.9092 23.9859 16.3715 23.9153 17.9158C23.9041 18.8439 23.7338 19.7633 23.4118 20.6339C23.1682 21.2652 22.7951 21.8386 22.3166 22.317C21.838 22.7954 21.2646 23.1683 20.6332 23.4118C19.7627 23.7345 18.8431 23.9049 17.9148 23.9153C16.372 23.9859 15.9082 24.0002 11.9995 24.0002C8.09082 24.0002 7.62847 23.9866 6.08565 23.9153"
                      fill="url(#paint0_radial_24_194)"
                    />
                    <path
                      d="M6.08588 23.9151C5.15758 23.9047 4.23801 23.7344 3.36753 23.4118C2.73187 23.1768 2.15676 22.8027 1.68424 22.3169C1.19712 21.8454 0.822514 21.2701 0.588235 20.6339C0.265824 19.7634 0.0958076 18.8439 0.0856471 17.9158C0.0143529 16.3727 0 15.9099 0 12C0 8.09012 0.0157647 7.62894 0.0849412 6.08471C0.0963347 5.15689 0.26656 4.23788 0.588235 3.36753C0.823654 2.73176 1.19773 2.15642 1.68329 1.68329C2.15523 1.19662 2.73061 0.822358 3.36682 0.588235C4.2373 0.265557 5.15687 0.0953008 6.08518 0.0849412C7.62871 0.0143529 8.09224 0 12 0C15.9078 0 16.3711 0.0157647 17.9153 0.0849412C18.8433 0.0962542 19.7626 0.266481 20.6332 0.588235C21.2691 0.822667 21.8443 1.1968 22.3165 1.68306C22.8029 2.15535 23.1772 2.73073 23.4118 3.36682C23.7345 4.23729 23.9049 5.15686 23.9153 6.08518C23.9859 7.62941 24.0002 8.09176 24.0002 12.0005C24.0002 15.9092 23.9859 16.3715 23.9153 17.9158C23.9041 18.8439 23.7338 19.7633 23.4118 20.6339C23.1682 21.2652 22.7951 21.8386 22.3166 22.317C21.838 22.7954 21.2646 23.1683 20.6332 23.4118C19.7627 23.7345 18.8431 23.9049 17.9148 23.9153C16.372 23.9859 15.9082 24.0002 11.9995 24.0002C8.09082 24.0002 7.62847 23.9866 6.08565 23.9153"
                      fill="url(#paint1_radial_24_194)"
                    />
                    <path
                      d="M9.05336 12.0511C9.05341 11.4632 9.22776 10.8886 9.55438 10.3999C9.88099 9.9112 10.3452 9.5303 10.8883 9.30541C11.4314 9.08051 12.029 9.02172 12.6055 9.13646C13.182 9.2512 13.7115 9.53432 14.1271 9.95002C14.5427 10.3657 14.8257 10.8953 14.9403 11.4719C15.0549 12.0484 14.996 12.646 14.771 13.189C14.5459 13.732 14.1649 14.1962 13.6761 14.5227C13.1873 14.8492 12.6127 15.0234 12.0249 15.0233C11.2367 15.0232 10.4808 14.71 9.92358 14.1526C9.36632 13.5952 9.0533 12.8392 9.05336 12.0511ZM7.44653 12.0511C7.44653 12.9566 7.71505 13.8418 8.21812 14.5947C8.7212 15.3476 9.43624 15.9344 10.2728 16.2809C11.1094 16.6274 12.03 16.7181 12.9181 16.5414C13.8062 16.3648 14.622 15.9287 15.2623 15.2884C15.9026 14.6481 16.3386 13.8324 16.5153 12.9443C16.6919 12.0561 16.6013 11.1356 16.2547 10.299C15.9082 9.46241 15.3214 8.74737 14.5685 8.24429C13.8156 7.74122 12.9304 7.4727 12.0249 7.4727C11.4236 7.47267 10.8283 7.59107 10.2728 7.82115C9.71731 8.05122 9.21258 8.38845 8.78743 8.8136C8.36229 9.23875 8.02505 9.74347 7.79498 10.299C7.56491 10.8544 7.4465 11.4498 7.44653 12.0511ZM15.7145 7.29129C15.7144 7.50289 15.7771 7.70977 15.8946 7.88577C16.0121 8.06176 16.1791 8.19896 16.3746 8.28002C16.57 8.36109 16.7851 8.38237 16.9927 8.34118C17.2002 8.29999 17.3909 8.19817 17.5406 8.04861C17.6903 7.89905 17.7923 7.70847 17.8336 7.50095C17.875 7.29343 17.8539 7.0783 17.773 6.88277C17.6921 6.68724 17.5551 6.52009 17.3792 6.40245C17.2033 6.28482 16.9965 6.22198 16.7849 6.22188C16.5013 6.22201 16.2293 6.3347 16.0287 6.53522C15.8281 6.73573 15.7153 7.00766 15.715 7.29129"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial_24_194"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(1.55318 23.4744) scale(30.4711)"
                    >
                      <stop offset="0.09" stopColor="#FA8F21" />
                      <stop offset="0.78" stopColor="#D82D7E" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_24_194"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(16.624 22.7035) scale(26.8148)"
                    >
                      <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0" />
                      <stop offset="1" stopColor="#8C3AAA" />
                    </radialGradient>
                    <clipPath id="clip0_24_194">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex"
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 5.71001C22.0495 4.27867 21.7365 2.85803 21.09 1.58001C20.6514 1.05561 20.0427 0.701725 19.37 0.580015C16.5875 0.32754 13.7936 0.224059 11 0.270015C8.21667 0.221973 5.43274 0.322115 2.66003 0.570015C2.11185 0.669731 1.60454 0.926857 1.20003 1.31001C0.300027 2.14001 0.200027 3.56001 0.100027 4.76002C-0.045061 6.91758 -0.045061 9.08245 0.100027 11.24C0.128957 11.9154 0.229521 12.5858 0.400027 13.24C0.520602 13.7451 0.76455 14.2124 1.11003 14.6C1.51729 15.0035 2.03641 15.2752 2.60003 15.38C4.75594 15.6461 6.92824 15.7564 9.10003 15.71C12.6 15.76 15.67 15.71 19.3 15.43C19.8775 15.3317 20.4112 15.0596 20.83 14.65C21.11 14.3699 21.3191 14.0271 21.44 13.65C21.7977 12.5526 21.9733 11.4041 21.96 10.25C22 9.69001 22 6.31001 22 5.71001ZM8.74003 10.85V4.66001L14.66 7.77002C13 8.69001 10.81 9.73001 8.74003 10.85Z"
                    fill="#FF0033"
                  />
                </svg>
              </a>

              {/* X/Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="inline-flex"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4067 0H2.59325C1.16108 0 0 1.16108 0 2.59325V21.4067C0 22.8389 1.16108 24 2.59325 24H21.4067C22.8389 24 24 22.8389 24 21.4067V2.59325C24 1.16108 22.8389 0 21.4067 0ZM15.308 20.3525L10.8481 13.8617L5.26435 20.3525H3.82122L10.2073 12.9295L3.82122 3.63521H8.69203L12.9152 9.78152L18.2026 3.63521H19.6458L13.5562 10.7139H13.5558L20.1788 20.3525H15.308Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 text-center text-xs sm:text-sm md:text-base">
          © 2025 All rights reserved to BlueStar Development &amp; Management
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
