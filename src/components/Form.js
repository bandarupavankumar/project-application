import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Altert from './Alert'
const Form = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [isLoading, setIsLoading] = useState(false);
  // const { alert , showAlert, hideAlert} = useAlert();

  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name ]: e.target.value})

  };
  const handleFocus = (e) => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.EACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "JavaScript Mastery",
        from_email: form.email,
        to_email: "sujata@jsmastery.pro",
        message: form.message,
      },
      import.meta.env.REACT_APP_EMAILJS_PUBLIC_ID
    ).then(()=>{
      setIsLoading(false);
      // showAlert({ show: true , text: 'Message sent successfully!' , type: 'success' });

       setTimeout(()=>{
        // hideAlert();
        setCurrentAnimation('idle');

        setForm({ name: '', email:'', message: ''});
       },[3000])
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error)
      // showAlert({ show: true , text: 'I didnt receive your message' , type: 'danger' });

    })
    
  };
  return (
    <div className="w-1/1 p-2">
    {/* Content for second column */}
    <div className=" border bg-transparent items-center justify-center p-10 bg-yellow-500 w-100% ">
      {alert.show &&  <Altert {...alert}/> }
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className=' mt-5 mb-5'>
          <h1 className=' font-medium text-black mb-4'>QUICK CONTACT</h1>
          <h2 className=' font-semibold text-red-900'>ASK 1 QUESTION FREE!</h2>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
         
            name="name"
            required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            placeholder=" Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            
            name="email"
            placeholder="Email"
            required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            equired
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            placeholder=" Your Meassage..."
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="flex items-center border bg-white p-3">
          <input
            id="robot"
            name="robot"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="robot"
            className="ml-2 block text-sm text-gray-900"
          >
            I'm not a robot
          </label>
          <img src="assets/icons/logo_48.png" className=" h-5 w-5 ml-12"/>
        
        </div>
        <button
          type="submit"
          disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
           { isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  </div>

  )
}

export default Form