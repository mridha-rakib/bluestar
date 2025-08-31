import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import FooterSection from "../components/Footer";
import Navbar from "../components/Navbar";

const DropdownService = ({ path }) => {
  const location = useLocation();

  const projects = [
    { id: 1, title: "Project One", image: "/images/commercial1.png", link: `${path}/project/1` },
    { id: 2, title: "Project Two", image: "/images/commercial2.png", link: `${path}/project/2` },
    { id: 3, title: "Project Three", image: "/images/commercial3.png", link: `${path}/project/3` },
    { id: 4, title: "Project Four", image: "/images/commercial4.png", link: `${path}/project/4` },
  ];

  // ✅ Check if user is inside a project details page
  const isDetailsPage = location.pathname.includes(`${path}/project/`);

  return (
    <div>
      <Navbar />

      <div className="mt-[120px] flex justify-center align-middle text-center">
        <div className="flex flex-col items-center text-center justify-center py-12 w-full">
          <h2 className="flex py-[72px] text-gray-950 text-center font-semibold text-[40px]">
            Commercial & Mixed Use
          </h2>

          {/* ✅ If not in details page, show project grid */}
          {!isDetailsPage && (
            <div className="flex flex-col gap-6">
              {[0, 2].map((rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-6">
                  {projects.slice(rowIndex, rowIndex + 2).map((project) => (
                    <Link
                      key={project.id}
                      to={project.link}
                      className="relative w-[566px] h-[424px] flex-shrink-0 group"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-[82px] bg-white hidden group-hover:flex items-center px-8">
                        <h4 className="text-lg font-semibold text-[#212121]">
                          {project.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* ✅ Details page will render here */}
          {isDetailsPage && (
            <div className="w-full px-6">
              <Outlet />
            </div>
          )}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default DropdownService;
