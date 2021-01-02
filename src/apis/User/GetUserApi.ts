import Axios from "../Axios";
import UserModel from "../Models/UserModel";

export type GetUserParam = {
  id: string
  token: string
}

export async function getUserApi(params: GetUserParam) {
  try {
    return await Axios.get<UserModel>('/user', {
      headers: {
        authorization: params.token
      },
      params: {
        studentID: params.id
      }
    })
  } catch (e) {
    throw new Error(e)
  }
};