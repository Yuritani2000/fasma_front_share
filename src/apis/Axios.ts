// ここでURLの設定やaxiosの基本的な設定を行い、他のapisにて流用する
import axios from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:3001/'
})