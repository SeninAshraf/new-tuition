import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Welcome Back<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          <TypingAnimation>Educational app for yeahii</TypingAnimation>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; Check it out all the 
            <span className="font-semibold text-[#5046e6]"> Notes </span>,
            <span className="font-semibold text-[#5046e6]"> Schedule </span>,
            and
            <span className="font-semibold text-[#5046e6]"> Easy Methods </span>
            . <br />
            -&gt; 100% Trust and UserFriendly. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-8 flex w-full justify-center">
          <ShinyButton className="h-12 px-8 text-lg">
            Get Started
          </ShinyButton>
        </div>
      </BoxReveal>
    </div>
  );
}