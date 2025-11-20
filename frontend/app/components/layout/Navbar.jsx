'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      if (typeof window !== 'undefined') {
        const userData = localStorage.getItem('user');
        if (userData) {
          try {
            setUser(JSON.parse(userData));
          } catch (error) {
            console.error('Error parsing user data:', error);
            setUser(null);
          }
        } else {
          setUser(null);
        }
      }
    };

    loadUser();

    const handleStorageChange = () => {
      loadUser();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userLogin', handleStorageChange);
    window.addEventListener('userLogout', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userLogin', handleStorageChange);
      window.removeEventListener('userLogout', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.dispatchEvent(new Event('userLogout'));
    router.push('/');
  };

  return (
    <nav className="relative z-50">
      {/* Frame 1707481561 - Full Navbar Container */}
      {/* Figma: Width Fixed 1853px, Height Hug 105px, Top 48px, Left 48px, Padding Left 48px, Justify space-between */}
      {/* NO BACKGROUND - transparent, only dimensions and spacing */}
      <div 
        className="h-[80px] lg:h-[105px] flex items-center justify-between w-full max-w-[1853px] px-4 lg:px-0"
        style={{ 
          marginTop: '16px',
          marginLeft: '0px',
          paddingLeft: '0px'
        }}
      >
        {/* Frame 1707481525 - Left Side */}
        {/* Figma: Width Fixed 876px, Height Hug 105px, Radius 16px, Gap 32px */}
        <div className="w-auto lg:w-[876px] h-[80px] lg:h-[105px] flex items-center gap-2 lg:gap-8 rounded-2xl flex-1 lg:flex-none">
          {/* Frame 1707481558 - Parent, Child of 1707481525 */}
          {/* Figma: Width Hug 153px, Height Hug 18px, Gap 16px, Flow Horizontal */}
          <div className="hidden lg:flex items-center gap-4" style={{ width: 'fit-content', height: 'fit-content' }}>
            {/* Frame 1707481557 - Child of 1707481558 */}
            {/* Figma: Width Fixed 153px, Height Hug 18px, Flow Vertical */}
            <div className="flex flex-col" style={{ width: '153px', height: 'fit-content' }}>
            </div>
          </div>
          {/* Frame 1707481349 - Pricing */}
          {/* Figma: Width Hug 135px, Height Fixed 105px, Radius 16px, Padding Left 32px Right 32px, Gap 10px, Flow Horizontal */}
          <div 
            className="hidden lg:flex h-[105px] items-center rounded-2xl"
            style={{ 
              width: 'fit-content',
              paddingLeft: '32px',
              paddingRight: '32px',
              gap: '10px'
            }}
          >
            {/* Text Pricing - Width 71px, Height 30px */}
            {/* Figma: Font Poppins, Weight 600, Size 20px, Line height 150%, Letter spacing 0px, Color #FFFFFF */}
            <a 
              href="#pricing" 
              className="text-white font-semibold text-xl leading-[150%]" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0px',
                color: '#FFFFFF'
              }}
            >
              Pricing
            </a>
          </div>
          {/* Frame 1707481345 - How it works */}
          {/* Figma: Width Hug 192px, Height Fixed 105px, Radius 16px, Padding Left 32px Right 32px, Gap 10px, Flow Horizontal */}
          <div 
            className="hidden lg:flex h-[105px] items-center rounded-2xl"
            style={{ 
              width: 'fit-content',
              paddingLeft: '32px',
              paddingRight: '32px',
              gap: '10px'
            }}
          >
            {/* Text How it works - Width 128px, Height 30px */}
            {/* Figma: Font Poppins, Weight 600, Size 20px, Line height 150%, Letter spacing 0px, Color #FFFFFF */}
            <a 
              href="#how-it-works" 
              className="text-white font-semibold text-xl leading-[150%]" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0px',
                color: '#FFFFFF'
              }}
            >
              How it works
            </a>
          </div>
          {/* Frame 1707481347 - About */}
          {/* Figma: Width Hug 126px, Height Fixed 105px, Radius 16px, Padding Left 32px Right 32px, Gap 10px, Flow Horizontal */}
          <div 
            className="hidden lg:flex h-[105px] items-center rounded-2xl"
            style={{ 
              width: 'fit-content',
              paddingLeft: '32px',
              paddingRight: '32px',
              gap: '10px'
            }}
          >
            {/* Text About - Width 62px, Height 30px */}
            {/* Figma: Font Poppins, Weight 600, Size 20px, Line height 150%, Letter spacing 0px, Color #FFFFFF */}
            <a 
              href="#about" 
              className="text-white font-semibold text-xl leading-[150%]" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '150%',
                letterSpacing: '0px',
                color: '#FFFFFF'
              }}
            >
              About
            </a>
          </div>
        </div>

        {/* Frame 1707481528 - Right Side */}
        {/* Figma: Width Hug 481px, Height Hug 105px, Radius 16px, Gap 32px */}
        <div className="h-[80px] lg:h-[105px] flex items-center gap-2 lg:gap-8 rounded-2xl">
          {user ? (
            <>
              {/* User Name and Logout */}
              <div 
                className="hidden lg:flex h-[105px] items-center rounded-2xl gap-4"
                style={{ 
                  width: 'fit-content',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  gap: '10px'
                }}
              >
                <span 
                  className="text-white font-semibold text-xl leading-[150%] whitespace-nowrap" 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '150%',
                    letterSpacing: '0px',
                    color: '#FFFFFF'
                  }}
                >
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="hidden lg:flex h-[105px] items-center rounded-2xl cursor-pointer"
                style={{ 
                  width: 'fit-content',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  gap: '10px'
                }}
              >
                <span 
                  className="text-white font-semibold text-xl leading-[150%] whitespace-nowrap" 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '150%',
                    letterSpacing: '0px',
                    color: '#FFFFFF'
                  }}
                >
                  Logout
                </span>
              </button>
            </>
          ) : (
            <>
              {/* Frame 1707481349 - Login */}
              {/* Figma: Width Hug 119px, Height Fixed 105px, Radius 16px, Padding Left 32px Right 32px, Gap 10px, Flow Horizontal */}
              <div 
                className="hidden lg:flex h-[105px] items-center rounded-2xl"
                style={{ 
                  width: 'fit-content',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  gap: '10px'
                }}
              >
                {/* Text Login - Width 55px, Height 30px */}
                {/* Figma: Font Poppins, Weight 600, Size 20px, Line height 150%, Letter spacing 0px, Color #FFFFFF */}
                <Link 
                  href="/login"
                  className="text-white font-semibold text-xl leading-[150%] whitespace-nowrap" 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '150%',
                    letterSpacing: '0px',
                    color: '#FFFFFF'
                  }}
                >
                  Login
                </Link>
              </div>
              {/* Frame 1707481449 - Sign up */}
              {/* Figma: Width Hug 330px, Height Hug 60px */}
              <Link href="/register" className="hidden lg:block" style={{ width: 'fit-content', height: 'fit-content' }}>
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
                  <div 
                    className="flex items-center justify-center rounded-2xl cursor-pointer"
                    style={{ 
                      width: '326px',
                      height: 'fit-content',
                      borderRadius: '16px',
                      paddingTop: '16px',
                      paddingRight: '32px',
                      paddingBottom: '16px',
                      paddingLeft: '32px',
                      backgroundColor: '#16062C',
                      backdropFilter: 'blur(30px)'
                    }}
                  >
                    {/* Text "Sign up" - Inside Frame "1" */}
                    {/* Figma: Width 61px, Height 24px, Font Poppins, Weight 500, Size 16px, Line height 150%, Letter spacing 0px, Color #FFFFFF, Center aligned */}
                    <span 
                      className="text-white whitespace-nowrap"
                      style={{ 
                        width: '61px',
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
                      Sign up
                    </span>
                  </div>
                </div>
              </Link>
            </>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white z-50"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md rounded-b-2xl border-t border-white/10 z-[60] mt-2 w-full shadow-2xl">
          <ul className="px-6 py-6 space-y-4">
            <li>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-white/90 hover:text-white text-base">
                Pricing
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-white/90 hover:text-white text-base">
                How it works
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-white/90 hover:text-white text-base">
                About
              </a>
            </li>
            <li className="pt-4 border-t border-white/10">
              {user ? (
                <>
                  <div className="mb-4 text-white/90 text-base font-medium">
                    {user.firstName} {user.lastName}
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="block w-full h-11 bg-red-600 hover:bg-red-700 text-white rounded-full text-base font-medium text-center flex items-center justify-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)} className="block w-full text-left text-white/90 hover:text-white text-base font-medium mb-4">
                    Login
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)} className="block w-full h-11 bg-gradient-to-r from-[#050515] via-[#4D00FF] to-[#B521BA] text-white rounded-full text-base font-medium text-center flex items-center justify-center">
                    Sign up
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
561