import React from "react";
import { NavBar } from "./navigation/desktop/NavBar";
import { MobileNavBar } from "./navigation/mobile/MobileNavBar";
import { PageFooter } from "./PageFooter";

type PageLayoutProps = {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};
