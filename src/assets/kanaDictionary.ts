import { flattenDict } from "@/lib/helpers/helpers";

export type IKanaDictionary = {
  [key: string]: {
    [kana: string]: string[];
  };
};

export const hiraganaDictionary: IKanaDictionary = {
  h_base_1: { あ: ["a"], い: ["i"], う: ["u"], え: ["e"], お: ["o"] },
  h_base_2: { か: ["ka"], き: ["ki"], く: ["ku"], け: ["ke"], こ: ["ko"] },
  h_base_3: {
    さ: ["sa"],
    し: ["shi", "si"],
    す: ["su"],
    せ: ["se"],
    そ: ["so"],
  },
  h_base_4: {
    た: ["ta"],
    ち: ["chi", "ti"],
    つ: ["tsu", "tu"],
    て: ["te"],
    と: ["to"],
  },
  h_base_5: { な: ["na"], に: ["ni"], ぬ: ["nu"], ね: ["ne"], の: ["no"] },
  h_base_6: {
    は: ["ha"],
    ひ: ["hi"],
    ふ: ["fu", "hu"],
    へ: ["he"],
    ほ: ["ho"],
  },
  h_base_7: { ま: ["ma"], み: ["mi"], む: ["mu"], め: ["me"], も: ["mo"] },
  h_base_8: { や: ["ya"], ゆ: ["yu"], よ: ["yo"] },
  h_base_9: { ら: ["ra"], り: ["ri"], る: ["ru"], れ: ["re"], ろ: ["ro"] },
  h_base_10: { わ: ["wa"], を: ["wo", "o"], ん: ["n"] },
  //other base groups
  h_alt_1: {
    が: ["ga"],
    ぎ: ["gi"],
    ぐ: ["gu"],
    げ: ["ge"],
    ご: ["go"],
  },

  h_alt_2: {
    ざ: ["za"],
    じ: ["ji", "zi"],
    ず: ["zu", "du"],
    ぜ: ["ze"],
    ぞ: ["zo"],
  },
  h_alt_3: {
    だ: ["da"],
    ぢ: ["ji", "di", "dzi"],
    づ: ["zu", "dzu"],
    で: ["de"],
    ど: ["do"],
  },
  h_alt_4: {
    ば: ["ba"],
    び: ["bi"],
    ぶ: ["bu"],
    べ: ["be"],
    ぼ: ["bo"],
  },
  h_alt_5: {
    ぱ: ["pa"],
    ぴ: ["pi"],
    ぷ: ["pu"],
    ぺ: ["pe"],
    ぽ: ["po"],
  },
  h_alt_6: {
    きゃ: ["kya"],
    きゅ: ["kyu"],
    きょ: ["kyo"],
  },
  h_alt_7: {
    しゃ: ["sha", "sya"],
    しゅ: ["shu", "syu"],
    しょ: ["sho", "syo"],
  },
  h_alt_8: {
    ちゃ: ["cha", "cya", "tya"],
    ちゅ: ["chu", "cyu"],
    ちょ: ["cho", "cyo"],
  },
  h_alt_9: {
    にゃ: ["nya"],
    にゅ: ["nyu"],
    にょ: ["nyo"],
  },
  h_alt_10: {
    ひゃ: ["hya"],
    ひゅ: ["hyu"],
    ひょ: ["hyo"],
  },
  h_alt_11: {
    みゃ: ["mya"],
    みゅ: ["myu"],
    みょ: ["myo"],
  },
  h_alt_12: {
    りゃ: ["rya"],
    りゅ: ["ryu"],
    りょ: ["ryo"],
  },
  h_alt_13: {
    ぎゃ: ["gya"],
    ぎゅ: ["gyu"],
    ぎょ: ["gyo"],
  },
  h_alt_14: {
    じゃ: ["ja", "jya"],
    じゅ: ["ju", "jyu"],
    じょ: ["jo", "jyo"],
  },
  h_alt_15: {
    びゃ: ["bya"],
    びゅ: ["byu"],
    びょ: ["byo"],
  },
  h_alt_16: {
    ぴゃ: ["pya"],
    ぴゅ: ["pyu"],
    ぴょ: ["pyo"],
  },
};

