'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5001'}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.success && data.data.token) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        window.dispatchEvent(new Event('userLogin'));
        router.push('/');
      } else {
        throw new Error('Login failed - no token received');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center px-4 py-4 sm:py-6 md:py-8 relative overflow-y-auto">
      <style dangerouslySetInnerHTML={{__html: `
        /* Form-specific styles - isolated from global CSS */
        .login-form {
          width: 100%;
          display: block;
        }
        
        .login-form input {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          display: block;
        }
        
        .login-form button[type="submit"] {
          box-sizing: border-box;
          display: flex;
          width: 100%;
          cursor: pointer;
        }
        
        .login-form .relative {
          width: 100%;
          display: block;
          position: relative;
        }
      `}} />
      <Link href="/" className="absolute top-6 left-6 text-gray-600 hover:text-gray-900 text-sm flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>
      <div className="w-full max-w-md my-auto" style={{ minWidth: 0 }}>
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="mb-4 sm:mb-6 md:mb-8 text-center">
            <div className="flex flex-col items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <img 
                src="https://i0.wp.com/wartinlabs.com/wp-content/uploads/2022/02/WARTIN-LAB-AI-2-2.png?fit=117%2C87&ssl=1" 
                alt="WartinLabs Logo" 
                className="h-8 sm:h-10 md:h-12 w-auto mb-1 sm:mb-2"
              />
              <p className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">WARTINLABS</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 text-center">Welcome back!</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 text-center">Login to continue </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form space-y-4 sm:space-y-5 md:space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>

            {error && (
              <div className="p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs sm:text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white font-semibold py-2 sm:py-2.5 md:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Logging in...</span>
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="mt-4 sm:mt-5 md:mt-6 text-center">
            <span className="text-gray-600 text-sm sm:text-base">New Register? </span>
            <Link href="/register" className="text-purple-600 font-semibold hover:underline text-sm sm:text-base">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
