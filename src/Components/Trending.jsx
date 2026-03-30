import React from 'react';
import { Link } from 'react-router';

import AllApps from '../Pages/AllApps';

const Trending = () => {
    return (
        <div className='my-10 text-center'>
            <div>
            <h1 className='text-4xl font-bold'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
                <AllApps limit={8} showTitle={false}></AllApps>
            </div>
            <Link to="/all-apps">
            <button className='btn text-white px-5 rounded-lg font-bold gap-1 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button>
            </Link>
        </div>
    );
};

export default Trending;