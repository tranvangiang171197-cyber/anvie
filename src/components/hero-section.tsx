"use client";

import { useState } from "react";
import { ButtonLink } from "./button-link";
import { AnimateOnScroll } from "./animate-on-scroll";

interface HeroSectionProps {
  title1: string;
  title2: string;
  subtitle: string;
  images: string[];
}

export function HeroSection({ title1, title2, subtitle, images }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden text-white">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-[400px] md:min-h-[720px] flex-col items-center justify-center gap-4 md:gap-6 text-center px-6 py-16 md:py-20">
        <AnimateOnScroll animation="fadeInDown" delay={0} duration={0.8}>
          <h1 className="font-bold text-[32px] mt-8 md:mt-0 leading-tight md:text-[56px]">
            {title1} <br /> {title2} <br />
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
          <p className="max-w-3xl text-base text-white lg:text-xl font-normal px-4">
            {subtitle}
          </p>
        </AnimateOnScroll>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 md:mt-0">
          <ButtonLink href="/du-an" label="Khám phá ngay" />
        </div>
        <div className="mt-6 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "h-2 w-8 bg-[#B38147] rounded-[12px]"
                  : "h-2 w-2 bg-white rounded-full hover:bg-[#B38147] hover:w-6"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

