import React from "react";

const Banner = () => {
  return (
    <div className="mt-10 px-4 md:mt-16">
      <div className="sm:text-center xl:text-left">
        <h1 className="tracking-tight font-extrabold sm:text-4xl md:text-6xl text-5xl ">
          <span className="block">Lutfullah Properties </span>
          <span className="block text-green-500">Non-premium Prices</span>
        </h1>

        <p className="mt-3 text-base text-gray-500 md:text-xl sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto xl:mx-0">
          At Lutfullah properties, we ensure that our clients get the best
          properties at affordable prices. Luxury is our priority and budget is
          our constrain. Pick and choose from 1000+ properties across the globe.
        </p>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div><a className="bg-green-500 text-white px-8 py-3 flex justify-center rounded-md " href="/">View Properties</a></div>
          <div className="mt-3"><a className="bg-green-100 text-green-500 px-8 py-3 flex justify-center rounded-md" href="/">Explore Locations</a></div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
