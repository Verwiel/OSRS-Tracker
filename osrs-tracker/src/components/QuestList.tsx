import { useQuestCtx } from "../context/QuestProvider";
import { QuestModal } from "./QuestModal";
import { QuestTable } from "./tables/QuestTable";
import { QuestFilters } from "./QuestFilters";

export const QuestList = () => {

  return (
    <article id='quest-list'>
      <QuestModal />
      <QuestFilters />
      <QuestTable />
    </article>
  );
};