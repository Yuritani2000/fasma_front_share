import Axios from "../Axios";
import SkillModel from "../Models/SkillModel";

export type GetSkillsParam = {
  category?: string;
  number?: number;
  quantity?: number;
  sort?: string;
  tag?: string;
  token: string;
}

export async function getSkillsApi(params: GetSkillsParam) {
  try {
    return await Axios.get<SkillModel[]>('/skills', {
      headers: {
        authorization: params.token
      },
      params: {
        category: params.category,
        number: params.number,
        quantity: params.quantity,
        sort: params.sort,
        tag: params.tag
      }
    })
  } catch (e) {
    throw new Error(e)
  }
};