import React from "react";

const Cards = () => {
  const gridData = [
    {
      id: 1,
      image: "assets/serivce/1a.jpg",
      title: "PALM READING",
      description:
        "Palm Reading is done by looking into your lines in your Hands which reveals your Future of Life. palm reading is practiced all over the world.",
      buttonText: " Read More",
    },
    {
      id: 2,
      image: "assets/serivce/2a.jpg",
      title: "GET YOUR LOVE BACK",
      description:
        "Astrologer Shivanand Ji is a spiritual healer and astrologer in New York, USA believes in the power of love and recognizes the significance.",
      buttonText: " Read More",
    },
    {
      id: 3,
      image: "assets/serivce/3a.jpg",
      title: "SPECIALIST IN REUNITE LOVERS",
      description:
        "Astrology is a tool that can be used to gain insight into ones personality, strengths, weaknesses, and potential future.",
      buttonText: " Read More",
    },
    {
      id: 4,
      image: "assets/serivce/4a.jpg",
      title: "NEGATIVE ENERGY REMOVAL",
      description:
        "Astrologer Shivanand Ji provides negative energy removal services in New York that are adapted to the individual requirements and circumstances.",
      buttonText: " Read More",
    },
    {
      id: 5,
      image: "assets/serivce/5a.jpg",
      title: "BLACK MAGIC REMOVAL",
      description:
        "Astrologer Shivanand Ji provides black magic removal services in New York, USA that are adapted to each clients individual needs and circumstances.",
      buttonText: " Read More",
    },
    {
      id: 6,
      image: "assets/serivce/6a.jpg",
      title: "FAMILY PROBLEMS",
      description:
        "Astrologer Shivanand Ji provides Family issues and resolution services in New York, USA that are intended to provide insight and direction to people.",
      buttonText: " Read More",
    },
    {
      id: 7,
      image: "assets/serivce/9a.jpg",
      title: "PSYCHIC READINGS",
      description:
        "Astrologer Shivanand Ji provides Psychic Readings and resolution services in New York, USA that are intended to provide insight and direction to people.",
      buttonText: " Read More",
    },
    {
      id: 8,
      image: "assets/serivce/7a.jpg",
      title: "SPIRITUAL - ENERGY HEALING",
      description:
        "Astrologer Shivanand Ji provides Spiritual - Energy Healing and resolution services in New York, USA that are intended to provide insight and direction to people.",
      buttonText: " Read More",
    },
    {
      id: 9,
      image: "assets/serivce/8a.png",
      title: "SPELLS & CURSE REMOVAL",
      description:
        "Astrologer Shivanand Ji provides Psychic Readings and resolution services in New York, USA that are intended to provide insight and direction to people.",
      buttonText: " Read More",
    },
  ];
  return (
    <div>
      <div className=" flex mt-5 justify-between ml-5 mr-5 ">
        <h1 className=" text-red-900 font-extrabold text-xl">
          OUR ASTROLOGY SERVICES
        </h1>
        <a href="/view">
          <button
            className=" bg-red-900 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:bg-white hover:scale-110 hover:text-black hover:origin-bottom-right"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            VIEW ALL SERVICES
          </button>
        </a>
      </div>

      <div className="grid grid-cols-1 m-10 sm:grid-cols-3 sm:grid-rows-3 sm:gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
        {gridData.map((cell) => (
          <div key={cell.id} className="bg-gray-200 aspect-square rounded-lg">
            {cell.image && (
              <>
                <img
                  src={cell.image}
                  className="object-cover rounded-lg"
                  alt=""
                />
                <h2 className="text-red-900 font-extrabold p-2 text-xl text-center">
                  {cell.title}
                </h2>
                <p className="flow-root p-2">{cell.description}</p>
              </>
            )}
            {!cell.image && (
              <>
                <h2 className="text-red-900 font-extrabold p-2 text-xl text-center">
                  {cell.title}
                </h2>
                <p className="flow-root p-2">{cell.description}</p>
              </>
            )}
            {cell.buttonText && (
              <button
                className="bg-red-900 text-white px-4 py-2 rounded-md ml-4  transition-all duration-300 transform hover:bg-white  hover:scale-110 hover:text-black hover:origin-bottom-right"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {cell.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
