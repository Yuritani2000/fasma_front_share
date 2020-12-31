export type Skill = {
  id: number,
  name: string,
  thumbnail: string,
  description: string,
  price: number,
  category: string,
  tags: string[]
}

export type Skills = Skill[]

type TopPageSkillsState = {
  programming: Skill[],
  design: Skill[],
  math: Skill[]
}

export default TopPageSkillsState;