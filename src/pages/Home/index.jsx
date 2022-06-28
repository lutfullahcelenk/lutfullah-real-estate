import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mt-5 p-10 flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>
      <div className="">
        <Card />
      </div>
    </>
  );
};

export default Home;
