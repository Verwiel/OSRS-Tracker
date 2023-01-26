import React from "react";
import { PageLayoutCharacter } from "../components/PageLayoutCharacter";
import { ActivitiesList } from "../components/tables/ActivitiesList";

export const ActivitiesPage: React.FC = () => (
  <PageLayoutCharacter>
    <header>
      <h1>Activities</h1>
    </header>
    <section>
      <ActivitiesList />
    </section>
  </PageLayoutCharacter>
);
