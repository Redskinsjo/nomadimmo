import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  useEffect,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import { StyledEngineProvider } from "@mui/material/styles";

export type AppContextProps = {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
  shouldTranslate: boolean;
  setShouldTranslate: Dispatch<SetStateAction<boolean>>;
  previousLang: string;
  setPreviousLang: Dispatch<SetStateAction<string>>;
  languages: string[];
};

export const AppContext = createContext({} as AppContextProps);

export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState<string>("fr");
  const [previousLang, setPreviousLang] = useState("fr");
  const [shouldTranslate, setShouldTranslate] = useState(false);
  const [languages, setLanguages] = useState<any>([]);

  const getLanguages = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/api/languages",
    });
    setLanguages(response.data.data);
  };
  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        previousLang,
        setPreviousLang,
        shouldTranslate,
        setShouldTranslate,
        languages,
      }}
    >
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </AppContext.Provider>
  );
}
