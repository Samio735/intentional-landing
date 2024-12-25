"use client";

import Image from "next/image";
import { ModeToggle } from "../components/ModeToggle";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between items-center px-4">
        <h2 className="text-xl my-6 font-bold">intentional</h2>
        <a
          href="https://www.producthunt.com/posts/intentional?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-intentional"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=448826&theme=neutral&period=daily"
            alt="Intentional - AI&#0032;distractions&#0032;blocker&#0032;for&#0032;focused&#0032;work | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            width="250"
            height="54"
          />
        </a>
      </div>

      <div className="h-16"></div>
      <h1 className="text-6xl max-w-xl my-14 font-bold text-center">
        Do deep work, enter Flow state
      </h1>
      <p className="text-center max-w-2xl">
        Intentional is an app that allows you to set goals for your deep work
        session, it then blocks you from accessing websites that are irrelevant
        to your goals. Enabeling you to achieve flow state.
      </p>
      <div className="w-full max-w-2xl my-10">
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/SFdi0T8Fapk"
            title="Intentional App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <a href="https://chromewebstore.google.com/detail/intentional/dgigjfomhppeemkonaodgbghfgbelpac">
        <Button className="my-10 mb-20">Install for Chrome</Button>
      </a>
      <div className="flex w-full flex-col xl:flex-row justify-end my-16 px-4 items-center">
        <h1 className="text-5xl xl:text-7xl max-w-[280px] xl:max-w-sm my-14 font-bold text-center xl:text-left xl:ms-4 mt-20 order-2 xl:order-1">
          Unlock Your Potential.
        </h1>
        <Image
          className="order-1 xl:order-2 w-full xl:w-auto"
          src={"/Screenshot-showcase.png"}
          width={900}
          height={500}
          alt="screenshot"
        />
      </div>
      <div className="flex w-full flex-col-reverse xl:flex-row my-16 px-4 items-center">
        <Image
          className="w-full xl:w-auto"
          src={"/stop.png"}
          width={900}
          height={500}
          alt="screenshot"
        />
        <h1 className="text-5xl xl:text-7xl max-w-[280px] xl:max-w-sm my-14 font-bold text-center xl:text-left xl:ms-10 mt-20">
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
