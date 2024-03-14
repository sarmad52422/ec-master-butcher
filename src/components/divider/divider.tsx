"use client";
import React from "react";

interface DividerProps {
  content: string | null;
}

const Divider: React.FC<DividerProps> = ({ content }) => {
  return (
    <div className="flex flex-col w-full border-opacity-50 mt-1">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center font-bold font-sans ">
        {content}
      </div>
    </div>
  );
};

export default Divider;
