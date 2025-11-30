"use client";

import { AnimateOnScroll } from "./animate-on-scroll";
import { ButtonLink } from "./button-link";
import Image from "next/image";

interface SpaceCriteriaCardProps {
  item: {
    key: string;
    title: string;
    description_title__1: string;
    description_title__2: string;
    description: string;
  };
  index: number;
}

export function AnimatedSpaceCriteriaCard({ item, index }: SpaceCriteriaCardProps) {
  return (
    <AnimateOnScroll
      animation="fadeInUp"
      delay={index * 0.1}
      duration={0.6}
    >
      <div className="bg-black/32 p-4 md:p-5 text-left backdrop-blur flex flex-col justify-between min-h-[238px] md:min-h-[433px]">
        <div>
          <p className="text-4xl md:text-[64px] font-semibold text-[#B38147]">{item.key}</p>
          <p className="mt-1 text-lg md:text-[24px] font-medium text-[#B38147] uppercase">{item.title}</p>
        </div>
        <div>
          <p className="mt-2 text-base md:text-[18px] text-white font-bold">{item.description_title__1} <br /> {item.description_title__2}</p>
          <p className="mt-2 text-sm md:text-base text-white font-normal">{item.description}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

interface ScenarioCardProps {
  card: {
    title_1: string;
    title_2: string;
    button: string;
    image: string;
  };
  index: number;
}

export function AnimatedScenarioCard({ card, index }: ScenarioCardProps) {
  return (
    <AnimateOnScroll
      animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
      delay={index * 0.15}
      duration={0.7}
    >
      <div className="overflow-hidden">
        <div
          className="md:min-h-[400px] min-h-[238px] bg-cover bg-center flex flex-col justify-between"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div></div>
          <div className="flex flex-row gap-3 px-4 md:px-6 py-4 md:py-6 items-center justify-between md:min-h-[106px] min-h-[64px] bg-black/32 backdrop-blur">
            <div>
              <h4 className="text-base md:text-[24px] font-semibold text-white">
                {card.title_1} <br /> {card.title_2}
              </h4>
            </div>
            <ButtonLink href="/lien-he" label={card.button} />
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

interface MilestoneCardProps {
  milestone: {
    value: string;
    label: string;
    description: string;
    image: string;
  };
  index: number;
}

export function AnimatedMilestoneCard({ milestone, index }: MilestoneCardProps) {
  return (
    <AnimateOnScroll
      animation="scaleIn"
      delay={index * 0.1}
      duration={0.6}
    >
      <div
        className="h-[480px] bg-cover bg-center"
        style={{ backgroundImage: `url(${milestone.image})` }}
      >
        <div className="flex flex-col justify-between p-4 md:p-6 text-white w-full h-full">
          <div>
            <p className="text-4xl md:text-5xl lg:text-[64px] font-bold">
              {milestone.value}
            </p>
            <span className="ml-1 text-xl md:text-2xl lg:text-[32px] font-semibold">{milestone.label}</span>
          </div>
          <div>
            <p className="text-sm md:text-base text-white">{milestone.description}</p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

interface RuleCardProps {
  item: {
    title: string;
    image: string;
    description: string;
  };
  index: number;
}

export function AnimatedRuleCard({ item, index }: RuleCardProps) {
  return (
    <AnimateOnScroll
      animation="fadeInUp"
      delay={index * 0.15}
      duration={0.7}
    >
      <div className="bg-black/60 p-4 md:p-6 text-left flex flex-col justify-between min-h-[300px] md:min-h-[400px]">
        <div>
          <p className="font-semibold text-[#B38147]">
            <Image src={item.image} alt={item.title} width={50} height={50} className="md:w-[60px] md:h-[60px]" />
          </p>
        </div>
        <div>
          <p className="mt-2 text-xl md:text-2xl lg:text-[32px] text-white font-bold">{item.title}</p>
          <p className="mt-2 text-sm md:text-base text-white font-normal">{item.description}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

