import React from "react";
//constants
import { properties } from "../../constants/properties";
//components
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import SiteBanner from "../../components/SiteBanner";

const Home = () => {
  return (
    <>
      <Banner />

      <div className="mt-5 p-10 flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>

      <div className="grid p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((property) => (
          <Card key={property?.id} data={property} />
        ))}
      </div>

      <SiteBanner />

      <div className="mt-5 p-10 flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Locations</h2>
      </div>
    </>
  );
};

export default Home;
