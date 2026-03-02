import React, { useState } from 'react';

const Contight = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    orderId: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add submission logic here
  };

  const inputStyles = "w-full border border-gray-300 p-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors";

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-12 bg-white font-sans text-[#333]">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-sm font-bold tracking-wider uppercase mb-1">
          SEND US AN EMAIL
        </h2>
        <div className="h-[1px] bg-gray-200 w-full"></div>
      </div>

      <p className="text-[13px] leading-relaxed text-gray-700 mb-8">
        We will respond to your message within 24-48 hours depending on the amount of emails. Emails 
        received during weekends will be responded on the following business day.
      </p>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Grid Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={inputStyles}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className={inputStyles}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={inputStyles}
            onChange={handleChange}
          />
          <input
            type="text"
            name="orderId"
            placeholder="Order ID"
            className={inputStyles}
            onChange={handleChange}
          />
        </div>

        {/* Textarea */}
        <textarea
          name="message"
          placeholder="Your message"
          rows="6"
          className={`${inputStyles} resize-none`}
          onChange={handleChange}
        ></textarea>

        {/* Consent Section */}
        <div className="pt-2">
          <label className="block text-[13px] font-bold mb-3">
            Consent <span className="text-red-600">*</span>
          </label>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              className="mt-1"
              required
              onChange={handleChange}
            />
            <label htmlFor="consent" className="text-[12px] text-gray-800 font-medium">
              I have read and agree to the website Terms and Conditions.
            </label>
          </div>
        </div>

        {/* CAPTCHA Placeholder */}
        <div className="pt-4">
          <label className="block text-[13px] font-bold mb-2">
            CAPTCHA
          </label>
          <div className="border border-gray-200 bg-[#f9f9f9] w-[300px] h-[74px] flex items-center px-3 shadow-sm">
            <div className="flex items-center flex-1">
              <input type="checkbox" className="w-6 h-6 mr-3 cursor-pointer" />
              <span className="text-sm text-gray-700">I'm not a robot</span>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                alt="reCAPTCHA" 
                className="w-8 h-8 opacity-70"
              />
              <span className="text-[10px] text-gray-400">reCAPTCHA</span>
              <div className="text-[8px] text-gray-400 leading-none">
                <a href="#">Privacy</a> - <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="bg-[#D99B35] hover:bg-[#c48a2e] text-white font-bold py-2 px-10 text-[13px] tracking-wide transition-colors uppercase shadow-sm"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contight;