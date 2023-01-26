import React from "react";
import { useQuestCtx } from "../context/QuestProvider";
import { PageLayout } from "../components/PageLayout";
import { QuestList } from "../components/QuestList";

export const QuestsPage: React.FC = () => {
  const { questsLoaded } = useQuestCtx()

  return (
    <PageLayout>
      <header>
        <h1>Quests</h1>
        <p>Click the Quest number to mark it complete!</p>
      </header>
      {questsLoaded ?
        <QuestList />
        :
        <h2>Loading...</h2>
      }
    </PageLayout>
  )
}
