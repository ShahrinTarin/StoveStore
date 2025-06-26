import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';
import { MdAttachEmail } from 'react-icons/md';
import { NavLink } from 'react-router'; // ✅ Fix: use react-router-dom not react-router

const Footer = () => {
  return (
    <footer className="bg-blue-200  text-gray-800  px-6 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Logo Section */}
        <div className="lg:w-1/3">
          <NavLink
            to="/"
            className="text-3xl font-extrabold flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <span className="text-amber-500">🔥</span>
            <span className="text-blue-700 ">Stove</span>
            <span className="text-gray-600 ">Stories</span>
          </NavLink>
          <p className="text-sm mt-3 text-gray-600 ">
            Share your recipes with the world and explore the tastes of different cultures. Let’s cook together!
          </p>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:w-2/3">
          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide text-gray-900 ">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</NavLink></li>
              <li><NavLink to="/allrecipes" className="hover:text-blue-600 dark:hover:text-blue-400">All Recipes</NavLink></li>
              <li><NavLink to="/myrecipes" className="hover:text-blue-600 dark:hover:text-blue-400">My Recipes</NavLink></li>
              <li><NavLink to="/addrecipe" className="hover:text-blue-600 dark:hover:text-blue-400">Add Recipe</NavLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide text-gray-900 ">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact Us</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-blue-600 dark:hover:text-blue-400">FAQ</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide text-gray-900 ">Contact</h3>
            <a
              href="mailto:rahmanshahrintarin@gmail.com"
              className="flex items-center gap-2 text-sm hover:text-blue-600 dark:hover:text-blue-400"
            >
              <MdAttachEmail size={20} />
              rahmanshahrintarin@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div>
            <h3 className="uppercase font-semibold mb-4 tracking-wide text-gray-900 dark:text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61570044629513" target="_blank" rel="noreferrer" className="hover:text-blue-800 dark:hover:text-blue-400">
                <i className="fab fa-facebook-f text-lg"></i><IoLogoFacebook size={22}/>

              </a>
              <a href="https://www.instagram.com/_shahrin_tarin/" target="_blank" rel="noreferrer" className="hover:text-pink-500 dark:hover:text-pink-400">
                <i className="fab fa-instagram text-lg"></i><AiFillInstagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-700">
        © <span className="text-blue-700 dark:text-blue-400 font-semibold">StoveStories</span> {new Date().getFullYear()} — All rights reserved. <br />
        Designed & Developed by{' '}
        <a
          href="https://github.com/ShahrinTarin"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:underline"
        >
          Shahrin Tarin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
