import React, { useState } from 'react';
import ConfirmationPopup from '../../components/ConfirmationPopup';
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    horse: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const viewDetail = () => {
    console.log('Viewing details');
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white font-barlow">
        <form onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-3xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-3xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-3xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-3xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-3xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="horse" className="mb-3 block text-base font-medium font-barlow text-[#07074D]">
                  Select Horse
                </label>
                <select
                  name="horse"
                  id="horse"
                  className="w-full rounded-3xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md hover:bg-[#f0f0f0] transition ease-in-out duration-200"
                  value={formData.horse}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a horse</option>
                  <option value="Arabian horse">Arabian horse</option>
                  <option value="Friesian horse">Friesian horse</option>
                  <option value="Mustang">Mustang</option>
                  <option value="Shire horse">Shire horse</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-3xl w-2/5 hover:shadow-form bg-[#000000] py-3 px-8 text-center text-base font-thin text-white outline-none"
            >
              Book Appointment
            </button>
          </div>
        </form>
        {showPopup && (
          <ConfirmationPopup
            name={formData.name}
            horse={formData.horse}
            date={formData.date}
            time={formData.time}
            onClose={closePopup}
            onViewDetail={viewDetail}
          />
        )}
      </div>
    </div>
  );
};

export default BookingForm;
