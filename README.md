## はじめに
- _Templeと書かれているフォルダおよびファイルは後々削除すること（コード記述の参考用に置いています）
- 現状のフォルダ構成ですべてのパターンを網羅できているわけではないので、チームメンバーと相談しながら柔軟に対応すること
- 使用技術やフォルダ構成についてもこれが絶対ではないため、柔軟に対応すること

## 起動コマンド
- アプリ本体： `yarn start`
- モックサーバ： `yarn mock-server`

## 命名規則
- プロジェクト直下のフォルダは Lower Camel Case
- srcの1つ下に位置するフォルダは Lower Camel Case
- ↑より下の階層に位置するフォルダやファイルは Upper Camel Case
- ただし、indexとつくファイル名のみ Lower Camel Case
- React Componentは Upper Camel Case
- 関数名（React Componentを除く）は Lower Camel Case
- typeやenumの名前は Upper Camel Case

## フォルダの記述内容（Redux）
- states: アプリにて管理したい情報の型を定義(例:ユーザ名)
- actions: アプリにて管理したい情報が変更される状況を記述(例:ユーザ名を編集)
- reducers: 情報の具体的な変更処理を記述(例:ユーザ名を太郎から次郎に変更)
- components: UI(アプリの見た目)を記述
- sagas: 非同期処理を行う(例:ユーザ名の取得と見た目の表示を同時に行う)
- api: 通信処理を記述(例:サーバからユーザ名を取得する)

## フォルダの記述内容（React）
- Atoms：UIとしての最小単位　　　→ Button, Form
- Molecules：UXとしての最小単位 → Login Form, Add Task
- Organisms：１つの領域を表現   → Header, Side Bar
- Templates：画面の領域分けを表現 → Headerは上部20%, Side Barは左30%… (今回はGridLayoutによって表現)
- Pages：初期データの取得、Templatesに実データを渡すなど
- App.tsx：ログイン等の画面処理、CSSの初期化、画面遷移など