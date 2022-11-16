import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import HeroImg from "@/public/hero.png";
import FirstPart from "@/components/FirstPart";
import SecondPart from "@/components/SecondPart";
import Footer from "@/components/Footer";
import HeaderInterface from "@/components/HeaderInterface";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen absolute background-darkgray-70 flex flex-col items-center">
        <HeaderInterface />
        <Hero />
      </div>
      <Image
        src={HeroImg}
        width={0}
        height={0}
        className="h-screen w-screen"
        style={{ objectFit: "cover" }}
        alt="hero"
      />
      <div className="flex flex-col w-full items-center justify-center my-[30px]">
        <FirstPart />
        <hr className="my-[30px] text-black h-[1px] w-full" />
        <SecondPart />
      </div>
      <Footer />
    </>
  );
}
