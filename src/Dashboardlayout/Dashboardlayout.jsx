import React, { useContext } from 'react';
import {
  FaListAlt, FaPlusCircle, FaUserAlt, FaBars, FaTimes,
  FaChartPie, FaQuestionCircle, FaHandsHelping, FaInfoCircle
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { AuthContext } from '../provider/AuthProvider';
import { ThemeProvider } from '../provider/ThemeContext';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <ThemeProvider>
      <Navbar />

      <div className="drawer lg:drawer-open dark:bg-gray-900">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

        {/* Main content area with sticky footer support */}
        <div className="drawer-content flex flex-col min-h-screen px-4 pt-4 lg:ml-64">
          {/* Mobile Hamburger */}
          <div className="lg:hidden mb-4">
            <label htmlFor="dashboard-drawer" className="btn text-teal-600 btn-ghost text-2xl">
              <FaBars />
            </label>
          </div>

          {/* Routed content */}
          <main className="flex-1">
            <Outlet />
          </main>

          {/* Sticky footer */}
          <footer className="mt-4">
            <Footer />
          </footer>
        </div>

        {/* Sidebar */}
        <div className="drawer-side dark:bg-gray-900">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <aside className="lg:fixed py-20 top-0 left-0 w-64 h-screen dark:bg-gray-800 bg-white text-gray-800 p-6 shadow-lg flex flex-col space-y-8 overflow-y-auto z-50">
            {/* Mobile close button */}
            <div className="lg:hidden flex justify-end mb-4">
              <label
                htmlFor="dashboard-drawer"
                className="text-gray-500 hover:text-red-500 cursor-pointer"
                title="Close Menu"
              >
                <FaTimes size={24} />
              </label>
            </div>

            {/* Sidebar Header */}
            <header>
              <h1 className="text-2xl font-bold dark:text-gray-300 text-gray-900 pt-5">Dashboard Menu</h1>
            </header>

            {/* User Info */}
            <div className="flex items-center space-x-4 pb-4 border-b border-gray-300">
              <img
                src={user?.photoURL || 'https://i.pravatar.cc/100'}
                alt="User avatar"
                className="w-14 h-14 rounded-full object-cover shadow-sm"
              />
              <div>
                <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900">{user?.displayName || 'Guest'}</h3>
                <p className="text-sm dark:text-gray-300 text-gray-600 truncate">{user?.email || 'No email'}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-3">
              <SidebarLink to="/dashboard" icon={<FaChartPie />} label="Overview" bg="bg-[#eb3467]" hover="hover:bg-[#c42f57]" />
              <SidebarLink to="/dashboard/allrecipe" icon={<FaListAlt />} label="All Recipes" bg="bg-blue-600" hover="hover:bg-blue-700" />
              <SidebarLink to="/dashboard/myrecipes" icon={<FaUserAlt />} label="My Recipes" bg="bg-purple-600" hover="hover:bg-purple-700" />
              <SidebarLink to="/dashboard/addrecipe" icon={<FaPlusCircle />} label="Add Recipe" bg="bg-green-600" hover="hover:bg-green-700" />
              <SidebarLink to="/dashboard/faq" icon={<FaQuestionCircle />} label="FAQ" bg="bg-yellow-500" hover="hover:bg-yellow-600" />
              <SidebarLink to="/dashboard/support" icon={<FaHandsHelping />} label="Support" bg="bg-cyan-600" hover="hover:bg-cyan-700" />
              <SidebarLink to="/dashboard/about" icon={<FaInfoCircle />} label="About Us" bg="bg-gray-600" hover="hover:bg-gray-700" />
            </nav>
          </aside>
        </div>
      </div>
    </ThemeProvider>
  );
};

// SidebarLink component for cleaner link rendering
const SidebarLink = ({ to, icon, label, bg, hover }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white ${bg} ${hover} transition`}
    onClick={() => (document.getElementById('dashboard-drawer').checked = false)}
  >
    {icon}
    {label}
  </Link>
);

export default DashboardLayout;
