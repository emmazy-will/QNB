import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import logo from '../images/QNB LOGO-2.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout, hasPermission } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/garllary', label: 'Gallary' },
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-[#003366] to-[#22272a] shadow-md  shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-1">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
             <img 
              src={logo} 
              alt="Q.N.B Transport" 
              className="w-16 h-16 rounded-full mb-4"
            />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition duration-300 ${
                    isActive(link.path)
                      ? 'text-blue-800 border-b-2 border-blue-800'
                      : 'text-gray-300 hover:text-blue-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Analytics Link - Only for authenticated users with permission */}
              {isAuthenticated && hasPermission('analytics:view') && (
                <Link
                  to="/analytics"
                  className={`font-medium transition duration-300 flex items-center ${
                    isActive('/analytics')
                      ? 'text-blue-800 border-b-2 border-blue-800'
                      : 'text-gray-200 hover:text-blue-200'
                  }`}
                >
                  <BarChart3 size={16} className="mr-1" />
                  Analytics
                  <Shield size={14} className="ml-1 text-blue-600" />
                </Link>
              )}

              {/* Auth Section */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Welcome, <span className="font-medium">{user?.name}</span>
                  </span>
                  <button
                    onClick={logout}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center"
                >
                  <Shield size={16} className="mr-2" />
                  Admin Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-blue-800 transition duration-300 mr-4 mb-5"
              >
                {isOpen ? <X size={24} /> : <Menu size={30} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium transition duration-300 ${
                      isActive(link.path)
                        ? 'text-blue-500'
                        : 'text-gray-300 hover:text-blue-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Analytics Link */}
                {isAuthenticated && hasPermission('analytics:view') && (
                  <Link
                    to="/analytics"
                    onClick={() => setIsOpen(false)}
                    className={`font-medium transition duration-300 flex items-center ${
                      isActive('/analytics')
                        ? 'text-blue-800'
                        : 'text-red-300 hover:text-blue-800'
                    }`}
                  >
                    <BarChart3 size={16} className="mr-1" />
                    Analytics
                    <Shield size={14} className="ml-1 text-blue-600" />
                  </Link>
                )}

                {/* Mobile Auth Section */}
                {isAuthenticated ? (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">
                      Welcome, <span className="font-medium">{user?.name}</span>
                    </p>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition duration-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsOpen(false);
                    }}
                    className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <Shield size={16} className="mr-2" />
                    Admin Login
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Navbar;