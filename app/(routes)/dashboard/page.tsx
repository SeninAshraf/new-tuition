"use client";

import React from 'react';
import { BentoDemo } from './_components/BentoDemo';
import { BentoGrid } from '@/components/ui/bento-grid';
import { WobbleCardDemo } from './_components/WobbleCardDemo';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

function ContainerTextFlipDemo() {
  return (
    <ContainerTextFlip
      words={["Explore", "Discover", "Learn"]}
    />
  );
}

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-4">
      {/* ContainerTextFlip Demo */}
      <div className="my-8">
        <ContainerTextFlipDemo />
      </div>
      
      {/* BentoGrid Section */}
      <div className="w-full max-w-6xl my-8">
        <BentoDemo />
      </div>
    
    </div>
  );
}