import React, { useState } from 'react';
import { UserList } from './components/UserList';
import { RoleList } from './components/RoleList';
import { Hero } from './components/Hero';
import { AuthModal } from './components/AuthModal';
import { ShieldCheck } from 'lucide-react';

function App() {
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    mode: 'login', // 'login' or 'register'
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
                <ShieldCheck className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">VRV Security</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('users')}
                className="text-gray-500 hover:text-indigo-600 font-medium"
              >
                Users
              </button>
              <button
                onClick={() => scrollToSection('roles')}
                className="text-gray-500 hover:text-indigo-600 font-medium"
              >
                Roles
              </button>
              <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
                <button
                  onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
                  className="text-gray-500 hover:text-indigo-600 font-medium"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setAuthModal({ isOpen: true, mode: 'register' })}
                  className="btn"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="bg-white">
          <Hero onGetStarted={() => scrollToSection('users')} />
        </section>

        {/* Users Section */}
        <section id="users" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">User Management</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Manage your team members and their access levels
              </p>
            </div>
            <UserList />
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Role Management</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Define and customize access roles for your organization
              </p>
            </div>
            <RoleList />
          </div>
        </section>
      </div>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
    </div>
  );
}

export default App;
