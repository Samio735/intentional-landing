"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export function TodoItem({ text }) {
  const [completed, setCompleted] = useState(false);
  const [deleted, setDeleted] = useState(false);
  if (deleted) return null;
  return (
    <div className="grid grid-cols-10 gap-1  justify-between items-start w-full group ">
      <div className="flex col-span-9 gap-2 ">
        <Checkbox
          checked={completed}
          onCheckedChange={() => {
            setCompleted(!completed);
          }}
          id={text}
        />
        <label
          htmlFor={text}
          className={`  text-sm break-words font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            completed ? "line-through opacity-80" : ""
          }`}
        >
          {text}
        </label>
      </div>
      <div
        className="hidden group-hover:flex opacity-60 hover:opacity-100 w-4 h-4 "
        onClick={() => setDeleted(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}
