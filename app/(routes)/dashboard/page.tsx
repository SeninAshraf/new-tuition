"use client";

import React from 'react';
import { BentoDemo } from './_components/BentoDemo';
import { WobbleCardDemo } from './_components/WobbleCardDemo';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const ContainerTextFlipDemo = () => {
  return (
    <ContainerTextFlip
      words={["Explore", "Discover", "Learn"]}
    />
  );
};

export default function Dashboard() {
  return (
    <div className="relative flex flex-col items-center min-h-screen py-8 px-4">
      {/* Background effect */}
      <FlickeringGrid className="absolute inset-0 -z-10" />
      
      {/* ContainerTextFlip Demo */}
      <div className="my-8">
        <ContainerTextFlipDemo />
      </div>
      
      {/* WobbleCard Section */}
      <div className="w-full max-w-6xl my-8">
        <WobbleCardDemo />
      </div>
    </div>
  );
}