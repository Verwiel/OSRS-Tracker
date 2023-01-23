import React from "react";
import { PageLayout } from "../components/PageLayout"
import { ActivitiesList } from "../components/ActivitiesList";

export const ActivitiesPage: React.FC = () => (
  <PageLayout>
    <h1>Activities Page</h1>
    <ActivitiesList />
  </PageLayout>
);
