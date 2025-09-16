'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    country: 'USA (+1)'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[1233px] max-w-full">
        <div className="grid grid-cols-2">
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-10 flex items-center">
            <h2 className="text-3xl font-bold">AI & ML Development Company</h2>
          </div>
          <div className="p-10">
            <h3 className="text-xl font-semibold text-center mb-6">Let's Build your Success Together!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" className="w-full p-3 border rounded" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Business Email*" className="w-full p-3 border rounded" required />
              <div className="flex space-x-2">
                <select name="country" value={formData.country} onChange={handleChange} className="p-3 border rounded w-1/3">
                  <option>USA (+1)</option>
                </select>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number*" className="w-2/3 p-3 border rounded" required />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded font-semibold">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="bg-gray-100 p-5 flex justify-center space-x-4">
          <img src="/logo1.png" alt="logo1" className="h-12" />
          <img src="/logo2.png" alt="logo2" className="h-12" />
          <img src="/logo3.png" alt="logo3" className="h-12" />
          <img src="/logo4.png" alt="logo4" className="h-12" />
          <img src="/logo5.png" alt="logo5" className="h-12" />
          <img src="/logo6.png" alt="logo6" className="h-12" />
        </div>
      </div>
    </div>
  );
}
