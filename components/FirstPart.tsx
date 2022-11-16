import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Layout from "./Layout";

const FirstPart = () => {
  return (
    <Layout>
      <div className="w-full my-[50px]">
        <h2 className="text-titles font-semibold">
          😇 Accès OffMarket - Avant-premières
        </h2>
        <p className="mt-[30px] mb-[10px] text-parag text-gray-500 font-extralight text-justify">
          Nous développons un réseau professionnel OffMarket, pour vous proposer
          le meilleur service de chasse immobilière. Nous avons aussi accès à
          plus de 900 sites d&apos;annonces et logiciels immobilier. Il ne faut
          pas oublier que l&apos;essentiel du métier de chasseur immobilier est
          de mieux comprendre le marché pour rééquilibrer le rapport de force
          lors de la réalisation de la transaction à votre profit.
        </p>
        <h2 className="text-titles font-semibold">
          Trouver la meilleure façon d&apos;acheter
        </h2>
        <p className="mt-[30px] mb-[10px] text-parag text-gray-500 font-extralight text-justify">
          Dans ce contexte où il faut être aux aguets à plein temps, le chasseur
          immobilier va vous décharger de toutes les tâches chronophages, comme
          celles les plus risquées voire techniques. Grâce à lui, vous allez :
        </p>
        <div className="flex flex-col">
          <div className="flex items-center">
            <AiOutlineCheck className="text-[#00E676] text-emoji mr-[12px]" />
            <p className="text-parag text-gray-500 font-extralight text-justify">
              Accédez facilement à TOUS les biens de qualité
            </p>
          </div>
          <div className="flex items-center">
            <AiOutlineCheck className="text-[#00E676] text-emoji mr-[12px]" />
            <p className="text-parag text-gray-500 font-extralight text-justify">
              Ne passez pas à côté des meilleures ventes
            </p>
          </div>
          <div className="flex items-center">
            <AiOutlineCheck className="text-[#00E676] text-emoji mr-[12px]" />
            <p className="text-parag text-gray-500 font-extralight text-justify">
              Prenez les meilleures décisions grâce à nos conseils
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FirstPart;
