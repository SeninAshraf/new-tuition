"use client";

import { motion } from "motion/react";
import { FeatureBentoGrid } from "./_components/FeatureBentoGrid";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedList } from "@/components/magicui/animated-list";
import { AnimatedListDemo } from "./_components/AnimatedListDemo";
import { AnimatedTestimonialsDemo } from "./_components/AnimatedTestimonialsDemo";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function HeroSectionOne() {
  const { isSignedIn } = useUser();

  return (
    <div className="relative my-10 flex flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Welcome To Selinte Tuition"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          We’re cooking up something delicious. Website-wise 😴💻
        </motion.p>
        <Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <InteractiveHoverButton>
              {isSignedIn ? 'Go to Dashboard' : 'Get Started'}
            </InteractiveHoverButton>
          </motion.div>
        </Link>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
        </motion.div>
        <div>
          <AnimatedListDemo />
        </div>
      </div>
      <AnimatedTestimonialsDemo />
    </div>
  );
}

const Navbar = () => {
  const { isSignedIn } = useUser();
  
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Selinte Tuition</h1>
      </div>
      {!isSignedIn ? (
        <Link href={'/sign-in'}>
          <InteractiveHoverButton>Login</InteractiveHoverButton>
            
      
        </Link>
      ) : (
        <div className="flex gap-5 items-center">
          <UserButton />
          <Link href="/dashboard">
            <InteractiveHoverButton>Dashboard</InteractiveHoverButton>
          </Link>
        </div>
      )}
    </nav>
  );
};