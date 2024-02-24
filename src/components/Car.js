import React from "react";

const Car = () => {
  const readings = [
    { title: "PALM & HOROSCOPE READING", value: 96 },
    { title: "LOVE PROBLEM SOLUTION", value: 98 },
    { title: "BLACK MAGIC REMOVAL", value: 96 },
    { title: "LIFETIME PROTECTION", value: 99 },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 sm:pl-5 sm:pr-5 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 xl:ml-5 xl:mr-5">
      <div className="p-4 bg-gray-100">
        <h2 className=" font-bold text-violet-800 pb-3 xl:text-2xl">
          ASTROLOGER SHIVANAND JI
        </h2>
        <h1 className=" text-red-900 font-extrabold text-2xl xl:text-3xl ">
          BEST ASTROLOGER & REAL PSYCHIC IN NEW YORK USA
        </h1>
        <p className=" mb-4 font-serif text-black xl:text-2xl">
          KNOW YOUR PAST, PRESENT & FUTURE
        </p>
        <span className=" flow-root">
          Shivanand Astrologer, a distinguished astrologer from India, has
          established himself as a prominent and contemporary figure in the
          field of astrology. With his vast knowledge, remarkable
          qualifications, and tech-savvy disposition, he has garnered global
          acclaim and is rapidly gaining popularity as a sought-after Astrologer
          in New York. What sets Shivanand apart is his open-mindedness and
          logical thinking, which enable him to seamlessly integrate astrology
          and numerology, offering pragmatic solutions to his clients.
        </span>
        <br />
        <span>
          Shivanand s journey into the realm of astrology began with a sincere
          dedication to extensive research and meticulous analysis. He delved
          deep into the intricate workings of astrology, immersing himself in
          the study of countless horoscopes. Through his unwavering commitment,
          an Best Indian Astrologer in New York, Shivanand uncovered the true
          value and power of astrology, solidifying his resolve to pursue it as
          a full-time profession. His thorough understanding of the subject
          matter is a testament to his expertise and contributes to the accuracy
          of his predictions. In a realm plagued by fraudulent practices and
          baseless superstitions, Shivanand Astrologers ethical approach shines
          brightly. He stands as a symbol of integrity and honesty, refusing to
          deceive his clients with false promises or exploit their vulnerability
          for personal gain. Shivanand firmly believes in offering practical
          guidance, steering clear of outlandish remedies and focusing on
          providing genuine solutions to lifes challenges. This principled
          approach has earned him the trust and respect of countless
          individuals, both nationally and internationally.
        </span>
        <span>
          Shivanand has the ability to connect deeply with his clients, relating
          their experiences to astrological principles and offering insights
          that resonate on a profound level.
        </span>
        <div className="mt-3 pb-5">
          {readings.map((reading, index) => (
            <div key={index} className="p-4 bg-gray-200">
              <h3 className="text-black">{reading.title}</h3>
              <input
                type="range"
                value={reading.value}
                className="appearance-none w-full mt-2"
                style={{
                  background: `linear-gradient(to right, red 0%, red ${
                    (reading.value / 100) * 100
                  }%, #ccc ${(reading.value / 100) * 100}%, #ccc 100%)`,
                  height: "4px",
                  borderRadius: "2px",
                }}
              />
            </div>
          ))}
        </div>
        <button
          className=" bg-red-900 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:bg-white hover:scale-110 hover:text-black hover:origin-bottom-right"
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          KNOW MORE
        </button>
      </div>
      <div className="p-4 ">
        <div className=" w-full max-w-2xl">
            <img src="assets/Home/hero.jpg" className=" max-h-xl rounded-lg" alt="" />
            <h1 className=" mt-5 pb-3 text-red-900 font-extrabold text-2xl xl:text-3xl " >SOLVE ALL YOUR PROBLEM WITH IN FEW TIME</h1>
            <span className=" flow-root">
            As a trusted name in the field, Shivanand the Astrologer Near Me has become a guiding light for those navigating life s uncertainties. His global recognition and growing popularity in New York are a testament to his unwavering commitment to excellence and his genuine desire to help others. With his unique blend of ancient wisdom and modern sensibilities, Shivanand continues to transform lives by providing practical solutions through astrology. Through his ethical practices and accurate predictions, he paves the way for a new era of astrology, were authenticity and wisdom reign supreme.
            </span>
            <br />
            <span className=" ">
            Shivanand s rise to prominence can be attributed to his unwavering dedication to his craft and his unwavering commitment to authenticity. He has gained a reputation for his accurate predictions, drawing clients from all walks of life who seek clarity and guidance. With a strong emphasis on logical thinking and a comprehensive understanding of human nature.
            </span>
        </div>
      </div>
    </div>
  );
};

export default Car;
