import React, { useContext } from 'react';
import { FaListAlt, FaPlusCircle, FaUserAlt, FaBars, FaTimes, FaChartPie, FaQuestionCircle, FaHandsHelping, FaInfoCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import Footer from '../component/Footer';
import { ThemeProvider } from '../provider/ThemeContext';


const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ThemeProvider>
        <Navbar />

        <div className="drawer lg:drawer-open dark:bg-gray-900">
          <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

          {/* Main content */}
          <div className="drawer-content flex flex-col min-h-screen px-4 pt-4 lg:ml-64">
            {/* Hamburger (mobile only) */}
            <div className="lg:hidden mb-4">
              <label htmlFor="dashboard-drawer" className="btn text-teal-600 btn-ghost text-2xl">
                <FaBars />
              </label>
            </div>

            {/* Routed Page */}
            <div className="flex-1">
              <Outlet />
            </div>
          </div>

          {/* Sidebar */}
          <div className="drawer-side dark:bg-gray-900">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

            <aside className="lg:fixed  py-20 top-0 left-0 w-64 h-screen dark:bg-gray-500 bg-white text-gray-800 p-6 shadow-lg flex flex-col space-y-8 overflow-y-auto z-50">
              {/* Close button (mobile only) */}
              <div className="lg:hidden flex justify-end mb-4">
                <label
                  htmlFor="dashboard-drawer"
                  className="text-gray-500 hover:text-red-500 cursor-pointer"
                  title="Close Menu"
                >
                  <FaTimes size={24} />
                </label>
              </div>

              {/* Header */}
              <header>
                <h1 className="text-2xl pt-5 font-bold text-gray-900">Dashboard Menu</h1>
              </header>

              {/* User Info */}
              <div className="flex items-center space-x-4 pb-4 border-b border-gray-200">
                <img
                  src={user?.photoURL || 'https://i.pravatar.cc/100'}
                  alt="User avatar"
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h3 className="text-lg font-semibold  text-gray-900">{user?.displayName || 'Guest'}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-800 truncate">{user?.email || 'No email'}</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#eb3467] text-white hover:bg-[#c42f57] transition"
                  onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
                >
                  <FaChartPie size={18} />
                  Overview
                </Link>
                <Link
                  to="/dashboard/allrecipe"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
                >
                  <FaListAlt size={18} />
                  All Recipes
                </Link>
                <Link
                  to="/dashboard/myrecipes"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                  onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
                >
                  <FaUserAlt size={18} />
                  My Recipes
                </Link>
                <Link
                  to="/dashboard/addrecipe"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                  onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
                >
                  <FaPlusCircle size={18} />
                  Add Recipe
                </Link>
                <Link
                  to="/dashboard/faq"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
                  onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
                >
                  <FaQuestionCircle size={18} />
                  FAQ
                </Link>
                <Link
                  to="/dashboard/support"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition"
                  onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
                >
                  <FaHandsHelping size={18} />
                  Support
                </Link>
                <Link
                  to="/dashboard/about"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition"
                  onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
                >
                  <FaInfoCircle size={18} />
                  About Us
                </Link>
              </nav>
            </aside>
          </div>
        </div>
        <div><Footer></Footer></div>
      </ThemeProvider>
    </>
  );
};

export default DashboardLayout;
