// 色に関連するStyleをenum形式で宣言する
// styled-componentによるcomponentの装飾をここの値から呼び出すことで、
// 複数人の開発でもUIがブレにくい
// 不要な色は削除すること

enum Color {
  Gray = '#424242',
  RoyalBlue = 'royalblue',
  LightGray = '#70757a',
  WhiteSmoke = 'whitesmoke'
}

export default Color