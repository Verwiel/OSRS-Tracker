import { useCharacterCtx } from '../context/CharacterProvider'

export const ActivitiesList = () => {
  const { characterInfo } = useCharacterCtx()

  // console.log(characterInfo.skills)
  const levels = characterInfo.activities.filter(activity => +activity.score > 0)

  const levelsMap = levels.map((item, i) => {
    const { activity, score, icon } = item
    let activityIconUrl = `https://www.runescape.com/img/rsp777/game_icon_${icon}.png`
    return (
      <div key={i}>
        <img src={activityIconUrl} alt={activity} />
        <p>{activity}</p>
        <p>{score}</p>
      </div>
    )
  })

  return (
    <section>
      {levelsMap}
    </section>
  );
};
