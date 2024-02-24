import React, { useState } from 'react'
import Form from './Form'

const Accordian = () => {
    const faqs = [
        {
          question: 'What serivce does Astrologer Shivanand ji offer?',
          answer: 'Astrologer Shivanand Ji offers a range of astrology and psychic services, including horoscope readings, tarot card readings, palmistry, numerology, crystal readings, aura readings, and chakra balancing. He also provides guidance and advice on various life issues, such as career, relationships, health, and finance.',
        },
        {
          question: 'How accurate are Astrologer Shivanand Ji readings?',
          answer: 'Astrologer Shivanand Ji has a reputation for providing accurate and insightful readings. He has over 20 years of experience in astrology and psychic readings and has helped thousands of clients in USA and around the world. He uses his intuition, knowledge of astrology, and psychic abilities to provide guidance and insight into his clients lives.',
        },
        {
            question: 'How should I expecrt during a reading with Astrologer Shivanand Ji?',
            answer: 'You can book a reading with Astrologer Shivanand Ji by contacting him through his website or phone number. He offers both in-person and online readings, so you can choose the option that works best for you. If youre unsure which type of reading to book, Astrologer Shivanand Ji can help you determine the best approach based on your needs and preferences.',
        },
        {
            question: 'DO I Really Need Astrologery Predictions in My Life?',
            answer: 'Astrology predictions can offer valuable insights into various aspects of your life, helping you make informed decisions and understand your path.',
        },
        {
            question: 'How Much Will Be The Astrologer in New York Consultaion Charges?',
            answer: 'Consultation charges with Shivanand Astrologer in New York may vary depending on the type and duration of the consultation. Its best to contact Shivanand directly for specific pricing details.',
        },
        {
            question: 'Does Anyone Find Shivanand Astrology Serivces Accurate in New York?',
            answer: 'Yes, many individuals in New York have found Shivanands astrology services to be accurate and helpful in their lives.',
        },
        {
            question: 'How To Choose the Best Astrologer in New York?',
            answer: 'To find the best astrologer in New York, consider their expertise, client reviews, and whether their approach aligns with your needs and beliefs.',
        },
        {
            question: 'Who Is a Genuine Astrologer Near Me in New York? ',
            answer: 'Shivanand Astrologer is a reputable and genuine astrologer serving clients in New York.',
        },
       
      ];
      const [openIndex, setOpenIndex] = useState(null);

      const toggleOpen = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };
  return (
    <div className="grid grid-cols-1  sm:grid-cols-1 sm:pl-5 sm:pr-5 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 xl:ml-5 xl:mr-5">
        <div className="p-4 ml-5 ">
            <Form/>
        </div>
        <div className=' p-4'>
        <div className="max-w-2xl mx-auto">
            <div>
                <h1 className=' text-xl text-violet-950 mb-4'>FAQ</h1>
                <h2 className=' text-red-900 font-semibold text-xl'>NEED TO ASK SOME QUESTIONS?</h2>
            </div>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4">
          <button
            className="flex justify-between items-center w-full focus:outline-none"
            onClick={() => toggleOpen(index)}
          >
            <p className="text-lg font-medium">{faq.question}</p>
            <svg
              className={`w-6 h-6 transition-transform transform ${
                openIndex === index ? 'rotate-45' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
        </div>

    </div>
  )
}

export default Accordian