import Header from "@/sections/header/header-section";
import HeroProject from "@/sections/hero/hero-project-section";
import Hero from "@/sections/hero/hero-section";
import NextPage from "@/sections/next-page/next-page";
import ProjectGallery from "@/sections/project-gallery/project-gallery-section";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <>
      <Header />
      <HeroProject />
      <ProjectGallery />
      <NextPage />
    </>
  );
}
