import React, { useEffect, useState } from "react";
import Header from "./Header";

const HeaderInterface = () => {
  const [headerToFixed, setHeaderToFixed] = useState(false);

  const scrollHandler = (e: any) => {
    if (window.scrollY > window.innerHeight) setHeaderToFixed(true);
    if (window.scrollY < window.innerHeight) setHeaderToFixed(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      {headerToFixed && (
        <Header position="fixed top-0" bg="bg-[#2D2E50]" effect="fadeIn" />
      )}

      <Header position="absolute" bg="" effect="" />
    </>
  );
};

export default HeaderInterface;
