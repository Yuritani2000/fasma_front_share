import { utariAxios } from "../Axios"

export type SignUpApiParam = {
  id: string,
  password: string
}

export async function signUpApi(params: SignUpApiParam) {
  try {
    return await utariAxios.post('/api/v1/signup', {
      params: {
        id: params.id,
        password: params.password
      }
    })
  } catch (e) {
    throw new Error()
  }
}

