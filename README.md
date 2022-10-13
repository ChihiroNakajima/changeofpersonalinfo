# changeofpersonalinfo

◆自己紹介：
未来創生センター Ｒフロンティア部 中島
・2018年に人事部から未来創生センターに異動（育休復帰）。部総括、秘書、人事業務を担当
・今年の4月に育休復帰し、人事業務を担当（以前とは別業務）

◆作るに至った経緯：
今回のプログラム基礎で学んだ技術を足元の実務でどのように活かせるか。
まず1つ具現化してみて、今後の自業務におけるプログラミング活用を考えるきっかけにしたい。
（現状：T-wave上のエクセルで同情報収集・集約処理をしているが、バックデータとなるリストのメンテナンスや不要なデータまで取らざる得ない仕組みが煩雑）

◆作品の説明：
このHPは4つのファイルで構成
1.HTML 
2.script.js
3.CSS
4.divisionNames.js（APIモドキ/pokemonを真似して作成）

Web上で人事情報を入力すると、CSVデータが作成され、メールが立ち上がる
入力者はセンター内のライン長（グループ長、室長、部長）を想定
（CSVをメールに添付する機能を付けたかったが、HTMLのMailTo（そもそも非推奨）に添付機能が削除されてた）

◇HTML
1つずつの項目はdivで括る
Class名（block0,1/blocka,b/instruction,person info,current,changed等）で層別
ID名（button 1,2/current*/changed*）で層別

◇Script.js
利用方法：（◎：利用者が行う操作、★Script.JSが行う操作）
1. ◎対象者・変更前の情報を入力
2. ◎所属コードを入力し、検索ボタンを押下==>serch1.addEventListener("click",fillCurrentDivNames)
3. ★部～Gまでの名称が自動表示される==>function fillCurrentDivNames//divisionNames.jsを照合
4. ◎変更後の情報を画面上に入力
5. ◎所属コードを入力し、検索ボタンを押下（3と同様） ==>serch2.addEventListener("click",fillCurrentDivNames),
6. ★部～Gまでの名称が自動表示される==>function fillChangedDivNames//divisionNames.jsを照合
7. ◎「送信」ボタンを押下
8. ★全ての入力値を配列にする==>function makeArray()
9. ★CSVデータが作成され、PCのTemporaryフォルダに保存==>makeCsvFile(inputArray)
10.★Outlook画面が立ち上がり、宛先・件名・本文がセットされたメールが表示される==>preparMail()

◇CSS
.class名で書式を設定
block0=instruction+personInfo
block1(display flex)=blocka(50%)+blokb(50%)
block2=button+img
