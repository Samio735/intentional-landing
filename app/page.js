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
