import type { NextApiRequest, NextApiResponse } from "next";
// Imports the Google Cloud client library
import GooglePackage from "@google-cloud/translate";

const { Translate } = GooglePackage.v2;

// Creates a client
const translate = new Translate();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const text = "va chier des bulles";
const target = "en";

async function translateText(content: any, lang: string) {
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  const list = ["coucou", "toi", "comment ça va?", "S&apos;enregistrer"];

  // const content2 = {
  //   title: "Recherche Appartement ou Maison",
  //   description:
  //     "Recevez des projets de ventes OffMarket en lien avec votre recherche.",
  //   cta: "S&apos;enregistrer",
  // };

  const contentAfterTranslation = {};
  for (let key in content) {
    let [translations]: any = await translate.translate(
      (content as any)[key],
      lang
    );
    // translations = Array.isArray(translations) ? translations : [translations];
    (contentAfterTranslation as any)[key] = translations;
  }

  // translations.forEach((translation: any, i: number) => {
  //   console.log(`${text[i]} => (${target}) ${translation}`);
  // });

  return contentAfterTranslation;
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { initialContent, lang } = req.body;
  const data = await translateText(initialContent, lang);

  res.status(200).json({ data });
}
