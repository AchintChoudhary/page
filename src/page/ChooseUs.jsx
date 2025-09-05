import React from "react";

const ChooseUs = () => {
  return (
    <>
      <section className="w-full bg-white py-16 px-6 md:px-16">
         <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Why Choose Us?
      </h2>

      <div className="flex justify-center items-center gap-18 text-sm font-medium text-gray-500">
        
        <label className="flex flex-col items-center cursor-pointer text-blue-700">
          <span>In-Depth Knowledge</span>
          <input
            type="radio"
            name="why"
            className="mt-2 w-4 h-4 accent-blue-600"
          />
        </label>

        
        <label className="flex flex-col items-center cursor-pointer text-blue-700">
          <span className=" font-semibold">
            Excellence & Leadership
          </span>
          <input
            type="radio"
            name="why"
            className="mt-2 w-4 h-4 accent-blue-600"
            defaultChecked
          />
        </label>

       
        <label className="flex flex-col items-center cursor-pointer text-blue-700">
          <span>Competitive Pricing</span>
          <input
            type="radio"
            name="why"
            className="mt-2 w-4 h-4 accent-blue-600"
          />
        </label>
      </div>
    </div>

        
        <div className="flex flex-col md:flex-row items-center gap-8 px-10 ">
  
  <div className="w-full max-w-md mx-auto md:mx-0">
   <img
      src="https://varthana.com/school/wp-content/uploads/2023/03/B223.jpg"
      alt="Team meeting"
      className=" rounded-2xl shadow-lg w-full"
    />
  </div>


  <div>
    <p className="text-gray-600 leading-relaxed mb-6">
      Ocean Crown Shipping Services LLC is positioned in Dubai, the United
      Arab Emirates which has specialized in international Freight
      Forwarding business backed by professionals who have decades of
      global experience in the shipping industry. Expertise in
      international freight forwarding by sea, air, and land.
    </p>
    <p className="text-gray-600 leading-relaxed">
      Where the headquarter Crown Logistics is located in (Amman & Aqaba),
      Jordan. And the other branches located respectively in (Basra),
      Iraq, (Antwerp), Belgium.
    </p>
  </div>
</div>

      </section>
    </>
  );
};

export default ChooseUs;
