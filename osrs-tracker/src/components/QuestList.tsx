import { useQuestCtx } from "../context/QuestProvider";
import { QuestModal } from "./QuestModal";

export const QuestList = () => {
  const { questList, openModal } = useQuestCtx()

  const questMap = questList.sort((a,b) => a.number - b.number).map((quest, i) => {
    return (
      <div key={i}>
        <span onClick={() => openModal(quest)}>
          {quest.name} (#{quest.number})
        </span>
      </div>
    )
  })

  return (
    <article id='quest-list'>
      <QuestModal />
      {questMap}
    </article>
  );
};