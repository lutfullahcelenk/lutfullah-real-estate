import React from "react";

const Banner = () => {
  return (
    <div className="px-4 mt-10 md:mt-16">
      <div className="sm:text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-4xl md:text-6xl ">
          <span className="block">Lutfullah Properties </span>
          <span className="block text-green-500">Non-premium Prices</span>
        </h1>

        <p className="mt-3 text-base text-gray-500 md:text-xl sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto">
          At Lutfullah properties, we ensure that our clients get the best
          properties at affordable prices. Luxury is our priority and budget is
          our constrain. Pick and choose from 1000+ properties across the globe.
        </p>

        <div className="justify-center mt-5 sm:mt-8 sm:flex">
          <div className="my-3 sm:m-2">
            <a
              className="flex justify-center px-8 py-3 font-semibold text-white bg-green-500 rounded-md "
              href="#properties"
            >
              View Properties
            </a>
          </div>
          <div className="my-3 sm:m-2">
            <a
              className="flex justify-center px-8 py-3 font-semibold text-green-500 bg-green-100 rounded-md"
              href="#locations"
            >
              Explore Locations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
