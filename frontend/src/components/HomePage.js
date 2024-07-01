"use client";
import React, { useEffect, useState } from "react";
import { getShops } from "@/api/api";
import HeroSection from "./HeroSection";
import CoffeeShops from "./CoffeeShops";

const HomePage = () => {
  const [shops, setShops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getShops().then((response) => {
      setShops(response);
    });
  }, []);

  const filteredShops = shops?.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CoffeeShops shops={filteredShops} />
    </div>
  );
};

export default HomePage;
