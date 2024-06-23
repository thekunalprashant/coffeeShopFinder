import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoffeeShops = ({ shops }) => {
  return (
    <div className="p-16 flex flex-col gap-8 bg-[#f5f5f5]">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Featured Coffee Shops</h2>
        <p className="text-sm">
          Discover the top-rated coffee shops in your area and read reviews from
          other users.
        </p>
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        {shops?.map((shop) => (
          <div key={shop._id} className="hover:text-blue-600 hover:shadow-lg">
            <Link href={`/shop/${shop._id}`}>
              <div className="flex flex-col gap-4 w-72 p-4 border-2 shadow-md">
                <Image
                  src={shop.images[0]}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-full rounded-sm object-cover"
                />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">{shop.name}</p>
                  <div className="text-yellow-600">{shop.rating} Star</div>
                </div>
                <p className="text-sm">Location: {shop.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeShops;
