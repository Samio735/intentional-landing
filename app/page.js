"use client";

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
        <Button className="my-10">Install for Chrome</Button>
      </a>
    </div>
  );
}
