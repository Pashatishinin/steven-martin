"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Marquee from "@/components/ui/marque/marquee";

const list = [
  { title: "SORAYAMA", src: "/assets/1.png" },
  { title: "TEAM 247", src: "/assets/2.png" },
  { title: "STREETGLAM", src: "/assets/3.png" },
  { title: "SPEEDSTERS", src: "/assets/4.png" },
];

export default function Hero() {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    imagesRef.current.forEach((img, i) => {
      // Создаем анимацию при наведении
      if (!img) return;
      const bg = bgRefs.current[i];
      if (!bg) return;

      // Создаем анимацию тряски + scale
      const shakeTl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
      shakeTl.to(img, { x: 2, rotationZ: 1, duration: 0.3, ease: "easeInOut" });
      shakeTl.to(img, {
        x: -2,
        rotationZ: -1,
        duration: 0.3,
        ease: "easeInOut",
      });

      // Hover эффекты
      img.addEventListener("mouseenter", () => {
        // Запускаем тряску
        shakeTl.play();
        // Scale один раз
        gsap.to(img, { scale: 1.3, duration: 0.3, ease: "easeInOut" });
        gsap.to(bg, { opacity: 1, scale: 1.3, duration: 0.4, ease: "easeOut" });
      });

      img.addEventListener("mouseleave", () => {
        // Останавливаем тряску
        shakeTl.pause(0);
        // Возвращаем scale
        gsap.to(img, { scale: 1, duration: 0.3, ease: "easeInOut" });
        gsap.to(bg, { opacity: 0, scale: 0.1, duration: 0.4, ease: "easeOut" });
      });
    });
  }, []);

  return (
    <section className="flex justify-center items-center py-50  h-screen">
      <div className="flex gap-6 bg-transparent">
        {list.map((num, i) => (
          <a href="/project" key={i}>
            <div className=" h-full relative bg-transparent flex flex-col gap-5">
              <div
                ref={(el) => {
                  bgRefs.current[i] = el;
                }}
                className="absolute top-0  left-0 w-full h-full opacity-0 pointer-events-none z-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)",
                }}
              ></div>
              <img
                ref={(el) => {
                  imagesRef.current[i] = el; // просто присваиваем
                }}
                className="image h-[200px] cursor-pointer z-10"
                src={num.src}
                alt=""
              />
              <h3 className="text-center text-white mt-2 font-bold text-xl leading-[90%] tracking-widest">
                {num.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
      <div className="absolute -bottom-30 ">
        <Marquee />
      </div>
    </section>
  );
}
