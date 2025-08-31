import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/Footer";
import { projectsData } from "../../Data/projectData";

const ServiceCategory = () => {
  const { category } = useParams();
  const categoryData = projectsData[category];

  if (!categoryData) return <p>Category not found</p>;

  return (
    <div className="mt-[120px]">
      <Navbar />
      <div className="max-w-6xl mx-auto text-center py-12">
        <h2 className="text-3xl font-semibold mb-8">{categoryData.title}</h2>

        <div className="grid grid-cols-1 px-[15px] lg:px-0 md:grid-cols-2 gap-6">
          {categoryData.items.map((item) => {
            const hasGallery =
              Array.isArray(item.images) && item.images.length > 0;
            const key = item.id ?? item.title; // fallback key

            const Card = (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute bottom-0 w-full bg-white/90 p-4 hidden group-hover:block">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </>
            );

            return hasGallery && item.id ? (
              <Link
                key={key}
                to={`/service/${category}/${item.id}`}
                className="relative w-full h-[300px] group"
              >
                {Card}
              </Link>
            ) : (
              <div
                key={key}
                className="relative w-full h-[300px] group cursor-default"
              >
                {Card}
              </div>
            );
          })}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ServiceCategory;
