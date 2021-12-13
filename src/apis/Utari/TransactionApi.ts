import { utariAxios } from "../Axios"

export type PostTransactionParam = {
  id: string,
  destId: string,
  amount: number
}

export async function signInApi(params: PostTransactionParam) {
  try {
    return await utariAxios.post('/api/v2/transaction', {
      params: {
        id: params.id,
        dest_id: params.destId,
        amount: params.amount
      }
    })
  } catch (e) {
    throw new Error()
  }
}