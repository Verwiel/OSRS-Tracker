interface Activity {
  activity: string
  rank: string
  score: string
  icon: string
}

interface Skill {
  skill: string
  rank: string
  level: string
  exp: string
}

export interface CharacterType {
  skills: Array<Skill>,
  activities: Array<Activity>
}
