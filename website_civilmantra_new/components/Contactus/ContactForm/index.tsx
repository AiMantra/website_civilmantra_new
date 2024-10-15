'use client'

import React, { useState } from 'react';
import { API, MEDIA_URL } from '../../../src/axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ContactForm = () => {

    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(true);
      
      setTimeout(() => {
        setIsClicked(false);
      }, 200); 
    };

  const callicon = MEDIA_URL + '/Contact/Call.svg';
  const emailicon = MEDIA_URL + '/Contact/email.svg';
  const locationicon = MEDIA_URL + '/Contact/location.svg';

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
    form_type: "contact us"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await API.post(`/website/contactform/`, formData);

      if (response.status === 200) {
        toast.success("Thank you! We'll get back to you soon.", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });

        setFormData({
          name: '',
          mobile: '',
          email: '',
          message: '',
          form_type: 'contact us'
        });
      } else {
        toast.error("Failed to send. Check your connection and retry.", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Error! Unable to send. Try again later.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="relative sm:top-0">
     
      <div className=" max-sm:hidden absolute top-0 left-0 w-full h-full bg-white opacity-60"></div>
      <div className="max-sm:flex-col flex max-[1024px]:justify-around justify-center items-start max-[1024px]:gap-10 max-[1024px]:px-4 gap-28 max-sm:gap-6 max-sm:px-4 max-sm:py-0 px-10 max-sm:mt-0 pb-20 poppins relative z-10">
        <ToastContainer
          newestOnTop
          draggable
          rtl={false}
          theme="light"
          autoClose={1500}
          position="top-center"
          pauseOnFocusLoss={false}
        />
        
        <div className="max-[1024px]:w-[45%] max-sm:w-full max-sm:px-4 p-8 px-12 rounded-lg shadow-[0_0_45px_1px_rgba(0,0,0,0.1)] w-[36vw] bg-white bg-opacity-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block darkgray text-sm font-semibold mb-2">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#F7F8FA] font-normal mt-1 p-3 border rounded-lg"
                />
              </label>
            </div>
            <div>
              <label className="block darkgray text-sm font-semibold mb-2">
                Mobile
                <input
                  type="text"
                  name="mobile"
                  required
                  placeholder="Contact No."
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-[#F7F8FA] font-normal mt-1 p-3 border rounded-lg"
                />
              </label>
            </div>
            <div>
              <label className="block darkgray text-sm font-semibold mb-2">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Contact Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#F7F8FA] font-normal mt-1 p-3 border rounded-lg"
                />
              </label>
            </div>
            <div>
              <label className="block darkgray text-sm font-semibold mb-2">
                Message
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#F7F8FA] max-[1024px]:min-h-[13vw] min-h-[15vh] resize-y outline-none font-normal mt-1 p-3 border rounded-lg"
                />
              </label>
            </div>
            <div className='flex justify-center'>
      <button
        type="submit"
        onClick={handleClick}
        className={`bg-secondary hover:bg-primary text-white py-3 px-12 rounded-lg transition-transform duration-300 ${isClicked ? 'scale-105 shadow-lg y' : ''}`}
      >
        Send Message
      </button>
    </div>

          </form>
        </div>

        <div className="max-[1024px]:w-[40vw] max-sm:w-full bg-white px-8 max-sm:px-2 w-[35vw] rounded-lg ">
          <h2 className="max-sm:hidden blue text-4xl font-semibold mb-4 text-primary">Connect with us</h2>
          <p className="max-sm:hidden darkgray mb-6 w-[26vw]">For any kind of query, contact us with the details below.</p>
          <div className="max-[1024px]:w-full max-sm:w-full w-[20vw] my-6 flex gap-2 items-start">
            <img src={callicon} alt="Call" className='w-12' />
            <div>
              
              <p className="darkgray block blue text-lg cursor-pointer">+91 8120444777</p>
            </div>
          </div>
          <div className="max-[1024px]:w-full max-sm:w-full w-[20vw] mb-8 flex gap-2 items-start">
            <img src={emailicon} alt="Email" className='w-12' />
            <div>
              <p className="darkgray block blue text-lg cursor-pointer">services@civilmantra.com, hr@civilmantra.com</p>
            </div>
          </div>
          <div className="max-[1024px]:w-full max-sm:w-full w-[20vw] mb-8 flex gap-2 items-start">
            <img src={locationicon} alt="Location" className='w-12' />
            <div>
              
              <p className="darkgray block blue text-lg cursor-pointer">3rd Floor, Tower 3A, Dlf Corporate Greens, Sector 74A, Gurugram- 122004, India.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
