import React from 'react';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import heroImg from '../assets/assets/hero.png'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className='text-center mt-10'>
            <div>
            <h1 className='text-6xl text-[#001931] font-bold'>We Build <br/>
            <span className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-[#627382] mt-5 lg:w-3/6 lg:mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex justify-center gap-5 mt-10 mb-10'>
                <Link to="https://play.google.com/store/games?hl=en_US&pli=1">
                <button className='flex items-center gap-2 font-medium border-2  rounded-xl px-3 py-2 cursor-pointer'> <span className=''><FaGooglePlay /></span>Google Play</button>
                </Link>
                <Link to="https://apps.apple.com/us/iphone/apps">
                <button className='flex items-center gap-2 font-medium border-2  rounded-xl px-3 py-2 cursor-pointer'> <span className=''><FaAppStore /></span>App Store</button>
                </Link>
            </div>
            <div className='flex justify-center'>
                <img src={heroImg} alt="hero img" />
            </div>
        </div>
    );
};

export default Hero;