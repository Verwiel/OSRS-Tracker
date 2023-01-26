import { useCharacterCtx } from '../context/CharacterProvider'

export const HighscoresList = () => {
  const { characterInfo } = useCharacterCtx()


  const skills = characterInfo.skills.filter(skill => +skill.rank > 0)
  const activities = characterInfo.activities.filter(activity => +activity.rank > 0)

  const skillsMap = skills.map((item, i) => {
    const { skill, rank, level, exp } = item
    let iconName = skill === 'Runecrafting' ? 'runecraft' : skill.toLowerCase()
    let skillIconUrl = `https://www.runescape.com/img/rsp777/hiscores/skill_icon_${iconName}1.gif`
    return (
      <tr key={skill}>
        <td>
          {i > 0 &&
            <img src={skillIconUrl} alt={`${skill} icon`} />
          }
          {skill}
        </td>
        <td>{rank}</td>
        <td>{level}</td>
        <td>{exp}</td>
      </tr>
    )
  })


  const activitiesMap = activities.map((item, i) => {
    const { activity, rank, score, icon } = item
    let activityIconUrl = `https://www.runescape.com/img/rsp777/game_icon_${icon}.png`
    return (
      <tr key={activity}>
        <td>
          <img src={activityIconUrl} alt={`${activity} icon`} />
          {activity}
        </td>
        <td>{rank}</td>
        <td></td>
        <td>{score}</td>
      </tr>
    )
  })

  return (
    <table className='scroll'>
      <tbody>
        <tr>
          <th>Skill</th>
          <th>Rank</th>
          <th>Level</th>
          <th>XP</th>
        </tr>
        {skillsMap}
        <tr>
          <th>Minigame</th>
          <th>Rank</th>
          <th></th>
          <th>Score</th>
        </tr>
        {activitiesMap}
      </tbody>
    </table>
  );
};
