import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamWithCollision";
import { TailwindcssButtons } from "./TailWindButton";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full h-[100vh] flex flex-col items-center justify-center px-4 md:px-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-black dark:text-white font-sans tracking-tight leading-tight mb-1">
          Hi, I&apos;m{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="text-4xl sm:text-5xl lg:text-7xl">Aryan Kumar</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r py-2 from-purple-500 via-violet-500 to-pink-500">
              <span className="text-4xl sm:text-5xl lg:text-7xl">Aryan Kumar</span>
            </div>
          </div>
        </h2>
        <p className="text-md sm:text-xl md:text-2xl lg:text-3xl font-medium text-center text-black dark:text-white mt-2 leading-snug">
          MERN Stack Developer, develops web applications
        </p>
        <div className="mt-6 flex items-center justify-center w-full">
          <TailwindcssButtons />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
