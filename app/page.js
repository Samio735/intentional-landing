"use client";

import Image from "next/image";
import { ModeToggle } from "../components/ModeToggle";

import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className=" flex flex-col items-center">
      <ModeToggle />

      <h2 className="text-xl  my-6 font-bold">intentional</h2>

      <div className="h-16"></div>
      <h1 className="text-6xl max-w-xl my-14 font-bold text-center">
        Do deep work, enter Flow state
      </h1>
      <p className="text-center max-w-2xl">
        Intentional is an app that allows you to set goals for your deep work
        session, it then blocks you from accessing websites that are irrelevant
        to your goals. Enabeling you to achieve flow state.
      </p>
      {/* <Subscribe /> */}
      <a href="https://chromewebstore.google.com/detail/intentional/dgigjfomhppeemkonaodgbghfgbelpac">
        <Button className="my-10 mb-20">Install for Chrome</Button>
      </a>
      <div className="flex w-full justify-end my-16">
        <h1 className="text-7xl max-w-sm my-14 font-bold ms-20 mt-20">
          Unlock Your Potential.
        </h1>
        <Image
          className=""
          src={"/Screenshot-showcase.png"}
          width={900}
          height={500}
          alt="screenshot"
        />
      </div>
      <div className="flex w-full  my-16">
        <Image
          className=""
          src={"/stop.png"}
          width={900}
          height={500}
          alt="screenshot"
        />
        <h1 className="text-7xl max-w-sm my-14 font-bold ms-10 mt-20 ">
          Stop Getting Distracted.
        </h1>
      </div>
      <div>
        <p className="text-center text-gray-300 my-10">
          © 2024 Made by Samy Rahim.
        </p>
      </div>
    </div>
  );
}
