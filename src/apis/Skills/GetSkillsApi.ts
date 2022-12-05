import Axios from "../Axios";
import SkillModel from "../Models/SkillModel";

export type GetSkillsParam = {
  category: number,
  offset: number,
  limit: number
}

export async function getSkillsApi(params: GetSkillsParam) {
  try {
    return await Axios.get<SkillModel[]>('/skill', {
      headers: {
      },
      params: {
        category: params.category,
        offset: params.offset,
        limit: params.limit
      }
    })
  } catch (e) {
    throw new Error(e) 
  }
};