// ここでURLの設定やaxiosの基本的な設定を行い、他のapisにて流用する
import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_HEROKU_MOCK_SERVER
})

export const utariAxios = axios.create({
  baseURL: process.env.UTARI_API_SERVER
})