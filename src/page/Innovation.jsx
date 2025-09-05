import React from "react";

const Innovation = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 px-6 sm:px-10 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row gap-12 items-start">

  <div className="flex-1">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 ">
      Freight Company <br />
      With a Difference. <br />
      <span className="text-blue-700">Innovation.</span>
    </h2>
    <p className="mt-6 text-gray-600 text-base lg:text-lg leading-relaxed">
      Crown Group is one of the leader’s groups in the global and
      logistics services as it continues to expand its horizons, by
      providing innovative solutions, supported by bold, resolute and
      decisive action. We are aiming with confidence, to be the best
      global shipping & logistics Provider.
    </p>
    <p className="mt-8 font-semibold text-gray-900">
      ANWAR TAHER
    </p>
    <p className="text-sm text-gray-500">Founder & Director</p>
  </div>

  
  <div className="flex-1 text-center md:text-left">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4oM937hHe9rMkWobp_O0UeV-AzYMiG1mKg&s"
      alt="Container"
      className="rounded-lg shadow w-full object-cover"
    />
    <h3 className="mt-6 text-xl font-semibold text-gray-800">
      WHO WE ARE
    </h3>
    <p className="mt-3 text-sm lg:text-base text-gray-600">
      Crown Group is one of the leader’s groups in the global and
      logistics services as it continues to expand its horizons, by
    </p>
    <div className="mt-4 flex justify-center md:justify-start">
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg">
        →
      </button>
    </div>
  </div>

  <div className="flex-1 text-center md:text-left">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4oM937hHe9rMkWobp_O0UeV-AzYMiG1mKg&s"
      alt="Logistics"
      className="rounded-lg shadow w-full object-cover"
    />
    <h3 className="mt-6 text-xl font-semibold text-gray-800">
      LOGISTICS REDEFINED
    </h3>
    <p className="mt-3 text-sm lg:text-base text-gray-600">
      Crown Group is one of the leader’s groups in the global and
      logistics services as it continues to expand its horizons, by
    </p>
    <div className="mt-4 flex justify-center md:justify-start">
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg">
        →
      </button>
    </div>
  </div>
</div>
    </section>
  );
};

export default Innovation;