import React from 'react';
import { Shield, Users, Lock, Key, ChevronRight, CheckCircle } from 'lucide-react';

export const Hero = ({ onGetStarted }) => {
  const features = [
    'Role-based access control',
    'User management',
    'Permission handling',
    
    'Real-time updates'
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
        <div className="absolute inset-y-0 right-0 w-1/2">
          <svg className="h-full w-full" viewBox="0 0 366 729" fill="none">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M.5 24V.5H24" fill="none" stroke="rgba(99, 102, 241, 0.1)" />
              </pattern>
            </defs>
            <rect width="366" height="729" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {/* Main Content */}
            <div className="space-y-12">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
                <Shield className="h-5 w-5 text-indigo-500" />
                <span className="text-sm font-medium text-indigo-700">RBAC System</span>
              </div>

              {/* Heading */}
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Role-Based Access Control</span>
                  <span className="block text-indigo-600">Made Simple</span>
                </span>
              </h1>

              {/* Description */}
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Streamline your organization's access management with our powerful RBAC system. 
                Define roles, manage permissions, and ensure security with ease.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                  <button
                    onClick={onGetStarted}
                    className="flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                    Learn More
                    <Lock className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-2xl sm:overflow-hidden shadow-xl">
              <div className="px-4 py-8 sm:px-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white text-lg font-medium text-gray-900">
                      Key Features
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                {/* <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-indigo-600">99%</span>
                    <span className="block text-sm font-medium text-gray-500">Security</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-indigo-600">24/7</span>
                    <span className="block text-sm font-medium text-gray-500">Support</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-indigo-600">100+</span>
                    <span className="block text-sm font-medium text-gray-500">Clients</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
