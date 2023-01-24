import React from "react";
import { useQuestCtx } from "../context/QuestProvider";
import { PageLayout } from "../components/PageLayout";
import { QuestList } from "../components/QuestList";

export const QuestsPage: React.FC = () => {
  const { questsLoaded } = useQuestCtx()

  return (
    <PageLayout>
      <h1>Quests Page</h1>
      {questsLoaded ?
        <QuestList />
        :
        <h2>Loading...</h2>
      }
    </PageLayout>
  )
}
