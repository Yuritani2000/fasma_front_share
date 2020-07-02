// ここでサーバから取得する型を宣言する
// 型名は〜Modelとする。Stateと全く同じ型だったとしても宣言した方が良い
// （後々サーバやStateの型が変更された場合にも対応できるようにするため）

type UserModel = {
  name: string,
  age: number
}

export default UserModel;