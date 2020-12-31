import Axios from "../Axios";
import UserModel from "./Model";

export type GetUserParam = {
  id: string
  token: string
}

export async function getUserApi({ id, token }: GetUserParam) {
  try {
    return await Axios.get<UserModel>('/user', {
      headers: {
        authorization: token
      },
      params: {
        id
      }
    })
  } catch (e) {
    throw new Error(e)
  }
};