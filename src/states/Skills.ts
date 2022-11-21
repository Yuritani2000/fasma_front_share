export type Skill = {
  id: number,
  name: string,
  thumbnail: string,
  description: string,
  price: number,
  categories_name: string,
  status: number,
  seller_name: string,
  seller_school_mail: string,
  buyer_name: string,
  buyer_school_mail: string,
  transaction_update_at: number,
}

export type SkillsState = Skill[]

export type TopPageSkillsState = {
  programming: Skill[],
  design: Skill[],
  math: Skill[]
}
