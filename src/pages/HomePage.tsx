import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: () => navigate('/dashboard'),
    scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/gmail.readonly',
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-normal tracking-tight" style={{ fontFamily: "'Google Sans', 'Product Sans', 'Roboto', sans-serif" }}>
                  Plan<span className="text-blue-500">lyy</span>
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Pricing</a>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => login()}
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-medium text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your Productivity Hub</span>
              <span className="block text-blue-500 mt-2">All in One Place</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
              Seamlessly integrate your notes with Gmail and Google Calendar. Stay organized, focused, and productive.
            </p>
            <div className="mt-8">
              <button
                onClick={() => login()}
                className="inline-flex items-center px-6 py-3 shadow-sm text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center text-gray-900 mb-12">Integrated Features</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg">
              <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Google Keep" className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Smart Notes</h3>
              <p className="mt-2 text-gray-500">
                Create, organize, and access your notes with powerful organization tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <img src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png" alt="Gmail" className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Gmail Integration</h3>
              <p className="mt-2 text-gray-500">
                Connect your emails directly to your notes for seamless workflow.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <img src="https://www.gstatic.com/images/branding/product/1x/calendar_2020q4_48dp.png" alt="Google Calendar" className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Calendar Sync</h3>
              <p className="mt-2 text-gray-500">
                Schedule and organize your tasks with Google Calendar integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center text-gray-900 mb-8">About MindFlow</h2>
          <p className="text-center text-gray-500 max-w-3xl mx-auto">
            MindFlow brings together the best of Google's productivity tools in one seamless experience. 
            We help you stay organized and focused by integrating your notes, emails, and calendar in a 
            single, intuitive interface.
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center text-gray-900 mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-8 bg-gray-50 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide uppercase bg-gray-100 rounded-full text-gray-600">
                    Free Plan
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold text-gray-900">
                  $0
                </div>
                <p className="mt-4 text-sm text-center text-gray-500">
                  Perfect for getting started
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  {[
                    'Unlimited notes, docs & blogs',
                    'Basic organization tools',
                    'Simple search functionality',
                    'Standard support',
                    'Web access'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => login()}
                  className="mt-8 w-full flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  Get Started Free
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-500">
              <div className="px-6 py-8 bg-blue-500 sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide uppercase bg-white rounded-full text-blue-500">
                    Pro Plan
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold text-white">
                  $15
                </div>
                <p className="mt-4 text-sm text-center text-blue-100">
                  Unlock AI-powered features
                </p>
              </div>
              <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
                <ul className="space-y-4">
                  {[
                    'Everything in Free plan',
                    'AI-powered writing assistance',
                    'Automatic email drafting with AI',
                    'Smart calendar scheduling',
                    'Advanced search & organization',
                    'Priority support',
                    'Mobile app access'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => login()}
                  className="mt-8 w-full flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;