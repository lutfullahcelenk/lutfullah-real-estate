import React from "react";

const Card = ({ data }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={data?.image} alt="place" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data?.title}</div>
        <p className="text-gray-700">{data?.content}</p>
      </div>

      {data?.price && (
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block text-green-300 font-bold text-md px-3 py-1 mr-2">
            $ {data?.price.toFixed(3)}
          </span>
        </div>
      )}

      {data?.bedNumber && data?.bathNumber && (
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            {data?.bedNumber} Beds
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2">
            {data?.bathNumber} Baths
          </span>
        </div>
      )}

      {data?.price && <div className="px-6 pt-4 pb-10">
        <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white mr-3">
          View Property
        </button>
      </div>}
    </div>
  );
};

export default Card;
