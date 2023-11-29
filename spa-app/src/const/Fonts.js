/*
https://learn.microsoft.com/ja-jp/typography/opentype/spec/name

fullName: フルネーム: name-id: 1
version: name-id: 5
familyName: ファミリーネーム: : name-id: 16>1 日本語名と英語名を併記
trademark: 商標: name-id: 7
manufacturer: メーカー: name-id: 8
designer: デザイナー: name-id: 9
description: 説明: name-id: 10

platform-id: 3, encoding-id: 1
language-id: 1041(日本) > 1033(US) 0x411 0x409

*/
export const fonts = [
  {
    name: "MS ゴシック ver5.31",
    file: "msgothic-ver5.31.json",
    fullName: "ＭＳ ゴシック",
    version: "Version 5.31",
    familyName: "ＭＳ ゴシック, MS Gothic",
    trademark: "ＭＳ ゴシックは米国 Microsoft Corporation の米国及びその他の国の登録商標または商標です。",
    manufacturer: null,
    designer: null,
    description: null
  },
  {
    name: "MS 明朝 ver5.30",
    file: "msmincho-ver5.30.json",
    fullName: "ＭＳ 明朝",
    version: "Version 5.30",
    familyName: "ＭＳ 明朝, MS Mincho",
    trademark: "ＭＳ 明朝は米国 Microsoft Corporation の米国及びその他の国の登録商標または商標です。",
    manufacturer: null,
    designer: null,
    description: "このフォントの既定で表示される字形は JIS2004 に基づいています。'jp90' OpenType レイアウトテーブルによって JIS90 字形を利用することもできます。"
  },
  {
    name: "SimSun ver5.21",
    file: "simsun-ver5.21.json",
    fullName: "SimSun",
    version: "Version 5.21",
    familyName: "SimSun",
    trademark: "Trademark of ZHONGYI Electronic Co., Beijing",
    manufacturer: null,
    designer: null,
    description: null
  },
  {
    name: "游ゴシック ver1.75",
    file: "yu-gothic-ver1.75.json",
    fullName: "游ゴシック",
    version: "Version 1.75",
    familyName: "游ゴシック, Yu Gothic",
    trademark: "游書体ライブラリーは有限会社字游工房の登録商標です",
    manufacturer: "有限会社字游工房",
    designer: "有限会社字游工房",
    description: null
  },
  {
    name: "メイリオ ver6.30",
    file: "meiryo-ver6.30.json",
    fullName: "メイリオ",
    version: "Version 6.30",
    familyName: "メイリオ, Meiryo",
    trademark: "メイリオは、米国 Microsoft Corporation の米国およびその他の国における登録商標または商標です。",
    manufacturer: "Microsoft Corporation",
    designer: "C&G Inc.; Eiichi Kono; Matthew Carter",
    description: "メイリオ・フォントはスクリーンでもプリントでも極めてクリアーで読み易く、広い用途に適した新世代のサンセリフ書体です。特に液晶スクリーン上の可読性を極限まで追求。オープンでバランスの良いスタイルは小さな文字サイズでも鮮明に読め、大きな文字サイズではダイナミックな効果を発揮します。和文と欧文をすっきりと調和させて組むことができます。この書体の巧みに調整された字間スペースによって生じる微妙な水平ラインは、横組文章をさらに読み易くします。メイリオは、和文と欧文を組合わせた膨大な文字セットで構成された完璧にスケーラブルなアウトライン・フォントとして、広範なコミュニケーションやパブリッシングの用途に適しています。卓越した汎用性と可読性に加え、行間をタイトに組めるためスペースの節約も可能です。\r\n"
  },
  {
    name: "Arial Unicode MS ver1.01x",
    file: "arial-unicode-ms-ver1.01x.json",
    fullName: "Arial Unicode MS",
    version: "Version 1.01x",
    familyName: "Arial Unicode MS",
    trademark: "Arial® is a trademark of The Monotype Corporation which may be registered in certain jurisdictions.",
    manufacturer: "Agfa Monotype Corporation",
    designer: "Original design: Robin Nicholas, Patricia Saunders. Extended glyphs: Monotype Type Drawing Office, Monotype Typography.",
    description: "This extended version of Monotype's Arial contains glyphs for all code points within The Unicode Standard, Version 2.1."
  },
  {
    name: "ヒラギノ 丸 ゴシック ver17.0d1e2",
    file: "hiragino-maru-gothic-ver17.0d1e2.json",
    fullName: "ヒラギノ丸ゴ Pro W4",
    version: "17.0d1e2",
    familyName: "ヒラギノ丸ゴ Pro, Hiragino Maru Gothic Pro",
    trademark: "ヒラギノは株式会社SCREENホールディングスの登録商標です",
    manufacturer: "株式会社SCREENグラフィックソリューションズ",
    designer: "有限会社 字游工房",
    description: null
  },
  {
    name: "IPAex明朝 ver004.01",
    file: "ipa-ex-mincho-ver004.01.json",
    fullName: "IPAex明朝",
    version: "Version 004.01",
    familyName: "IPAex明朝, IPAexMincho",
    trademark: null,
    manufacturer: null,
    designer: null,
    description: null
  },
  {
    name: "IPAmj明朝 ver006.01",
    file: "ipa-mj-mincho-ver006.01.json",
    fullName: "IPAmj明朝",
    version: "Version 006.01",
    familyName: "IPAmj明朝, IPAmjMincho",
    trademark: null,
    manufacturer: null,
    designer: null,
    description: null
  },
]

export const defaultFontFamily = '"Roboto","Helvetica","Arial",sans-serif'
