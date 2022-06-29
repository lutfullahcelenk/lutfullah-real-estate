import React from "react";

const SiteBanner = ({ bannerLocation }) => {
  return (
    <div
      className={`py-20 mt-10 ${
        bannerLocation === "upper" ? "upper-banner h-screen" : "lower-banner"
      }`}
    >
      <div
        className={`container px-6 mx-auto ${
          bannerLocation === "upper"
            ? "mt-40"
            : "my-20 flex flex-col justify-center items-center"
        }`}
      >
        <h2 className="mb-2 text-4xl font-bold text-white">
          {bannerLocation === "upper"
            ? "Experience Luxury Like Never Before with Lutfullah"
            : "Save upto 50% on broker commisons"}
        </h2>
        <h3 className="mb-8 text-2xl text-gray-200">
          {bannerLocation === "upper"
            ? "50+ Exotic locations across the globe."
            : "Lowest brokerage fees"}
        </h3>
        <button
          className={`px-8 py-4 font-bold tracking-wider uppercase border-2 shadow-lg ${
            bannerLocation === "upper"
              ? "text-white"
              : "text-black bg-white rounded-2xl"
          }`}
        >
          {bannerLocation === "upper" ? "Explore Locations" : "Enquire"}
        </button>
      </div>
    </div>
  );
};

export default SiteBanner;
