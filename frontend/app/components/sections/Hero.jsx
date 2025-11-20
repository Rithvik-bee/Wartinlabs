'use client';

import Image from 'next/image';
import Navbar from '../layout/Navbar';

export default function Hero() {
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
    </section>
  );
}
