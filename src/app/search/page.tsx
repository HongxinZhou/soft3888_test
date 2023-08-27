"use client";

import { Button } from "@/components/common/Button";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Search() {  
  const [count, setCount] = useState<number>(0);
  const [cropsType, setCropsType] = useState<string>("");
  const [soilType, setSoilType] = useState<string>("");
  const [locationLong, setLocationLong] = useState<string>("");
  const [locationLat, setLocationLat] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("");
  const [healthStatus, setHealthStatus] = useState<string>("");

  const selectItem = "px-4 py-2 border-b-2 text-left";
  const inputClassName = "mt-1 p-2 w-full border rounded-md";
  const inputFont = "block text-sm font-medium text-gray-700 w-36";

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(0);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(
      count,
      cropsType,
      soilType,
      timePeriod,
      healthStatus,
      locationLong,
      locationLat,
    );
  }, [count]);

  return (
    <div className="min-h-[25rem] w-full flex flex-col items-center gap-10 p-10 bg-white">
      <div className="p-8 rounded-lg w-96">
        <div className="mb-8 text-center">
          <label className="text-3xl font-bold text-gray-700 w-36">
            Search
          </label>
          <button
            onClick={handleClick}
            className="relative left-20 text-green-400"
          >
            Filter
          </button>
        </div>

        <div className="flex-col"></div>
        <input
          type="text"
          className="p-2 w-full border rounded-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
  // redirect to filter page
  function handleClick() {
    window.location.href = "/filter";
  }
}