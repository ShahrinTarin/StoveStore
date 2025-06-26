import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import DarkModeToggler from './DarkModeToggler';
const Navbar = () => {

    const { user, logOut } = use(AuthContext)
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "You Logged Out Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            setIsTooltipOpen(false);
        }).catch(() => {
            // An error happened.
        });
    }

    const links = <>
        <li><NavLink className={({ isActive }) =>
            `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
            }`} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
            }`} to='/support'>Support</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
            }`} to='/about'>About Us</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
            }`} to='/faq'> FAQ</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
            }`} to='/allrecipes'>All Recipe</NavLink></li>
        {
            user && <>
                <li><NavLink className={({ isActive }) =>
                    `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
                    }`} to='/addrecipe'>Add Recipe</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                    `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
                    }`} to='/myrecipes'> My Recipes</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                    `block px-2 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50  text-blue-500' : 'dark:text-gray-400 text-gray-600 hover:bg-gray-100'
                    }`} to='/dashboard'> Dashboard</NavLink></li>
            </>
        }



    </>

    return (
        <div className="navbar sticky top-0 z-1000  shadow-md md:px-8 lg:px-12 bg-transparent backdrop-blur-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu flex-wrap menu-sm z-1100 dropdown-content bg-blue-50 dark:bg-gray-800 rounded-box mt-3 w-52 p-2 shadow">
                        {links}
                        <li>{
                            !user ? <div className='space-x-2 lg:space-x-4'>
                                <NavLink to='/login' className="text-gray-900 dark:text-gray-900 bg-blue-100 btn font-semibold">Login</NavLink>
                                <NavLink to='/register' className="text-gray-900 dark:text-gray-900 bg-blue-100 btn font-semibold">Register</NavLink>
                            </div> : ' '
                        }</li>
                    </ul>
                </div>
                <NavLink to='/' className="text-xl lg:text-2xl flex-1 font-bold"><div className=" mr-16 font-bold flex items-center gap-1">
                    <span className="text-amber-600">🔥</span>
                    <span className="text-blue-600">Stove</span>
                    <span className="text-gray-500 dark:text-gray-300">Stories</span>
                </div></NavLink>
            </div>
            <div className="navbar-center hidden text-xs lg:flex">
                <ul className="menu gap-2  menu-horizontal ">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-3 flex ">
              
                {user && (
                    <>
                        <img
                            className="w-9 rounded-full cursor-pointer"
                            src={user.photoURL}
                            alt="User Avatar"
                            data-tooltip-id="user-tooltip"
                            onClick={() => setIsTooltipOpen(!isTooltipOpen)}
                        />
                        <Tooltip
                            id="user-tooltip"
                            place="bottom-end"
                            isOpen={isTooltipOpen}
                            clickable
                            className="bg-blue-100   rounded-md shadow-lg z-10 p-5"
                        >
                            <p className="text-gray-100 font-semibold text-lg mb-3">{user.displayName}</p>
                            <button onClick={handleLogOut} className='btn mb-2 bg-blue-100 dark:text-gray-700 text-gray-600 font-semibold'>LogOut</button>
                        </Tooltip>
                    </>
                )}
                {
                    !user && <div className='space-x-2 lg:flex hidden lg:space-x-4'>
                        <NavLink to='/login' className="text-gray-900 dark:text-gray-900 bg-blue-100 btn font-semibold">Login</NavLink>
                        <NavLink to='/register' className="text-gray-900 dark:text-gray-900 bg-blue-100 btn font-semibold">Register</NavLink>
                    </div>
                }
                <div><DarkModeToggler></DarkModeToggler></div>
            </div>
        </div>
    );
};

export default Navbar;