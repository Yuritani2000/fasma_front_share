// Fontに関連するStyleをenum形式で宣言する
// styled-componentによるcomponentの装飾をここの値から呼び出すことで、
// 複数人の開発でもUIがブレにくい
// 不要なフォント名やサイズは削除すること

export enum FontFamily {
  Mairyo = 'Mairyo',
  Roboto = 'Roboto',
}

export enum FontSize {
  Tiny = '0.8rem',
  Small = '1.4rem',
  Medium = '1.7rem',
  Large = '1.9rem',
  H4 = '1.4rem',
  H3 = '2.0rem',
  H2 = '2.4rem',
  H1 = '3.2rem',
}
