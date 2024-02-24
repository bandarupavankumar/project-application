import React from "react";

const Map = () => {
  const countries = [
    { name: "United States", flag: "https://flagcdn.com/us.svg" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { name: "Albania", flag: "https://flagcdn.com/al.svg" },
    { name: "China", flag: "https://flagcdn.com/cn.svg" },
    { name: "France", flag: "https://flagcdn.com/fr.svg" },
    { name: "French Guiana", flag: "https://flagcdn.com/gf.svg" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "Indonesia", flag: "https://flagcdn.com/id.svg" },
    { name: "Iran", flag: "https://flagcdn.com/ir.svg" },
    { name: "Ireland", flag: "https://flagcdn.com/ie.svg" },
    { name: "Italy", flag: "https://flagcdn.com/it.svg" },
    { name: "Japan", flag: "https://flagcdn.com/jp.svg" },
    { name: "Mexico", flag: "https://flagcdn.com/mx.svg" },
  ];

  return (
    <div className="mx-auto max-w-screen-xl p-10 m-10  ">

      <div className="relative">
        <img src="assets/icons/bghero2.jpg" className=" mt-10 " />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-violet-950">ASTROLOGER SHIVANAND</p>
          <span className="text-red-800 text-2xl font-extrabold">CLIENT'S BASE</span>
          <div className="grid grid-cols-4 gap-4 xl:grid-cols-8">
            {countries.map((country, index) => (
              <div key={index} className="flex flex-col items-center border bg-red-900">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
                <span className="text-white text-center mt-2">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
