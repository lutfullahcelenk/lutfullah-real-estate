import React from "react";
import avatar from "../../assets/avatar.png";

const ClientCard = ({ data: { title, name, content, image } }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <p className="text-gray-600 h-1/2">
        <span className="text-lg font-bold text-green-500">"</span>
        {content}
        <span className="text-lg font-bold text-green-500">"</span>
      </p>

      <div className="flex items-center mt-6 bg-green-100 rounded-full">
        <a href="/" className="relative block">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="flex flex-col justify-around ml-3">
          <span className="text-base font-semibold text-green-500">
            {title}
          </span>
          <span className="text-sm"> {name} </span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
