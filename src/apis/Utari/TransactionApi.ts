import { utariAxios } from "../Axios"

export type SignInApiParam = {
  id: string,
  sendId: string,
  amount: number
}

export async function signInApi(params: SignInApiParam) {
  try {
    return await utariAxios.post('/api/v2/transaction', {
      params: {
        id: params.id,
        send_id: params.sendId,
        amount: params.amount
      }
    })
  } catch (e) {
    throw new Error()
  }
}