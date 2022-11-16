import React from "react";
import Image from "next/image";
import PetiteMaison from "@/public/petite-maison.png";
import Appart from "@/public/appart.png";
import Layout from "./Layout";

const SecondPart = () => {
  return (
    <Layout>
      <div className="flex sm:flex-col my-[50px]">
        <Image
          alt="appart"
          src={Appart}
          className="mr-[50px] sm:w-full shrink md:w-[50vw]"
        />
        <div className="md:w-[50vw] flex flex-col md:justify-between">
          <h2 className="text-titles mb-[30px] mt-[30px]">
            😃 Vous êtes un PRO?
          </h2>
          <p className="text-parag font-extralight mb-[30px] w-full">
            Recevez les Appels d&apos;Offres ciblé avec des interlocuteurs
            Vérifiés.
          </p>
          <div className="flex items-start sm:items-center justify-between flex-wrap">
            {/* <div className="sm:flex sm:items-center"> */}
            <div className="w-[80px] mr-[28px] mt-[20px]">
              <Image
                alt="petite-maison"
                src={PetiteMaison}
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
                className="mr-[18px]"
              />
            </div>
            <div className="flex flex-col mr-[28px] mt-[20px]">
              <span className="text-titles">Gratuit</span>
              <span className="text-parag">Vous serez rappelé</span>
            </div>
            {/* </div> */}
            <div className="bg-[#00E676] hover:bg-[#2D2E50] rounded-[20px] sm:h-[40px] md:h-[40px] h-[70px] flex items-center justify-center px-[32px] text-white flex-1 mt-[20px]">
              Inscription PRO
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SecondPart;
