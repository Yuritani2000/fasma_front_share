import { utariAxios } from "../Axios"

export type PostSignUpParam = {
  id: string,
  password: string
}

export async function signUpApi(params: PostSignUpParam) {
  try {
    return await utariAxios.post('/api/v1/signup', {
        id: params.id,
        password: params.password
    })
  } catch (e) {
    throw new Error()
  }
}

