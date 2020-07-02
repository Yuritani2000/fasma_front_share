// Fontに関連するStyleをenum形式で宣言する
// styled-componentによるcomponentの装飾をここの値から呼び出すことで、
// 複数人の開発でもUIがブレにくい
// 不要なフォント名やサイズは削除すること

export enum FontFamily {
  Mairyo = 'Mairyo',
  Roboto = 'Roboto',
}

export enum FontSize {
  Small = 13,
  Medium = 16,
  Large = 20
}
