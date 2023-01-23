import React from "react";
import { PageLayout } from "../components/PageLayout";
import { QuestList } from "../components/QuestList";

export const QuestsPage: React.FC = () => (
  <PageLayout>
    <h1>Quests Page</h1>
    <QuestList />
  </PageLayout>
);
