// 色に関連するStyleをenum形式で宣言する
// styled-componentによるcomponentの装飾をここの値から呼び出すことで、
// 複数人の開発でもUIがブレにくい
// 不要な色は削除すること

enum Color {
  Gray = '#424242',
  RoyalBlue = 'royalblue',
  LightGray = '#70757a',
  Black = '#101820',
  White = '#fefefe',
  WhiteSmoke = 'whitesmoke',
  Primary = '#FF7B40',
  Success = '#2185d0',
  Danger = '#FF3D00',
  Warn = '#FFB800',
  Inactive = '#8c96a9',
  Disabled = '#C6CBD5',
}

export default Color