"use client";

import { Button } from "@/components/common/Button";
import Link from "next/link";

export default function Images() {
  return (
    <div className="flex justify-center items-center mb-8">
      <button
        onClick={handleClickForBackButton}
        className="text-green-400 mr-4"
      >
        Back
      </button>

      <label className="text-3xl font-bold text-gray-700 w-36 text-center">
        Images
      </label>

      <button
        onClick={handleClickForNextButton}
        className="text-green-400 ml-4"
      >
        Next
      </button>
    </div>
  );

  function handleClickForBackButton() {
    window.location.href = "/filter";
  }

  function handleClickForNextButton() {
    window.location.href = "/filter";
  }
}
