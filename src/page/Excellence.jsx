import React from "react";
import { FaPlane, FaTruck, FaShip, FaBoxes, FaBuilding } from "react-icons/fa";

const Excellence = () => {
  return (
    <section className="bg-[#0A2A5E] text-white py-20 px-6 sm:px-12 lg:px-40">
      
      <div className="flex flex-col md:flex-row gap-12 ">
    
        <div className="flex flex-col justify-start md:w-1/3">
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            Unmatched <br/>Services. <br/>Unmatched  <br/>Excellence.
          </h2>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-8 md:w-2/3 ">
          
          <div className="relative flex-1 p-6 border border-white rounded-lg h-full min-h-[220px]">
            <div className="absolute -top-5 left-6 bg-[#0A2A5E] px-2">
              <FaTruck size={30} className="text-blue-300" />
            </div>
            <h3 className="font-bold text-lg mb-2 mt-4">LAND FREIGHT</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestias voluptatem id labore facilis sint necessitatibus voluptatibus, vero placeat temporibus, sapiente, laboriosam rerum quas atque! Fugit hic atque explicabo vel.
            </p>
          </div>

         
          <div className="relative flex-1 p-6 border border-white rounded-lg  h-full min-h-[220px]">
            <div className="absolute -top-5 left-6 bg-[#0A2A5E] px-2">
              <FaShip size={30} className="text-blue-300" />
            </div>
            <h3 className="font-bold text-lg mb-2 mt-4">SEA FREIGHT</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias maxime repudiandae consectetur rerum, necessitatibus magni? Obcaecati, voluptate modi. Sunt quidem ipsam corrupti natus ad repudiandae praesentium deserunt asperiores cumque?
            </p>
          </div>
        </div>
      </div>

     
      <div className="flex flex-col sm:flex-row gap-8 mt-12 items-stretch">
       
        <div className="relative flex-1 p-6 border border-white rounded-lg  h-full min-h-[220px]">
          <div className="absolute -top-5 left-6 bg-[#0A2A5E] px-2">
            <FaPlane size={30} className="text-blue-300" />
          </div>
          <h3 className="font-bold text-lg mb-2 mt-4">AIR FREIGHT</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo modi inventore ullam enim in ex aperiam quos rerum assumenda! Molestias itaque fuga porro quidem! Magni nobis veritatis alias sequi?
          </p>
        </div>

        
        <div className="relative flex-1 p-6 border border-white rounded-lg h-full min-h-[220px]">
          <div className="absolute -top-5 left-6 bg-[#0A2A5E] px-2">
            <FaBoxes size={30} className="text-blue-300" />
          </div>
          <h3 className="font-bold text-lg mb-2 mt-4">PROJECT CARGO</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur soluta deserunt necessitatibus! Provident maiores sapiente esse soluta harum, similique, eveniet laudantium labore porro veritatis mollitia aut eligendi assumenda fuga nesciunt!
          </p>
        </div>

       
        <div className="relative flex-1 p-6 border border-white rounded-lg  h-full min-h-[220px]">
          <div className="absolute -top-5 left-6 bg-[#0A2A5E] px-2">
            <FaBuilding size={30} className="text-blue-300" />
          </div>
          <h3 className="font-bold text-lg mb-2 mt-4">SHIPPING AGENCY</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore molestiae excepturi, corporis nihil expedita ullam odit officia et, reiciendis beatae enim cumque aspernatur voluptatum qui atque provident, fugiat sapiente quo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
