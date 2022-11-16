import React from "react";
import NavigationLink from "./NavigationLink";

const links = [{ displayName: "Accueil" }, { displayName: "Acheter" }];

const Navigation = () => {
  return (
    <div className="inline-flex items-center rounded-full background-lightgray-70 py-[5px] px-[25px]">
      {links.map((link, i, arr) => {
        if (i === arr.length - 1)
          return (
            <div className="flex items-center" key={link.displayName}>
              <span className="text-[#4DC46B] text-parag mx-[6px]">/</span>
              <NavigationLink content={link.displayName} isActive={true} />
            </div>
          );
        return (
          <NavigationLink
            key={link.displayName}
            content={link.displayName}
            isActive={false}
          />
        );
      })}
    </div>
  );
};

export default Navigation;
