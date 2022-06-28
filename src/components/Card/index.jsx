import React from "react";

const Card = ({ card }) => {
    console.log('card', card)
  return (
    <div className="m-3 rounded shadow-lg">
      <img className="w-full" src={card?.image} alt="place" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card?.title}</div>
        <p className="text-gray-700">{card?.content}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block text-green-300 font-bold text-md px-3 py-1 mr-2 mb-2">$ {card?.price.toFixed(3)}</span>
      </div>

      <div className="">
        <span>7 {card?.bedNumber}</span>
        <span>9 {card?.bathNumber}</span>
      </div>

      <div>
        <button>View Property</button>
      </div>
    </div>
  );
};

export default Card;
