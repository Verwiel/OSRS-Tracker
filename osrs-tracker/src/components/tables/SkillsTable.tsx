import { useCharacterCtx } from '../../context/CharacterProvider'

export const SkillsTable = () => {
  const { characterInfo } = useCharacterCtx()

  const levels = characterInfo.skills

  const levelsMap = levels.map((item, i) => {
    const { skill, level, exp } = item
    let iconName = skill === 'Runecrafting' ? 'runecraft' : skill.toLowerCase()
    let skillIconUrl = `https://www.runescape.com/img/rsp777/hiscores/skill_icon_${iconName}1.gif`
    return (
      <tr key={i}>
        <td>
          {i > 0 &&
            <img src={skillIconUrl} alt={skill} />
          }
          {skill}
        </td>
        <td>{level}</td>
        <td>{exp}</td>
        <td>
          {i > 0 &&
            <a href={`https://oldschool.runescape.wiki/w/${skill}/Level_up_table`} target="_blank" rel="noopener noreferrer">
              Unlocks
            </a>
          }
        </td>
      </tr>
    )
  })

  return (
    <table className='scroll'>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Level</th>
          <th>XP</th>
          <th>Wiki</th>
        </tr>
      </thead>
      <tbody>
        {levelsMap}
      </tbody>
    </table>
  );
};
