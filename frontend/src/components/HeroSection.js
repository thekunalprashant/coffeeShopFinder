import Image from "next/image";
import React from "react";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-wrap justify-center h-[calc(100vh-250px)] p-14 bg-amber-200">
      <div className="w-full md:w-1/2 ">
        <div className="flex flex-col justify-center text-center md:text-left space-y-4">
          <div className="space-y-2 flex flex-col gap-2 md:gap-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Find the Best Coffee Shops Near You
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-sm md:text-xl pb-4">
              Discover top-rated coffee shops, explore menus,
              all in one place.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-normal">
          <input
            className="p-2 border-2 w-2/3 mr-4 rounded-md"
            type="text"
            placeholder="Search for coffee shop"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-black w-20 text-white p-2 rounded-md">Search</button>
        </div>
      </div>
      <div className="">
        <Image
          src="/coffeeImage.png"
          alt="hero image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
