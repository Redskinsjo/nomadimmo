import React from "react";

const NavigationLink = ({
  content,
  isActive,
}: {
  content: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={
        isActive ? "text-white text-parag" : "text-[#4DC46B] text-parag"
      }
    >
      {content}
    </div>
  );
};

export default NavigationLink;
