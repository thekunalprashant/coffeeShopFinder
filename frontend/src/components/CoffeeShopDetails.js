"use client";
import React, { useEffect, useState } from "react";
import { getShopById } from "../api/api";
import { usePathname, useParams } from "next/navigation";
import ProductList from "./ProductList";

const CoffeeShopDetails = () => {
  const router = useParams();
  const { id } = router;
  const [shop, setShop] = useState(null);

  useEffect(() => {
    getShopById(id).then((response) => {
      setShop(response.data);
    });
  }, [id]);

  if (!shop) return <div>Loading...</div>;

  return (
    <div className=" flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{shop.name}</h1>

      <div className="flex gap-6">
        <p className="text-yellow-600">Rating: {shop.rating} Stars</p>
        <p className="">Location: {shop.location}</p>
      </div>

      <ProductList shopId={shop._id} />
    </div>
  );
};

export default CoffeeShopDetails;
