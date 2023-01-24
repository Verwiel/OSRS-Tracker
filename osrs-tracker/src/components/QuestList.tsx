import { useQuestCtx } from "../context/QuestProvider";

export const QuestList = () => {
  const { questList } = useQuestCtx()

  const questMap = questList.sort((a,b) => a.number - b.number).map((quest, i) => {
    return (
      <tr key={i}>
        <td>{quest.number}</td>
        <td>{quest.name}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Quest</th>
          <th>Link</th>
          <th>Difficulty</th>
          <th>Length</th>
          <th>Members</th>
          <th>Series</th>
          <th>start point</th>
          <th>release date</th>
          <th>description</th>
          <th>requirements</th>
          <th>items</th>
          <th>reccommended</th>
          <th>enemies</th>
        </tr>
      </thead>
      <tbody>
        {questMap}
      </tbody>
    </table>
  );
};