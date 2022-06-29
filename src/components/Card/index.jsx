import React from "react";

const Card = ({ data }) => {
  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img className="w-full" src={data?.image} alt="place" />

      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{data?.title}</div>
        <p className="text-gray-700">{data?.content}</p>
      </div>

      {data?.price && (
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mr-2 font-bold text-green-300 text-md">
            $ {data?.price.toFixed(3)}
          </span>
        </div>
      )}

      {data?.bedNumber && data?.bathNumber && (
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-3 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            {data?.bedNumber} Beds
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-3 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            {data?.bathNumber} Baths
          </span>
        </div>
      )}

      {data?.price && <div className="px-6 pt-4 pb-10">
        <button className="inline-block px-4 py-1 mr-3 font-bold text-white bg-green-500 rounded-full">
          View Property
        </button>
      </div>}
    </div>
  );
};

export default Card;
