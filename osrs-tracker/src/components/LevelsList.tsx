import { useCharacterCtx } from '../context/CharacterProvider'

export const LevelsList = () => {
  const { characterInfo } = useCharacterCtx()

  // console.log(characterInfo.skills)
  const levels = characterInfo.skills

  const levelsMap = levels.map((item, i) => {
    const { skill, level, exp } = item
    let iconName = skill === 'Runecrafting' ? 'runecraft' : skill.toLowerCase()
    let skillIconUrl = `https://www.runescape.com/img/rsp777/hiscores/skill_icon_${iconName}1.gif`
    return (
      <div key={i}>
        {i > 0 &&
          <img src={skillIconUrl} alt={skill} />
        }
        <p>{skill}</p>
        <p>{level}</p>
        <p>{exp}</p>
      </div>
    )
  })

  return (
    <section>
      {levelsMap}
    </section>
  );
};
