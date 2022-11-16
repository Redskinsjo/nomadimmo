import Image from "next/image";
import React from "react";
import Layout from "./Layout";
import Logo from "@/public/logo.png";
import RGPD from "@/public/rgpd.png";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFillTelephoneFill,
  BsFillPersonFill,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="min-h-[300px] bg-[#2D2E50] flex items-center lg:flex-wrap justify-center py-[30px]">
      <Layout>
        <div className="flex sm:flex-wrap md:flex-wrap lg:flex-wrap flex-nowrap">
          <div className="min-w-[400px] mr-[100px]">
            <div className="w-full">
              <Image
                alt="logo-footer"
                src={Logo}
                width={0}
                className="w-logo"
              />
            </div>
            <p className="text-parag text-white max-w-[400px]">
              Retrouvez toutes les meilleures opportunitées immobilière
              OffMarket.
            </p>
          </div>
          <div className="flex justify-between flex-1 sm:flex-wrap sm:mt-[30px]">
            <div className="mr-[80px] grow">
              <h3 className="text-titles my-[20px] text-white">Transaction</h3>
              <ul>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Loi Hoguet 1970
                </li>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Bon de visite
                </li>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Offre d&apos;achat
                </li>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Financement
                </li>
              </ul>
            </div>
            <div className="mr-[80px] grow">
              <h3 className="text-titles my-[20px] text-white">Informations</h3>
              <ul>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Devis travaux
                </li>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Investissements
                </li>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Copropriétaire
                </li>
                <li className="text-white hover:text-[#00E676] cursor-pointer mb-[4px]">
                  Locations
                </li>
              </ul>
            </div>
            <div className="grow">
              <h3 className="text-titles my-[20px] text-white flex flex-nowrap">
                Nous contacter
              </h3>
              <ul>
                <li className="flex mb-[4px]">
                  <BsFillPersonFill className="mr-[12px] text-[#00E676] text-parag" />
                  <span className="text-white hover:text-[#00E676] cursor-pointer">
                    Devis travaux
                  </span>
                </li>
                <li className="flex mb-[4px]">
                  <BsFillTelephoneFill className="mr-[12px] text-[#00E676] text-parag" />
                  <span className="text-white hover:text-[#00E676] cursor-pointer">
                    Investissements
                  </span>
                </li>
                <li className="flex mb-[4px]">
                  <AiOutlineMail className="mr-[12px] text-[#00E676] text-parag" />
                  <span className="text-white hover:text-[#00E676] cursor-pointer">
                    Copropriétaire
                  </span>
                </li>
                <Image alt="rgpd" src={RGPD} className="w-[90px] mb-[4px]" />
                <div className="flex text-white">
                  <span className="mr-[8px]">Messagerie:</span>
                  <BsWhatsapp className="mr-[8px] text-parag hover:text-[#00E676] cursor-pointer" />
                  <BsTelegram className="text-parag hover:text-[#00E676] cursor-pointer" />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
