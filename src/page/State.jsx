import React from "react";

const State = () => {
  return (
   <div className="flex flex-col md:flex-row items-center  justify-center gap-8 py-16 px-6 md:px-20 bg-white">
      
     
      <div className="flex-1 flex flex-col gap-10 text-center ">
        
        <div className="flex  sm:flex-row justify-center gap-10">
          <div className="flex  items-center gap-4 ">
            <h3 className="text-4xl font-bold text-gray-900">32</h3>
            <p className="text-gray-600 text-sm mt-1">Countries Covered</p>
          </div>
            <div className="flex  items-center gap-4">
            <h3 className="text-4xl font-bold text-gray-900">2406</h3>
            <p className="text-gray-600 text-sm mt-1">Countries Covered</p>
          </div>
        </div>

     
        <div className="flex  sm:flex-row justify-center  gap-10">
           <div className="flex  items-center gap-4">
            <h3 className="text-4xl font-bold text-gray-900">120</h3>
            <p className="text-gray-600 text-sm mt-1">Countries Covered</p>
          </div>
           <div className="flex  items-center gap-4">
            <h3 className="text-4xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600 text-sm mt-1">Countries Covered</p>
          </div>
        </div>
      </div>

   
      <div className="flex-1 w-full flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/minimal-world-map-isolated-white-background-with-shadow_1017-42608.jpg?semt=ais_hybrid&w=740&q=80"
          alt="World Map"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default State;
