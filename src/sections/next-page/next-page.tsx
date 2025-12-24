"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useParallax from "@/components/hooks/useParallax";

gsap.registerPlugin(ScrollTrigger);

export default function NextPage() {
  const imageRef = useRef<HTMLImageElement>(null);

  useParallax(imageRef, 30, "60%");
  return (
    <section className="  pt-10 px-20  h-screen relative">
      <div className="overflow-clip">
        <div ref={imageRef}>
          <img
            className=" h-full scale-130"
            src="/assets/projects/1.jpg"
            alt=""
          />
        </div>
      </div>

      <h1 className="font-bold text-6xl tracking-[-0.1em] absolute bottom-[10%] left-[50%] translate-x-[-50%] leading-[150%] border-b-4 border-transparent hover:border-white transition-all duration-300 cursor-pointer">
        Next Project
      </h1>
    </section>
  );
}
