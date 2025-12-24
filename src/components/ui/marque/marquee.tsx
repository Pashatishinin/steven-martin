"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type TextTicker = {
  type: "text";
  content: string;
  duration: number;
  isDark: boolean;
};

type LogosTicker = {
  type: "logos";
  content: string[];
  duration: number;
  isDark: boolean;
};

type TickerItem = TextTicker | LogosTicker;

const logos = [
  "/assets/logos/1.png",
  "/assets/logos/2.png",
  "/assets/logos/3.png",
  "/assets/logos/4.png",
  "/assets/logos/5.png",
  "/assets/logos/1.png",
  "/assets/logos/3.png",
  "/assets/logos/4.png",
];

const text = ["PUMA SE", "PUMA SE", "PUMA SE", "PUMA SE", "PUMA SE"];

const tickersData: TickerItem[] = [
  {
    type: "text",
    content: `PUMA SE • Swiss Mountain Sports • Crans-Montana Absolutely (Women's SKI World Cup) • Hôtel du Lac, Ajudaris (Solidarity work) • HOAX and HAZE (Musicians) •`,
    duration: 20,
    isDark: false,
  },
  {
    type: "logos",
    content: logos,
    duration: 10,
    isDark: true,
  },
];

export default function Marquee() {
  const tickerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    tickerRefs.current.forEach((ticker) => {
      if (!ticker) return;

      const inner = ticker.querySelector<HTMLDivElement>(".ticker-wrap");
      const content = inner?.querySelector<HTMLDivElement>(".ticker-content");
      if (!inner || !content) return;

      // Дублируем контент
      const clone = content.cloneNode(true) as HTMLDivElement;
      inner.appendChild(clone);

      const duration = Number(ticker.dataset.duration) || 10;
      const animations: gsap.core.Tween[] = [];

      inner.querySelectorAll<HTMLElement>(".ticker-content").forEach((el) => {
        const anim = gsap.to(el, {
          x: "-100%",
          repeat: -1,
          duration,
          ease: "linear",
        });
        animations.push(anim);
      });

      ticker.addEventListener("mouseenter", () =>
        animations.forEach((a) => a.pause())
      );
      ticker.addEventListener("mouseleave", () =>
        animations.forEach((a) => a.play())
      );
    });
  }, []);

  return (
    <section className="flex flex-col justify-center gap-12 overflow-x-hidden w-screen h-100 z-20">
      {tickersData.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            tickerRefs.current[i] = el;
          }}
          data-duration={item.duration}
          className={`p-4 whitespace-nowrap ${
            item.isDark ? "bg-[#1f1f1f]" : "bg-[#70fbba]"
          } transform scale-110`}
          style={{
            transform: `rotateZ(${i === 0 ? -2 : 2}deg) scale(1.1)`,
          }}
        >
          <div className="ticker-wrap flex gap-10 items-center">
            <div className="ticker-content flex gap-10 items-center">
              {item.type === "text" ? (
                <div
                  className={`font-bold text-xl ${
                    item.isDark ? "text-white" : "text-black"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              ) : (
                item.content.map((src: string, idx: number) => (
                  <img
                    key={idx}
                    src={src}
                    alt="logo"
                    className="h-15  object-contain"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
