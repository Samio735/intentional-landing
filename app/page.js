"use client";
import Image from "next/image";
import TodoList from "../components/TodoList";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";
import { Subscribe } from "@/components/Subscribe";

export default function Home() {
  return (
    <div className=" flex flex-col items-center">
      <ModeToggle />
      <svg
        className="absolute top-4 left-4 ms-2 "
        width="30"
        height="30"
        viewBox="0 0 303 303"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_230_84)">
          <rect width="303" height="303" fill="black" />
          <path
            d="M124.923 370V180.956H177.353V370H124.923ZM151.261 156.587C143.466 156.587 136.779 154.003 131.2 148.834C125.702 143.582 122.954 137.305 122.954 130.003C122.954 122.783 125.702 116.588 131.2 111.419C136.779 106.167 143.466 103.542 151.261 103.542C159.056 103.542 165.702 106.167 171.199 111.419C176.779 116.588 179.568 122.783 179.568 130.003C179.568 137.305 176.779 143.582 171.199 148.834C165.702 154.003 159.056 156.587 151.261 156.587Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_230_84">
            <rect width="303" height="303" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2 className="text-xl  my-6 font-bold">intentional</h2>

      <div className="h-10"></div>
      <h1 className="text-6xl max-w-lg my-10 font-bold text-center">
        Anti-distractions, focused browsing
      </h1>
      <p className="text-center max-w-xl">
        Intentional is an app that allows you to set goals for your browsing
        session, it then blocks you from accessing websites that are irrelevant
        to your goals
      </p>
      <Subscribe />
    </div>
  );
}
