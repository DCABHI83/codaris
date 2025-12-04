import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Contact = () => {
  const [step, setStep] = useState('calendar');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleBack = () => {
    setStep('calendar');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className='py-16 px-4 bg-linear-to-br from-gray-50 via-white to-gray-100 min-h-screen'>
        {/* Header Section */}
        <div className='flex flex-col items-center gap-2 mb-16'>
          <h3 className='text-gray-400 font-mono text-sm uppercase tracking-wider'>Contact Me</h3>
          <h1 className='text-5xl md:text-6xl font-inter font-bold text-center'>"Creativity is</h1>
          <h1 className='text-5xl md:text-6xl font-inter font-bold text-center'>Intelligence Having Fun."</h1>
        </div>

        {/* Calendar/Form Section */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <div className="p-8 md:p-12">
            {step === 'calendar' ? (
              <CalendarView 
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
                onTimeSelect={handleTimeSelect}
              />
            ) : (
              <BookingForm 
                formData={formData}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onChange={handleInputChange}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </div>

      {/* Custom Calendar Styles */}
      <style jsx global>{`
        .react-calendar {
          background: transparent !important;
          border: none !important;
          width: 100% !important;
          font-family: inherit !important;
        }
        
        .react-calendar__navigation {
          margin-bottom: 1.5rem !important;
          display: flex !important;
          gap: 0.5rem !important;
        }
        
        .react-calendar__navigation button {
          color: #1f2937 !important;
          font-size: 1.1rem !important;
          font-weight: 600 !important;
          background: #f9fafb !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 0.5rem !important;
          padding: 0.75rem 1rem !important;
          min-width: 44px !important;
        }
        
        .react-calendar__navigation button:hover {
          background: #f3f4f6 !important;
          border-color: #d1d5db !important;
        }
        
        .react-calendar__navigation button:disabled {
          background: #f9fafb !important;
          opacity: 0.5 !important;
        }
        
        .react-calendar__month-view__weekdays {
          color: #6b7280 !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          font-size: 0.75rem !important;
          padding-bottom: 0.5rem !important;
        }
        
        .react-calendar__month-view__weekdays__weekday {
          padding: 0.5rem !important;
        }
        
        .react-calendar__tile {
          color: #1f2937 !important;
          background: transparent !important;
          border-radius: 0.5rem !important;
          padding: 1rem !important;
          font-weight: 500 !important;
          transition: all 0.2s !important;
          border: 1px solid transparent !important;
        }
        
        .react-calendar__tile:hover {
          background: #f9fafb !important;
          border-color: #e5e7eb !important;
        }
        
        .react-calendar__tile--active {
          background: #000000 !important;
          color: white !important;
          border-color: #000000 !important;
        }
        
        .react-calendar__tile--active:hover {
          background: #1f2937 !important;
        }
        
        .react-calendar__tile--now {
          background: #eff6ff !important;
          color: #1e40af !important;
        }
        
        .react-calendar__month-view__days__day--neighboringMonth {
          color: #d1d5db !important;
        }
      `}</style>
    </>
  )
}

const CalendarView = ({ selectedDate, onDateChange, onTimeSelect }) => {
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Calendar Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Pick a date</h2>
        <Calendar
          onChange={onDateChange}
          value={selectedDate}
          minDate={new Date()}
          className="rounded-xl"
        />
      </div>

      {/* Time Slots Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Pick a time</h2>
        <p className="text-gray-600 mb-6">
          {selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => onTimeSelect(time)}
              className="w-full py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-xl text-left transition-all border border-gray-200 hover:border-gray-300 font-medium hover:shadow-sm"
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const BookingForm = ({ formData, selectedDate, selectedTime, onChange, onBack }) => {
  return (
    <form 
      action="https://formspree.io/f/mkgdzjjg" 
      method="POST"
      className="max-w-xl mx-auto"
    >
      <div className="mb-8">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2 className="text-3xl font-bold mb-3">Enter your details</h2>
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-600">
            {selectedDate?.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
          <p className="font-medium text-lg">{selectedTime}</p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Hidden fields */}
        <input type="hidden" name="date" value={selectedDate?.toLocaleDateString()} />
        <input type="hidden" name="time" value={selectedTime} />

        {/* Name field */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        {/* Email field */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone field */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            placeholder="+91 12345 67890"
          />
        </div>

        {/* Message field */}
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={onChange}
            rows={4}
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none transition-all"
            placeholder="Tell me about your project..."
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-black text-white rounded-xl py-4 font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
};

export default Contact
