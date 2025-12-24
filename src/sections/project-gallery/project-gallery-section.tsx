"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NextPage from "../next-page/next-page";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGallery() {
  useEffect(() => {
    gsap.utils.toArray(".fade-img").forEach((el) => {
      gsap.fromTo(
        el as HTMLElement,
        { opacity: 0.1 },
        {
          opacity: 1,
          duration: 2,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="flex-col justify-center pt-10 px-20 items-center h-full">
      <div className="flex justify-between">
        <img
          className="fade-img cursor-pointer h-[90vh]"
          src="/assets/projects/sorayama/1.jpg"
          alt=""
        />
        <img
          className="fade-img cursor-pointer h-[80vh]"
          src="/assets/projects/sorayama/6.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-between py-10">
        <img
          className="fade-img cursor-pointer h-[60vh]"
          src="/assets/projects/sorayama/5.jpg"
          alt=""
        />
        <img
          className="fade-img cursor-pointer h-[90vh]"
          src="/assets/projects/sorayama/4.jpg"
          alt=""
        />
      </div>

      <div className="flex justify-between py-10">
        <img
          className="fade-img cursor-pointer h-[80vh]"
          src="/assets/projects/sorayama/2.jpg"
          alt=""
        />
        <img
          className="fade-img cursor-pointer h-[50vh]"
          src="/assets/projects/sorayama/7.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
