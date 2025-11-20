'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../layout/Navbar';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('openContactModal', handleOpenModal);
      return () => {
        window.removeEventListener('openContactModal', handleOpenModal);
      };
    }
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.purpose || !formData.message) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5001'}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          purpose: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
          setIsModalOpen(false);
        }, 2000);
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      <style jsx global>{`
        @media (min-width: 1024px) {
          .hero-content-wrapper {
            width: 876px !important;
            top: 329px !important;
            left: 96px !important;
            gap: 24px !important;
            padding: 0 !important;
          }
        }
      `}</style>
      {/* Background Gradient Image - direct, no modifications */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-gradient.png"
          alt="Hero background"
          fill
          priority
        />
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Frame 1707481559 - Left Column Text Content */}
      <div 
        className="hero-content-wrapper absolute z-10 px-4"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '876px',
          height: 'fit-content',
          top: '180px',
          left: '0',
          gap: '20px',
          margin: 0,
          padding: 0
        }}
      >
          {/* Text: Professional Contract Intelligence for Modern Buyer's Agent */}
          <h1 
            className="text-white text-3xl lg:text-[72px] leading-tight lg:leading-[140%]"
            style={{
              width: '100%',
              maxWidth: '876px',
              height: 'fit-content',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(28px, 5vw, 72px)',
              lineHeight: '140%',
              letterSpacing: '0px',
              color: '#FFFFFF',
              margin: 0,
              padding: 0
            }}
          >
            Professional Contract Intelligence for Modern Buyer's Agent
          </h1>
          
          {/* Text: Powered by AI. Backed by people. */}
          <p 
            className="text-white text-base lg:text-2xl"
            style={{
              width: '100%',
              maxWidth: '405px',
              height: 'fit-content',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(16px, 3vw, 24px)',
              lineHeight: '150%',
              letterSpacing: '0px',
              color: '#E5E5E5',
              textAlign: 'left',
              margin: 0,
              padding: 0
            }}
          >
            Powered by AI. Backed by people.
          </p>
          
          {/* Frame 1707481560 - CTA Buttons Container */}
          <div 
            className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-6"
            style={{
              width: '100%',
              maxWidth: '491px',
              height: 'fit-content'
            }}
          >
            {/* Frame 1707481449 - Get Started Free Button */}
            <div className="w-full lg:w-auto" style={{ width: '100%', maxWidth: '330px', height: 'fit-content' }}>
              {/* Prism Colors - Component */}
              <div 
                className="flex flex-col rounded-2xl w-full lg:w-[330px]"
                style={{ 
                  width: '100%',
                  maxWidth: '330px',
                  height: 'fit-content',
                  borderRadius: '16px',
                  padding: '2px',
                  gap: '10px',
                  background: 'conic-gradient(from 90deg at 50% 50%, #050515 0deg, #050515 100deg, #00ABFF 130deg, #4D00FF 160deg, #B521BA 190deg, #B521BA 230deg, #4D00FF 270deg, #050515 320deg, #050515 360deg)',
                  boxShadow: '0 0 16px rgba(181, 33, 186, 0.5)'
                }}
              >
                {/* Frame "1" - Inside Prism Colors */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center rounded-2xl cursor-pointer w-full"
                  style={{ 
                    width: '100%',
                    height: 'fit-content',
                    borderRadius: '16px',
                    paddingTop: '16px',
                    paddingRight: '32px',
                    paddingBottom: '16px',
                    paddingLeft: '32px',
                    gap: '16px',
                    backgroundColor: '#16062C',
                    backdropFilter: 'blur(30px)',
                    border: 'none',
                    outline: 'none'
                  }}
                >
                  {/* stars-01 - Component */}
                  <div style={{ width: '24px', height: '24px', flexShrink: 0, position: 'relative' }}>
                    {/* Solid - Inside stars-01 */}
                    <svg 
                      width="22" 
                      height="22" 
                      viewBox="0 0 22 22" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: 'absolute',
                        top: '1px',
                        left: '1px'
                      }}
                    >
                      <path d="M11 0L13.5 8.5L22 11L13.5 13.5L11 22L8.5 13.5L0 11L8.5 8.5L11 0Z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  {/* Text "Get Started Free" */}
                  <span 
                    className="text-white whitespace-nowrap"
                    style={{ 
                      width: '130px',
                      height: '24px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0px',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    Get Started Free
                  </span>
                </button>
              </div>
            </div>
            
            {/* Text: See How It Works */}
            <button 
              className="rounded-lg hover:underline transition-all duration-200 w-full lg:w-auto text-center lg:text-left"
              style={{
                width: '100%',
                maxWidth: '137px',
                height: 'fit-content',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '0px',
                color: '#4B024F',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                padding: '12px 0'
              }}
            >
              See How It Works
            </button>
          </div>
      </div>

      {/* Macbook - Desktop version - Hidden on mobile, visible on desktop */}
      <div 
        className="hidden lg:block absolute z-10"
        style={{
          top: '254px',
          left: '940px'
        }}
      >
        <img
          src="/Macbook2 (1).png"
          alt="MacBook mockup"
          className="w-auto h-auto"
        />
      </div>

      {/* Macbook - Mobile version - Visible on mobile, hidden on desktop */}
      <div 
        className="lg:hidden absolute z-10 w-full flex justify-center"
        style={{
          top: '500px',
          left: '0'
        }}
      >
        <img
          src="/Macbook2 (1).png"
          alt="MacBook mockup"
          className="w-[90%] max-w-[400px] h-auto"
        />
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex flex-col items-center justify-center">
                <img 
                  src="https://i0.wp.com/wartinlabs.com/wp-content/uploads/2022/02/WARTIN-LAB-AI-2-2.png?fit=117%2C87&ssl=1" 
                  alt="WartinLabs Logo" 
                  className="h-10 w-auto mb-1"
                />
                <p className="text-gray-400 text-xs font-medium tracking-wide">WARTINLABS</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                <p className="text-gray-500 text-sm">We'd love to hear from you</p>
              </div>

              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-600">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Phone</label>
                    <div className="relative">
                      <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Purpose <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white appearance-none"
                      required
                    >
                      <option value="">Select a purpose</option>
                      <option value="job">Job Application</option>
                      <option value="service">Service Request</option>
                      <option value="quotation">Project Quotation</option>
                      <option value="enquiry">General Enquiry</option>
                      <option value="support">Support Request</option>
                      <option value="demo">Product Demo</option>
                      <option value="partnership">Partnership</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent focus:bg-white resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
