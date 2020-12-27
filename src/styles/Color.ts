// 色に関連するStyleをenum形式で宣言する
// styled-componentによるcomponentの装飾をここの値から呼び出すことで、
// 複数人の開発でもUIがブレにくい
// 不要な色は削除すること

enum Color {
  Gray = '#424242',
  RoyalBlue = '#002366',
  LightGray = '#707070',
  Black = '#101820',
  White = '#fefefe',
  WhiteSmoke = ' #f5f5f5 ',
  Primary = '#FF7B40',
  Success = '#2185d0',
  Danger = '#FF3D00',
  Warn = '#FFB800',
  Inactive = '#8c96a9',
  Disabled = '#7A7A7A',
  SerchBox = '#F5F5F5',
  Border = '#8E8E8E',
  Secondary = '2D2D2D',
  Ashen = '#A4A4A4',
  Hover = 'rgba(0,0,0,.05)',
}

export default Color