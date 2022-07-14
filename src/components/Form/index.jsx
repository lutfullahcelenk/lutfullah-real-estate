import React from "react";

const Form = () => {
  return (
    <form className="w-full max-w-3xl">
      <div className="flex flex-col mb-6 md:flex-row">
        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            First Name
          </label>
          <input
            type="text"
            className="block w-full px-4 py-3 text-gray-700 border border-green-500 rounded-lg outline-none"
            placeholder="Lütfullah"
          />
          <p className="mt-2 text-sm italic text-gray-700">
            Please fill out this field
          </p>
        </div>

        <div className="w-full px-3 md:w-1/2">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            Last Name
          </label>
          <input
            type="text"
            className="block w-full px-4 py-3 text-gray-700 uppercase border border-green-500 rounded-lg outline-none"
            placeholder="ÇELENK"
          />
        </div>
      </div>

      <div className="flex mb-6">
        <div className="w-full px-3">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            Email
          </label>
          <input
            type="email"
            className="block w-full px-4 py-3 text-gray-700 border border-green-500 rounded-lg outline-none"
            placeholder="lutfullahclnk1104@gmail.com"
          />
          <p className="mt-2 text-sm italic text-gray-700">
            Please fill out this field
          </p>
        </div>
      </div>

      <div className="flex mb-6">
        <div className="w-full px-3">
          <label className="block mb-2 text-sm font-bold tracking-wider text-gray-700 uppercase">
            Message
          </label>
          <textarea
            type="text"
            className="block w-full px-4 py-3 text-gray-700 border border-green-500 rounded-lg outline-none appearance-none resize-none h-60"
            placeholder="Write something please..."
          ></textarea>
          <p className="mt-2 text-sm italic text-gray-700">
            Please fill out this field
          </p>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="w-full px-3">
          <button className="px-6 py-3 font-bold text-white bg-green-400 rounded shadow hover:bg-green-700">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
