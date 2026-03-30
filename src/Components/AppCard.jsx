import React from 'react';
import { PiDownloadSimple } from 'react-icons/pi';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        <div className='mx-auto card w-80 bg-base-100 shadow-sm'>
            <Link to={`/all-apps/${app.id}`}
              className=""
            >
              <div className="rounded mb-3">
                <img className='p-2 mx-auto' src={app.image} alt="" />
              </div>
              <h2 className="text-sm font-medium mb-2 px-5">
                {app.title}
              </h2>
              <div className="flex justify-between items-center text-xs px-5 pb-3">
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded flex items-center gap-1">
                <PiDownloadSimple /> {app.downloads}
                </span>
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded">
                  ⭐ {app.ratingAvg}
                </span>
              </div>
            </Link>
        </div>
    );
};

export default AppCard;