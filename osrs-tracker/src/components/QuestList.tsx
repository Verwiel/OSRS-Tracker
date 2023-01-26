import { useQuestCtx } from "../context/QuestProvider";
import { QuestModal } from "./QuestModal";
import { QuestTable } from "./tables/QuestTable";

export const QuestList = () => {

  return (
    <article id='quest-list'>
      <QuestModal />
      <QuestTable />
    </article>
  );
};