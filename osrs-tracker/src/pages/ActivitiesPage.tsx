import React from "react";
import { PageLayout } from "../components/PageLayout"
import { ActivitiesList } from "../components/ActivitiesList";

export const ActivitiesPage: React.FC = () => (
  <PageLayout>
    <header>
      <h1>Activities</h1>
    </header>
    <ActivitiesList />
  </PageLayout>
);
