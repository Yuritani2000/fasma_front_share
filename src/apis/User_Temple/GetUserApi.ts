// 1エンドポイントごとにフォルダを分ける
// その中にCRUD1つ1つのフォルダを作成する
// 命名規則は CRUD + State + Api

import Axios from "../Axios";
import UserModel from "./Model";

export type GetUserParam = {
  id: string
}

export async function getUserApi({ id }: GetUserParam) {
  try {
    return await Axios.get<UserModel>('/user', {
      params: {
        id
      }
    })
  } catch (e) {
    throw new Error(e)
  }
};