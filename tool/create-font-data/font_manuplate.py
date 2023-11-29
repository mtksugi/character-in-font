import os, json
from fontTools.ttLib import TTFont

# ttc_file_path = os.path.join(os.environ['SystemRoot'], 'fonts', 'msmincho.ttc') # for windows
ttc_file_path = '/Library/Fonts/ipamjm.ttf'
print(ttc_file_path)

ttf_fonts = TTFont(ttc_file_path, fontNumber=0)
# print(len(ttf_fonts['glyf'].glyphs))


# # TTC フォント内のすべてのフォントを取得します
# all_fonts = ttf_fonts["name"].names

# print(ttf_fonts.get("name").names)
for record in ttf_fonts.get("name").names:
    platform_id, encoding_id, language_id, name_id = record.platformID, record.platEncID, record.langID, record.nameID
    string = record.toUnicode()
    print(f"Platform ID: {platform_id}, Encoding ID: {encoding_id}, Language ID: {language_id}, Name ID: {name_id}, String: {string}")

# print('best', len(ttf_fonts["cmap"].getBestCmap().keys()))
# for subtable in ttf_fonts["cmap"].tables:
#     platform_id = subtable.platformID
#     encoding_id = subtable.platEncID
#     print(f"Platform ID: {platform_id}, Encoding ID: {encoding_id}", len(ttf_fonts["cmap"].getcmap(platform_id, encoding_id).cmap))

# 文字データの出力
data = [{'character': chr(char_code), 'code': char_code} for char_code in ttf_fonts["cmap"].getBestCmap().keys()]

data_file_path = 'output/data.json'

with open(data_file_path, 'w', encoding='utf-8') as output_file:
    json.dump(data, output_file, ensure_ascii=False)


# メタデータの出力
'''
fullName: フルネーム: name-id: 1
version: name-id: 5
familyName: ファミリーネーム: : name-id: 16>1 日本語名と英語名を併記
trademark: 商標: name-id: 7
manufacturer: メーカー: name-id: 8
designer: デザイナー: name-id: 9
description: 説明: name-id: 10

platform-id: 3, encoding-id: 1
language-id: 1041(日本) > 1033(US) 0x411 0x409
'''

fullName = ttf_fonts['name'].getName(1, 3, 1, 0x411) 
fullName = fullName if fullName else ttf_fonts['name'].getName(1, 3, 1, 0x409)

version = ttf_fonts['name'].getName(5, 3, 1, 0x411) 
version = version if version else ttf_fonts['name'].getName(5, 3, 1, 0x409)

# ファミリーネームはname-id: 16 > 1の順で引き、日本表記と英語表記を併記
familyNameJP = ttf_fonts['name'].getName(16, 3, 1, 0x411) 
familyNameJP = familyNameJP if familyNameJP else ttf_fonts['name'].getName(1, 3, 1, 0x411)
familyNameUS = ttf_fonts['name'].getName(16, 3, 1, 0x409)
familyNameUS = familyNameUS if familyNameUS else ttf_fonts['name'].getName(1, 3, 1, 0x409)
familyName = ''
if familyNameJP and familyNameUS and familyNameJP.string.decode('utf-16-be') != familyNameUS.string.decode('utf-16-be'):
    familyName = f"{familyNameJP.string.decode('utf-16-be')}, {familyNameUS.string.decode('utf-16-be')}"
else:
    familyName = familyNameJP.string.decode('utf-16-be') if familyNameJP else familyNameUS.string.decode('utf-16-be')

trademark = ttf_fonts['name'].getName(7, 3, 1, 0x411) 
trademark = trademark if trademark else ttf_fonts['name'].getName(7, 3, 1, 0x409)

manufacturer = ttf_fonts['name'].getName(8, 3, 1, 0x411) 
manufacturer = manufacturer if manufacturer else ttf_fonts['name'].getName(8, 3, 1, 0x409)

designer = ttf_fonts['name'].getName(9, 3, 1, 0x411) 
designer = designer if designer else ttf_fonts['name'].getName(9, 3, 1, 0x409)

description = ttf_fonts['name'].getName(10, 3, 1, 0x411) 
description = description if description else ttf_fonts['name'].getName(10, 3, 1, 0x409)


meta = {
    'fullName': fullName.string.decode('utf-16-be') if fullName else None,
    'version': version.string.decode('utf-16-be') if version else None,
    'familyName': familyName,
    'trademark': trademark.string.decode('utf-16-be') if trademark else None,
    'manufacturer': manufacturer.string.decode('utf-16-be') if manufacturer else None,
    'designer': designer.string.decode('utf-16-be') if designer else None,
    'description': description.string.decode('utf-16-be') if description else None,
}

meta_file_path = 'output/meta.json'

with open(meta_file_path, 'w', encoding='utf-8') as output_file:
    json.dump(meta, output_file, ensure_ascii=False)


ttf_fonts.close()

exit()


