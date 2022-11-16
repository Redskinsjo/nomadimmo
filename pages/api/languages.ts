import type { NextApiRequest, NextApiResponse } from "next";
// Imports the Google Cloud client library
import GooglePackage from "@google-cloud/translate";

const { Translate } = GooglePackage.v2;

// Creates a client
const translate = new Translate();

async function listLanguages() {
  // Lists available translation language with their names in English (the default).
  const [languages] = await translate.getLanguages();

  //   console.log("Languages:");
  //   languages.forEach((language: any) => console.log(language));

  return languages;
}

type Data = {
  data: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await listLanguages();
  res.status(200).json({ data });
}
