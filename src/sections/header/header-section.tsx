"use client";

export default function Header() {
  return (
    <section className="fixed w-screen mix-blend-difference flex px-20 items-center justify-between py-2 z-999">
      <div className="absolute inset-0 bg-[url('/assets/bg.jpg')] bg-cover"></div>
      <h5 className="font-bold w-1/5  relative z-10">STEVEN MARTINS</h5>
      <img src="/assets/logo.png" alt="" className="h-[70px] relative z-10" />
      <h5 className="font-medium w-1/5 text-right relative z-10">MENU</h5>
    </section>
  );
}
