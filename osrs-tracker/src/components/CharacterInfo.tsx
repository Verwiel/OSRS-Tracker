import { useCharacterCtx } from "../context/CharacterProvider";

export const CharacterInfo = () => {
  const { characterInfo } = useCharacterCtx()
  console.log(characterInfo)

  return (
    <section>
      <p>info</p>
    </section>
  );
};
