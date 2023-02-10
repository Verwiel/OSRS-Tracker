import { useCharacterCtx } from '../../context/CharacterProvider'

export const ActivitiesTable = () => {
  const { characterInfo } = useCharacterCtx()

  // console.log(characterInfo.skills)
  const activities = characterInfo.activities.filter(activity => +activity.score > 0)

  const activitiesMap = activities.map((item, i) => {
    const { activity, score, icon } = item
    let activityIconUrl = `https://www.runescape.com/img/rsp777/game_icon_${icon}.png`
    return (
      <tr key={i}>
        <td>
          <img src={activityIconUrl} alt={activity} />
          {activity}
        </td>
        <td> {score} </td>
      </tr>
    )
  })

  return (
    <table className='scroll'>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {activitiesMap}
      </tbody>
    </table>
  );
};
