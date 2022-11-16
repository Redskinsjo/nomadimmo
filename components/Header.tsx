import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Layout from "./Layout";
import { AiOutlinePlus } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import LocaleChoice from "./LocaleChoice";

const Header = ({
  position,
  bg,
  effect,
}: {
  position: string;
  bg: string;
  effect: string;
}) => {
  return (
    <div
      className={`${position} w-full h-[112.44px] py-[16px] text-white flex justify-center items-center ${bg} ${effect}`}
    >
      <Layout>
        <div className="flex-1 grow flex items-center justify-between w-full h-[96.44px] text-parag text-[22px] py-[12px] px-[15px]">
          <Image
            alt="logo"
            src={Logo}
            width={0}
            height={0}
            className="w-logo object-cover"
          />
          <div className="flex-1 flex items-center justify-end">
            <LocaleChoice />

            <div className="sm:hidden md:hidden flex items-center justify-end">
              <span className="mr-[12px] pr-[14px] flex items-center cursor-pointer">
                Acheter
                <AiOutlinePlus className="ml-[1px]" />
              </span>
              <span className="mr-[12px] pr-[14px] flex items-center cursor-pointer">
                Vendre
                <AiOutlinePlus className="ml-[1px]" />
              </span>
            </div>
          </div>

          <div className="sm:flex md:flex hidden justify-end mr-[24px]">
            <GiHamburgerMenu className="text-titles" />
          </div>

          <div className="sm:hidden h-[36px] pl-[24px] border-onleft flex items-center">
            <span className="mr-[18px] hover:text-[#00E676] cursor-pointer">
              Connexion
            </span>
            <div className="rounded-lg bg-[#00E676] h-[36px] px-[18px] py-[12px] flex items-center cursor-pointer hover:bg-[#2D2E50]">
              Inscription
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Header;
