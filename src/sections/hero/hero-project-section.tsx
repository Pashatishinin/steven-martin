import Copy from "@/components/animation/copy";
import Hero from "@/sections/hero/hero-section";
import Image from "next/image";

export default function HeroProject() {
  return (
    <section className="px-20 h-screen ">
      <div className="flex gap-10 items-end">
        <img
          className="image h-[90vh] cursor-pointer z-10 "
          src="/assets/projects/sorayama/main.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between pt-[100px] h-screen">
          <div className="flex flex-col gap-10">
            <Copy blockColor="#70fbba">
              <p className="text-md uppercase w-[700px] tracking-wide">
                PUMA’s collaboration with Japanese illustrator Hajime Sorayama
                marks his second foray into the realm of artistic fusion, this
                time dedicated to celebrating the Year of the Dragon. Renowned
                for his detailed and provocative portrayals of feminine robots,
                Sorayama—who describes his style as “superrealism”—brings a
                unique perspective to this collaboration featuring the
                mythological dragon.
              </p>
            </Copy>
            <Copy blockColor="#70fbba">
              <p className="text-md uppercase w-[700px] tracking-wide">
                Dragon-themed artworks adorn hoodies, T-shirts, and silver
                remakes of two PUMA sneakers, one with a lower silhouette and
                one chunkier. Responding to how he envisioned this collection
                compared to the first, Sorayama states: “For this collection to
                celebrate the Year of the Dragon, PUMA has selected the dragon
                artworks I have created in the past to design this
                collaboration. It’s a lucky charm, get the items and receive
                good luck everyone!”
              </p>
            </Copy>
            <Copy blockColor="#70fbba">
              <p className="text-md w-[700px] uppercase tracking-wide">
                The dragon, a very important figure in Asian mythology, was
                considered by the artist from an aesthetic rather than symbolic
                point of view. When asked about his perception of dragons in
                culture and art, Sorayama revealed: “I don’t have strong
                feelings towards dragons. In Japan, dragons are depicted with
                three fingers, but in China, they are said to have five fingers.
                The interesting thing about legends is that they change a lot
                depending on the country and generation, like a message game.”
              </p>
            </Copy>
          </div>
          <div className="py-5">
            <Copy blockColor="#70fbba">
              <h3 className=" font-black text-4xl tracking-tight">SORAYAMA</h3>
            </Copy>
            <p className="text-[10px]">SCROLL TO SEE MORE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
