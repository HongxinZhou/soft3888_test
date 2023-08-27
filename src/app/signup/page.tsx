"use client";
import { Button } from "@/components/common/Button";
import { Checkbox } from "@material-tailwind/react";
import Link from "next/link";
import { useId } from "react";
import React, { useState } from 'react';

function TextInput({ type, content }: { type: string; content: string }) {
  return (
    <input
      type={type}
      placeholder={content}
      className="bg-gray-100 p-3 rounded ring-1 ring-gray-200"
    ></input>
  );
}

export default function SignUp() {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className="flex-1 flex flex-col gap-20 items-center justify-center bg-white">
      <Link href="/login" legacyBehavior>
        <a className="absolute top-2 right-2 text-black hover:text-gray-700">Login</a>
      </Link>
      <Link href="/" legacyBehavior>
        <a className="absolute top-2 left-2 text-black hover:text-gray-700"><span>&#x1F1FD;</span></a>
      </Link>
      <div className="text-4xl pt-5">Sign Up</div>
      
      <form className="flex flex-col flex-initial gap-5 min-w-[20rem]">
        <TextInput type="text" content="Name"></TextInput>
        <TextInput type="text" content="Email"></TextInput>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="enter password"
            className="text-gray-600 bg-gray-50 border text-sm rounded-lg p-2 flex flex-col flex-initial gap-5 min-w-[20rem]"
          />
          <button 
            type="button" 
            onClick={togglePasswordVisibility} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >{showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div>
          <Checkbox defaultChecked crossOrigin={undefined} />
          <label htmlFor={id}>I agree to the terms & conditions</label>
        </div>
        <Button
          component={Link}
          href="/home"
          type="submit"
          className="mt-16"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
