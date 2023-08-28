"use client";

import { Button } from "@/components/common/Button";
import Link from "next/link";

export default function Images() {
  return (
    <div className="min-h-[25rem] w-full flex flex-col items-center gap-1 p-12 bg-white">

      
      <div className="mb-8 text-center">
        <label className="text-3xl font-bold text-gray-700 w-36 text-center">
          Images
        </label>
      </div>

      <br />

      <div className="text-center flex flex-row space-x-18">
      
        <button
          onClick={handleClickForBackButton}
          className="text-green-400 mr-4"
        >
          Back
        </button>

        <button
          onClick={handleClickForNextButton}
          className="text-green-400 ml-4"
        >
          Next
        </button>
      </div>
    </div>
  );

  function handleClickForBackButton() {
    window.location.href = "/filter";
  }

  function handleClickForNextButton() {
    window.location.href = "/filter";
  }
}
