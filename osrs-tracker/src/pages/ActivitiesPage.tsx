import React from "react";
import { PageLayoutCharacter } from "../components/PageLayoutCharacter";
import { ActivitiesTable } from "../components/tables/ActivitiesTable";

export const ActivitiesPage: React.FC = () => (
  <PageLayoutCharacter>
    <header>
      <h1>Activities</h1>
    </header>
    <section>
      <ActivitiesTable />
    </section>
  </PageLayoutCharacter>
);
