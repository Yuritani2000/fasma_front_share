export type Skill = {
  id: number,
  name: string,
  thumbnail: string,
  description: string,
  price: number,
  category: string,
  tags: string[]
}

export type SkillsState = Skill[]

export type TopPageSkillsState = {
  programming: Skill[],
  design: Skill[],
  math: Skill[]
}
