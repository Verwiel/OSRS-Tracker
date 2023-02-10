import React from "react";
import { NavBar } from "./navigation/desktop/NavBar";
import { MobileNavBar } from "./navigation/mobile/MobileNavBar";
import { PageFooter } from "./PageFooter";
import { CharacterPanel } from './CharacterPanel'

type PageLayoutCharacterProps = {
    children: React.ReactNode;
}

export const PageLayoutCharacter: React.FC<PageLayoutCharacterProps> = ({ children }) => {
    return (
        <div className="page-layout">
            <NavBar />
            <MobileNavBar />
                <main className="page-layout__content-split">
                    <section>
                        {children}
                    </section>
                    <CharacterPanel />
                </main>
            <PageFooter />
        </div>
    );
};
