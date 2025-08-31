import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/Footer";
import { projectsData } from "../../Data/projectData";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const ServiceDetail = () => {
  const { category, parentId } = useParams();
  const categoryData = projectsData[category];
  if (!categoryData) return <p>Category not found</p>;

  const project = categoryData.items.find(
    (item) => item.id === parseInt(parentId)
  );
  if (!project) return <p>Project not found</p>;

  // Group images into rows of 2 for desktop
  const imageGroups = chunkArray(project.images, 2);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 pt-[60px] mt-32 max-w-[1156px] mx-auto flex flex-col items-center gap-16 px-4 sm:px-6 lg:px-0">
        {/* Title */}
        <h2 className="font-poppins font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[48px] text-center text-[#212121]">
          {project.title}
        </h2>

        {/* Subtitle / description */}
        {project?.description && (
          <p className="font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[16px] leading-[22px] sm:leading-[24px] lg:leading-[24px] text-[#212121] text-center max-w-[361px] sm:max-w-[600px] lg:max-w-[1156px]">
            {project.description}
          </p>
        )}

        {/* Image Grid */}
        <div className="flex flex-col items-center gap-6 w-full mb-[100px]">
          {imageGroups.map((group, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
            >
              {group.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${rowIdx * 2 + idx + 1}`}
                  className={`w-full sm:w-[566px] lg:w-[566px] h-[271px] sm:h-[425px] lg:h-[425px] object-cover rounded-lg shadow`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ServiceDetail;
