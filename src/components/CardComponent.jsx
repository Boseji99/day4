import React from "react";

const CardComponent = () => {
  return (
    <div className="w-[21rem] h-[32rem] bg-gradient-to-r from-indigo-600 to-indigo-900 m-10 rounded-2xl">
      <h1 className="text-center text-white text-2xl p-6">Product Listing</h1>

      <img
        className="w-82 mb-3 bg-contain"
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>

      <p className="text-center text-white mb-3 p-2">
        {" "}
        This is a laptop with a 15.6 inch screen and 8GB of RAM{" "}
      </p>

      <div className="flex space-x-10 p-7">
        <button className="rounded-2xl w-32 h-18 bg-green-600 p-5 text-center text-white text-2xl">
          Add
        </button>
        <button className="rounded-2xl w-32 h-18 bg-red-600 p-5 text-center text-white text-2xl">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
