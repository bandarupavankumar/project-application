import React from "react";
import { Link } from "react-router-dom";

const Carabout = () => {
  return (
    <div className="grid grid-cols-1 mt-6 sm:grid-cols-1 sm:pl-5 sm:pr-5 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 xl:ml-5 xl:mr-5">
      <div className="p-4 bg-gray-100">
        <h2 className=" font-bold text-violet-800 pb-3 xl:text-2xl">
          ASTROLOGER SHIVANAND
        </h2>
        <h1 className=" text-red-900 font-extrabold text-2xl xl:text-3xl ">
          Astrologer Shivanand LET'S TALK ABOUT SHIVANAND ASTROLOGER
        </h1>
        <span className=" flow-root">
          Pandith Shivanand is a New York USA renowned best Indian Psychic,
          Astrologer, and Spiritual Healer. He specialises in a number of areas
          such as chat reading, re-uniting true love, finding out the solutions
          in personal and professional life. He has more experience in his
          field, coming from a family background of Psychics, Astrology and
          Healers.
        </span>
        <br />
        <span>
          A love psychic of international repute, Pandith Shivanand has actually
          been successful in joining concerning 1000 couples globally. Reputed
          personalities, high-profile politicians, and also renowned celebs have
          actually utilized his solutions. Many people have actually contacted
          recognize the projections of Pandith Shivanand. He started the Vedic
          Astrological Facility with the single objective of servicing folks
          facing issues from all corners of their lives. Using his amazing
          user-friendly abilities and the knowledge of Vedic astrology, Pandith
          Shivanand has actually created an alternative method to make
          astounding forecasts. Hundreds of people have actually taken advantage
          of the permanent solutions offered by Pandith Shivanand.
        </span>
        <span>
          Our Astrologer, Pandit Shivanand has made the precise and correct
          predictions for several Businessman, Dentists, Solicitors and Doctors.
          Our Astrologer has followers in more than Twenty countries like India,
          USA, Canada, UK, Australia, Germany, Singapore, Malaysia, Indonesia,
          Philippines, New Zealand, Netherlands, Guyana, Barbados, Jamaica,
          Colombia, Sweden, Switzerland, Norway, France, Nepal, Sri Lanka and
          many more.
        </span>
        <Link to='/contact'
          className=" bg-red-900 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:bg-white hover:scale-110 hover:text-black hover:origin-bottom-right"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          CONTACT US
        </Link>
      </div>
      <div className="p-4 ">
        <div className=" w-full max-w-2xl">
          <img
            src="assets/icons/1a.jpg"
            className=" max-h-xl rounded-lg"
            alt=""
          />
         
        </div>
      </div>
    </div>
  );
};

export default Carabout;
