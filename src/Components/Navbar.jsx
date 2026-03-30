import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const menuItems = <>
    <Link to="/"><a>Home</a></Link>
    <Link to="all-apps"><a>Apps</a></Link>
    <Link><a>Installation</a></Link>
    </>
    
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img  className='w-8' src={logo} alt="" /><span className='text-3xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Hero.IO</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 text-blue-500 font-bold">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="https://github.com/jyoti-prokash" className="text-white p-2 rounded-lg font-bold flex items-center gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><span className='text-2xl'><FaGithub /></span>Contribute</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;