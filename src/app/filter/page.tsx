"use client";

import { Button } from "@/components/common/Button";
import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState<number>(0);
  const [cropsType, setCropsType] = useState<string>("");
  const [soilType, setSoilType] = useState<string>("");
  const [locationLong, setLocationLong] = useState<string>("");
  const [locationLat, setLocationLat] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("");
  const [healthStatus, setHealthStatus] = useState<string>("");

  const inputContainer = "mb-4 flex items-center";
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

  // Below is an example of an effect that is run every time the count is changed.
  // If you open the developer inspector in Google Chrome, and click on the console tab, you
  // can see the messages being sent every time you click the button, or the button resets to zero.
  // This effect does not need a cleanup function because there is nothing to clean up.
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

  // The return value to the component is what actually gets rendered to the screen, we usually use
  // JSX to define the HTML which will be rendered. When writing JSX, you can use any normal HTML elements
  // as well as any custom HTML elements (components) that you want, in this case we are using the
  // custom 'Button' component which we have imported at the top of this file.

  // We write all of our styling using TailwindCSS as classes, TailwindCSS has a huge collection of classes
  // which apply different styles to the element, you can look at their website for more detail.
  return (
    <div className="min-h-[25rem] w-full flex flex-col items-center gap-10 p-10 bg-slate-200">
      <div className="p-8 bg-white shadow-md rounded-lg w-96">
        <button
          onClick={handleClick}
          className="relative right-15 text-green-400"
        >
          Back
        </button>
        <br />
        <label className="block text-xl font-bold text-gray-700 w-36">
          🔍 Filter
        </label>

        <br />
        <div className="flex items-center">
          <label className="mr-2">Soil Type:</label>
          <div className="flex items-center ml-auto pr-2">
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="px-4 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>
        <br />
        <div className="flex items-center">
          <label className="mr-2">Crop Type:</label>
          <div className="flex items-center ml-auto pr-2">
            <select
              value={cropsType}
              onChange={(e) => setCropsType(e.target.value)}
              className="px-4 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>
        <br />
        <div className="flex items-center">
          <label className="mr-2">Time Period:</label>
          <div className="flex items-center ml-auto pr-2">
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="px-4 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>
        <br />
        <div className="flex items-center">
          <label className="mr-2">Health Status:</label>
          <div className="flex items-center ml-auto pr-2">
            <select
              value={healthStatus}
              onChange={(e) => setHealthStatus(e.target.value)}
              className="px-4 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>
        <br />
        <label className="block text-xl font-bold text-gray-700 w-36">
          📍 Location
        </label>
        <br />
        <div className={inputContainer}>
          <label className={inputFont}>long</label>
          <input
            type="text"
            onChange={(e) => setLocationLong(String(e.target.value))}
            className={inputClassName}
          />
        </div>
        <br />
        <div className={inputContainer}>
          <label className={inputFont}> lat</label>
          <input
            type="text"
            id="location_lat"
            onChange={(e) => setLocationLat(String(e.target.value))}
            className={inputClassName}
          />
        </div>
      </div>
      <Button
        onClick={handleClick}
        style={{ width: "300px" }} // Adjust the width as needed
      >
        Confirm
      </Button>
    </div>
  );
  function handleClick() {
    window.location.href = "/images";
  }
}
