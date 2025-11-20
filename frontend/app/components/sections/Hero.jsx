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
    <section className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
      <style jsx>{`
        /* Responsive adjustments for different laptop sizes */
        @media (min-width: 1024px) and (max-width: 1280px) {
          /* 11" - 13" laptops */
          .hero-content {
            width: clamp(70%, 75vw, 876px) !important;
          }
          .macbook-image {
            width: clamp(350px, 40vw, 800px) !important;
          }
        }
        @media (min-width: 1281px) and (max-width: 1440px) {
          /* 14" - 15" laptops */
          .hero-content {
            width: clamp(80%, 85vw, 876px) !important;
          }
          .macbook-image {
            width: clamp(450px, 42vw, 950px) !important;
          }
        }
        @media (min-width: 1441px) {
          /* 16" laptops and larger */
          .hero-content {
            width: 876px !important;
          }
          .macbook-image {
            width: clamp(800px, min(45vw, 1087px), 1087px) !important;
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
          className="object-cover"
        />
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Frame 1707481559 - Left Column Text Content */}
      {/* Figma: Width Fixed 876px, Height Hug 447px, Top: 329px, Left: 96px, Gap: 24px */}
      <div 
        className="hero-content relative z-10 flex flex-col px-4 sm:px-6 md:px-8 lg:px-0"
        style={{
          width: 'clamp(85%, min(90vw, 876px), 876px)',
          maxWidth: '876px',
          height: 'fit-content',
          top: 'clamp(140px, 20vh, 329px)',
          left: 'clamp(16px, 4vw, 96px)',
          gap: 'clamp(16px, 1.8vw, 24px)',
          position: 'absolute',
          padding: 0,
          margin: 0
        }}
      >
          {/* Text: Professional Contract Intelligence for Modern Buyer's Agent */}
          {/* Figma: 876px × 303px, Poppins 600, 72px, 140% line-height */}
          <h1 
            className="text-white leading-tight"
            style={{
              width: '100%',
              maxWidth: '876px',
              height: 'fit-content',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(28px, 4.5vw, 72px)',
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
          {/* Figma: 405px × 36px, Poppins 500, 24px, 150% line-height, #E5E5E5 */}
          <p 
            className="text-white"
            style={{
              width: '100%',
              maxWidth: '405px',
              height: 'fit-content',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(16px, 2vw, 24px)',
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
          {/* Figma: Flow Horizontal, Width Hug 491px, Height Hug 60px, Gap: 24px */}
          <div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center"
            style={{
              width: '100%',
              maxWidth: '491px',
              height: 'fit-content',
              gap: 'clamp(16px, 2vw, 24px)'
            }}
          >
            {/* Frame 1707481449 - Get Started Free Button */}
            {/* Figma: Width Hug 330px, Height Hug 60px, Prism Colors, stars-01 (24px), Solid (22px at 1px,1px) */}
            <div className="w-full sm:w-auto" style={{ width: '100%', maxWidth: '330px', height: 'fit-content' }}>
              {/* Prism Colors - Component */}
              <div 
                className="flex flex-col rounded-2xl w-full sm:w-[330px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(181,33,186,0.7)]"
                style={{ 
                  width: '100%',
                  maxWidth: '330px',
                  minWidth: 'clamp(250px, 80%, 280px)',
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
                  className="flex items-center justify-center rounded-2xl cursor-pointer w-full transition-all duration-300 hover:bg-[#1a0a3e] active:scale-95"
                  style={{ 
                    width: '100%',
                    height: 'fit-content',
                    borderRadius: '16px',
                    paddingTop: 'clamp(12px, 1.5vh, 16px)',
                    paddingRight: 'clamp(24px, 3vw, 32px)',
                    paddingBottom: 'clamp(12px, 1.5vh, 16px)',
                    paddingLeft: 'clamp(24px, 3vw, 32px)',
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
            {/* Figma: 137px × 24px, #4B024F, Poppins 500, 16px */}
            <button 
              className="rounded-lg transition-all duration-300 w-full sm:w-auto text-center sm:text-left hover:opacity-80 hover:scale-105 active:scale-95"
              style={{
                width: '100%',
                maxWidth: '137px',
                height: '24px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(14px, 1.4vw, 16px)',
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
                padding: 0,
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              See How It Works
            </button>
          </div>
      </div>

      {/* Macbook - Desktop version - Responsive positioning for all laptop sizes */}
      {/* Figma: Width 1,086.84px, Height 657px, Top 254px, Left 940px */}
      {/* Responsive for: 11", 12", 13", 14", 15", 16" laptops */}
      <div 
        className="macbook-image hidden lg:block absolute z-10"
        style={{
          top: 'clamp(180px, 16vh, 254px)',
          right: 'clamp(20px, 3vw, 96px)',
          width: 'clamp(400px, min(45vw, 1087px), 1087px)',
          maxWidth: '1087px',
          height: 'auto'
        }}
      >
        <img
          src="/Macbook2 (1).png"
          alt="MacBook mockup"
          className="w-full h-auto object-contain"
          style={{
            maxHeight: '657px',
            width: '100%',
            height: 'auto'
          }}
        />
      </div>

      {/* Macbook - Tablet version - Visible on tablet */}
      <div 
        className="hidden md:block lg:hidden absolute z-10 w-full flex justify-center"
        style={{
          top: 'clamp(450px, 50vh, 550px)',
          left: '0'
        }}
      >
        <img
          src="/Macbook2 (1).png"
          alt="MacBook mockup"
          className="w-[70%] max-w-[500px] h-auto"
        />
      </div>

      {/* Macbook - Mobile version - Visible on mobile */}
      <div 
        className="md:hidden absolute z-10 w-full flex justify-center"
        style={{
          top: 'clamp(500px, 60vh, 600px)',
          left: '0'
        }}
      >
        <img
          src="/Macbook2 (1).png"
          alt="MacBook mockup"
          className="w-[85%] max-w-[350px] h-auto"
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
