import { utariAxios } from "../Axios"
import BalanceModel from "../Models/BalanceModel"

export type PostBalanceParam = {
  token: string,
  id: string
}

export async function balanceApi(params: PostBalanceParam) {
  try {
    return await utariAxios.post<BalanceModel>('/api/v2/balance', {
      headers: {
        authorization: params.token
      },
      params: {
        id: params.id
      }
    })
  } catch (e) {
    throw new Error()
  }
}