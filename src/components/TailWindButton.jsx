"use client";
import React from "react";
import { ButtonsCard } from "./ui/TailwindButtonCss";

export function TailwindcssButtons() {
  const filteredButtons = buttons.filter((button) => button.name === "Invert");

  return (
    <div className="px-4 my-5 w-full flex justify-center">
      <div className="flex justify-center">
        {filteredButtons.map((button, idx) => (
          <ButtonsCard key={idx}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}

export const buttons = [
  {
    name: "Invert",
    description: "Simple button that inverts on hover",
    component: (
      <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Download Resume
      </button>
    ),
  },
];
