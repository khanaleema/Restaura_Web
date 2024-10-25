import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://github.com/khanaleema" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/i._.aleemakhan/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/aleemakhan17/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Aleema Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
