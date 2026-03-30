import React from "react";
import { useLoaderData } from "react-router";
import download from "../assets/assets/icon-downloads.png";
import rating from "../assets/assets/icon-ratings.png";
import reviews from "../assets/assets/icon-review.png";
import RatingChart from "./RatingChart";
import { toast } from "react-toastify";

const AppDetails = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 my-10">
        <div>
          <img className="mx-auto" src={data.image} alt="" />
        </div>
        <div className="mx-auto md:mx-0">
          <h1 className="text-xl font-bold">{data.title}</h1>
          <p>Developed By: <span className="text-purple-600">{data.companyName}</span></p>
          <div className="flex items-center gap-10 font-medium  rounded-xl px-3 py-2 w-max mt-5 cursor-pointer">
            <div>
              <img src={download} alt="" />
              <p>Download</p>
              {data.downloads}
            </div>
            <div>
              <img src={rating} alt="" />
              <p>Average Ratings</p>
              {data.ratingAvg}
            </div>
            <div>
              <img src={reviews} alt="" />
              <p>Reviews</p>
              {data.reviews}
            </div>
          </div>
          <button onClick={()=>{toast("Install Complete")}} className="btn btn-accent text-white text-xl">Install Now {data.size} MB</button>
        </div>
      </div>
      <RatingChart></RatingChart>
      <div>
      <h className="text-xl font-bold">Description</h>
      <p className="mb-3 font-medium text-gray-700">{data.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
