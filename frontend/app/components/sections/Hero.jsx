'use client';

import Image from 'next/image';
import Navbar from '../layout/Navbar';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
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
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Frame 1707481559 - Left Column Text Content */}
      {/* Figma: Flow Vertical, Width Fixed 876px, Height Hug 447px, Top 329px, Left 96px, Gap 24px */}
      <div 
        className="absolute z-10"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '876px',
          height: 'fit-content',
          top: '329px',
          left: '96px',
          gap: '24px',
          margin: 0,
          padding: 0
        }}
      >
            {/* Text: Professional Contract Intelligence for Modern Buyer's Agent */}
            {/* Figma: Width 876px, Height 303px, Font Poppins, Weight 600, Size 72px, Line height 140%, Letter spacing 0px, Color #FFFFFF */}
            <h1 
              className="text-white"
              style={{
                width: '876px',
                height: '303px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '72px',
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
            {/* Figma: Width 405px, Height 36px, Font Poppins, Weight 500, Size 24px, Line height 150%, Letter spacing 0px, Color #E5E5E5 */}
            <p 
              className="text-white"
              style={{
                width: '405px',
                height: '36px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '24px',
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
            {/* Figma: Flow Horizontal, Width Hug 491px, Height Hug 60px, Gap 24px */}
            <div 
              className="flex flex-row items-center"
              style={{
                width: 'fit-content',
                height: 'fit-content',
                gap: '24px'
              }}
            >
              {/* Frame 1707481449 - Get Started Free Button */}
              {/* Figma: Width Hug 330px, Height Hug 60px */}
              <div style={{ width: 'fit-content', height: 'fit-content' }}>
                {/* Prism Colors - Component */}
                {/* Figma: Flow Vertical, Width Fixed 330px, Height Hug 60px, Radius 16px, Padding 2px, Gap 10px, Angular Gradient */}
                <div 
                  className="flex flex-col rounded-2xl"
                  style={{ 
                    width: '330px',
                    height: 'fit-content',
                    borderRadius: '16px',
                    padding: '2px',
                    gap: '10px',
                    background: 'conic-gradient(from 90deg at 50% 50%, #050515 0deg, #050515 100deg, #00ABFF 130deg, #4D00FF 160deg, #B521BA 190deg, #B521BA 230deg, #4D00FF 270deg, #050515 320deg, #050515 360deg)',
                    boxShadow: '0 0 16px rgba(181, 33, 186, 0.5)'
                  }}
                >
                  {/* Frame "1" - Inside Prism Colors */}
                  {/* Figma: Flow Horizontal, Width Fill 326px, Height Hug 56px, Radius 16px, Padding Top 16px Right 32px Bottom 16px Left 32px, Gap 16px, Background #16062C, Background blur 30 */}
                  <button 
                    className="flex items-center justify-center rounded-2xl cursor-pointer"
                    style={{ 
                      width: '326px',
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
                    {/* Figma: Width 24px, Height 24px */}
                    <div style={{ width: '24px', height: '24px', flexShrink: 0, position: 'relative' }}>
                      {/* Solid - Inside stars-01 */}
                      {/* Figma: Width 22px, Height 22px, Top 1px, Left 1px, Color #FFFFFF */}
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
                    {/* Text "Get Started Free" - Inside Frame "1" */}
                    {/* Figma: Width 130px, Height 24px, Font Poppins, Weight 500, Size 16px, Line height 150%, Letter spacing 0px, Color #FFFFFF, Center aligned */}
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
              {/* Figma: Width 137px, Height 24px, Font Poppins, Weight 500, Size 16px, Line height 150%, Letter spacing 0px, Color #4B024F, Horizontal alignment Center */}
              <button 
                className="rounded-lg hover:underline transition-all duration-200"
                style={{
                  width: '137px',
                  height: '24px',
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
                  padding: 0
                }}
              >
                See How It Works
              </button>
            </div>
      </div>

      {/* Macbook - Container */}
      {/* Figma: Macbook, Hero image, and Macbook2 are all same size */}
      {/* Macbook2: Width 1,086.84px, Height 657px, Top 254px, Left 940px */}
      <div 
        className="absolute z-10"
        style={{
          top: '254px',
          left: '940px'
        }}
      >
        <img
          src="/Macbook2 (1).png"
          alt="MacBook mockup"
        />
      </div>
    </section>
  );
}