export const katakanaDictionary: IKanaDictionary = {
  k_base_1: { ア: ["a"], イ: ["i"], ウ: ["u"], エ: ["e"], オ: ["o"] },
  k_base_2: {
    カ: ["ka"],
    キ: ["ki"],
    ク: ["ku"],
    ケ: ["ke"],
    コ: ["ko"],
  },
  k_base_3: {
    サ: ["sa"],
    シ: ["shi", "si"],
    ス: ["su"],
    セ: ["se"],
    ソ: ["so"],
  },
  k_base_4: {
    タ: ["ta"],
    チ: ["chi", "ti"],
    ツ: ["tsu", "tu"],
    テ: ["te"],
    ト: ["to"],
  },
  k_base_5: {
    ナ: ["na"],
    ニ: ["ni"],
    ヌ: ["nu"],
    ネ: ["ne"],
    ノ: ["no"],
  },
  k_base_6: {
    ハ: ["ha"],
    ヒ: ["hi"],
    フ: ["fu", "hu"],
    ヘ: ["he"],
    ホ: ["ho"],
  },
  k_base_7: {
    マ: ["ma"],
    ミ: ["mi"],
    ム: ["mu"],
    メ: ["me"],
    モ: ["mo"],
  },
  k_base_8: { ヤ: ["ya"], ユ: ["yu"], ヨ: ["yo"] },
  k_base_9: {
    ラ: ["ra"],
    リ: ["ri"],
    ル: ["ru"],
    レ: ["re"],
    ロ: ["ro"],
  },
  k_base_10: { ワ: ["wa"], ヲ: ["wo", "o"], ン: ["n"] },

  //other base groups
  k_sim_1: {
    シ: ["shi", "si"],
    ツ: ["tsu", "tu"],
    ソ: ["so"],
    ン: ["n"],
    ノ: ["no"],
  },
  k_sim_2: {
    ウ: ["u"],
    フ: ["fu", "hu"],
    ワ: ["wa"],
    ラ: ["ra"],
    ス: ["su"],
    ヌ: ["nu"],
    ヲ: ["wo", "o"],
  },
  //other alternative groups
  k_alt_1: {
    ガ: ["ga"],
    ギ: ["gi"],
    グ: ["gu"],
    ゲ: ["ge"],
    ゴ: ["go"],
  },
  k_alt_2: {
    ザ: ["za"],
    ジ: ["ji", "zi"],
    ズ: ["zu", "du"],
    ゼ: ["ze"],
    ゾ: ["zo"],
  },
  k_alt_3: {
    ダ: ["da"],
    ヂ: ["ji", "di", "dzi"],
    ヅ: ["zu", "dzu"],
    デ: ["de"],
    ド: ["do"],
  },
  k_alt_4: {
    バ: ["ba"],
    ビ: ["bi"],
    ブ: ["bu"],
    ベ: ["be"],
    ボ: ["bo"],
  },
  k_alt_5: {
    パ: ["pa"],
    ピ: ["pi"],
    プ: ["pu"],
    ペ: ["pe"],
    ポ: ["po"],
  },
  k_alt_6: {
    キャ: ["kya"],
    キュ: ["kyu"],
    キョ: ["kyo"],
  },
  k_alt_7: {
    シャ: ["sha", "sya"],
    シュ: ["shu", "syu"],
    ショ: ["sho", "syo"],
  },
  k_alt_8: {
    チャ: ["cha", "cya", "tya"],
    チュ: ["chu", "cyu"],
    チョ: ["cho", "cyo"],
  },
  k_alt_9: {
    ニャ: ["nya"],
    ニュ: ["nyu"],
    ニョ: ["nyo"],
  },
  k_alt_10: {
    ヒャ: ["hya"],
    ヒュ: ["hyu"],
    ヒョ: ["hyo"],
  },
  k_alt_11: {
    ミャ: ["mya"],
    ミュ: ["myu"],
    ミョ: ["myo"],
  },

  k_alt_12: {
    リャ: ["rya"],
    リュ: ["ryu"],
    リョ: ["ryo"],
  },
  k_alt_13: {
    ギャ: ["gya"],
    ギュ: ["gyu"],
    ギョ: ["gyo"],
  },
  k_alt_14: {
    ジャ: ["ja", "jya"],
    ジュ: ["ju", "jyu"],
    ジョ: ["jo", "jyo"],
  },
  k_alt_15: {
    ビャ: ["bya"],
    ビュ: ["byu"],
    ビョ: ["byo"],
  },
  k_alt_16: {
    ピャ: ["pya"],
    ピュ: ["pyu"],
    ピョ: ["pyo"],
  },
  k_alt_17: {
    ファ: ["fa"],
    フィ: ["fi"],
    フェ: ["fe"],
    フォ: ["fo"],
    フュ: ["fyu"],
  },
  k_alt_18: {
    ウィ: ["wi"],
    ウェ: ["we"],
    ウォ: ["wo"],
    ヴァ: ["va"],
    ヴィ: ["vi"],
    ヴェ: ["ve"],
    ヴォ: ["vo"],
  },
  k_alt_19: {
    ツァ: ["tsa"],
    ツィ: ["tsi"],
    ツェ: ["tse"],
    ツォ: ["tso"],
  },
  k_alt_20: {
    チェ: ["che"],
    シェ: ["she"],
    ジェ: ["je"],
  },
  k_alt_21: {
    ティ: ["ti"],
    ディ: ["di"],
    デュ: ["du"],
    トゥ: ["tu"],
  },
};

export const kanaDictionary = {
  ...hiraganaDictionary,
  ...katakanaDictionary,
};

export const getKanaToRomajiMap = () => flattenDict(kanaDictionary);
