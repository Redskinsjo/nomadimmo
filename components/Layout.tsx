import React, { ReactElement } from "react";

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className="flex-1 md:max-w-[1140px] lg:max-w-[1140px] max-w-[1140px] mx-auto px-[40px] flex">
      {children}
    </div>
  );
};

export default Layout;
