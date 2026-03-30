import React from 'react';
import error from '../assets/assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <div className='flex justify-center'>
                <img src={error} alt="" />
            </div>
            <div>
                <h1 className='font-bold text-4xl mb-5'>Oops, page not found!</h1>
                <p className='font-light text-gray-600'>The page you are looking for is not available.</p>
                <Link to="/" className='btn mt-5 text-white p-2 rounded-lg font-bold gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;