import Axios from "../Axios";
import SkillModel from "./Model";

export type GetSkillsParam = {
  category: string
  number: number
  quantity: number
  sort: string
}

export async function getSkillsApi({ category, number, quantity, sort }: GetSkillsParam) {
  try {
    return await Axios.get<SkillModel[]>('/skills', {
      params: {
        category,
        number,
        quantity,
        sort
      }
    })
  } catch (e) {
    throw new Error(e)
  }
};