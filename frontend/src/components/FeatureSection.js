import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:flex-nowrap p-16 bg-yellow-200">
      
      <div className="">
      <span className="bg-red-950 text-white opacity-70 rounded-md p-2 ">Features</span>
        <p className="my-4 text-4xl font-bold">Discover, Rate, and Share Your Favorite Coffee Spots </p>
        <p className="text-lg my-4">
          Our app makes it easy to find the best coffee shops near you, read
          reviews from other users, and share your own experiences. Download it
          today to start exploring!
        </p>
        <button className="bg-black text-white p-2 px-4 rounded-md">Download the App</button>
      </div>
      <div>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1676737140551-ce6a142769da?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={0}
          height={0}
          sizes="60vw"
          className="w-auto h-72 rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
