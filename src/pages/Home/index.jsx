import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { cards } from "../../constants/cards";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mt-5 p-10 flex justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Recent Properties</h2>
      </div>
      <div className="grid p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card?.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default Home;
