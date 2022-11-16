import { AppContext, AppContextProps } from "@/pages/_app";
import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import Navigation from "./Navigation";
import NavigationLink from "./NavigationLink";

const components = {
  layout: Layout,
  navigation: Navigation,
  navigationlink: NavigationLink,
};

const Hero = (): any => {
  const initialContent = {
    title: "Recherche Appartement ou Maison",
    description:
      "Recevez des projets de ventes OffMarket en lien avec votre recherche.",
    cta: "S'enregistrer",
  };
  const { lang, setShouldTranslate, shouldTranslate } =
    useContext<AppContextProps>(AppContext);
  const [contentUpdated, setContentUpdated] = useState<any>(initialContent);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTextTranslated = useCallback(async (lang: any) => {
    const response = await axios({
      url: "http://localhost:3000/api/translate",
      method: "post",
      data: {
        initialContent,
        lang,
      },
    });

    setContentUpdated(response.data.data);
    setLoading(false);
    setShouldTranslate(false);
  }, []);

  useEffect(() => {
    if (lang && shouldTranslate) {
      getTextTranslated(lang);
    }
    setLoading(false);
  }, [shouldTranslate]);

  return (
    <div className="w-full">
      {!loading && (
        <Layout>
          <div className="w-full flex justify-center relative top-[400px]">
            <div className="w-full">
              <Navigation />
              <h1 className="text-hero mb-[35px] max-w-[635px] text-white">
                {contentUpdated.title}
              </h1>
              <p className="text-parag mb-[40px] max-w-[635px] text-white">
                {contentUpdated.description}
              </p>
              <div className="text-parag sm:h-[40px] md:h-[40px] h-[70px] text-white bg-[#00E676] sm:w-[160px] md:w-[160px] w-[220px] flex  items-center justify-center rounded-full hover:bg-[#2D2E50] cursor-pointer">
                {contentUpdated.cta}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Hero;
