import { utariAxios } from "../Axios"
import SignInModel from "../Models/SignInModel"

export type SignInApiParam = {
  id: string,
  password: string
}

export async function signInApi(params: SignInApiParam) {
  try {
    return await utariAxios.post<SignInModel>('/api/v2/signin', {
      params: {
        id: params.id,
        password: params.password
      }
    })
  } catch (e) {
    throw new Error()
  }
}