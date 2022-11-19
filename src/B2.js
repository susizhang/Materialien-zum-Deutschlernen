import React from "react";
import { Card } from "antd";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";

const b2Files = [
  "001_Im_Berufssprachkurs_B2_KB_L1_A01a.mp3",
  "002_Im_Berufssprachkurs_B2_KB_L1_C01a_b.mp3",
  "003_Im_Berufssprachkurs_B2_KB_L1_D02a.mp3",
  "004_Im_Berufssprachkurs_B2_KB_L1_D02b.mp3",
  "005_Im_Berufssprachkurs_B2_KB_L1_KG_1_begruessen.mp3",
  "006_Im_Berufssprachkurs_B2_KB_L1_KG_2_zu_trinken_anbieten.mp3",
  "007_Im_Berufssprachkurs_B2_KB_L1_KG_3_Beruf_vorstellen.mp3",
  "008_Im_Berufssprachkurs_B2_KB_L1_KG_4_Berufwunsch_beschreiben.mp3",
  "009_Im_Berufssprachkurs_B2_KB_L1_KG_5_Verben_Adjektive_mit_Praepositionen.mp3",
  "010_Im_Berufssprachkurs_B2_KB_L1_KG_6_Verben_Adjektive_mit_Praepositionen.mp3",
  "011_Im_Berufssprachkurs_B2_KB_L2_A03b.mp3",
  "012_Im_Berufssprachkurs_B2_KB_L2_B03a.mp3",
  "013_Im_Berufssprachkurs_B2_KB_L2_B03b.mp3",
  "014_Im_Berufssprachkurs_B2_KB_L2_D01a.mp3",
  "015_Im_Berufssprachkurs_B2_KB_L2_KG_1_nachfragen.mp3",
  "016_Im_Berufssprachkurs_B2_KB_L2_KG_2_Imperativ_und_Ersatzformen.mp3",
  "017_Im_Berufssprachkurs_B2_KB_L2_KG_3_Imperativ_und_Ersatzformen.mp3",
  "018_Im_Berufssprachkurs_B2_KB_L2_KG_4_Imperativ_und_Ersatzformen.mp3",
  "019_Im_Berufssprachkurs_B2_KB_L3_D01a_c.mp3",
  "020_Im_Berufssprachkurs_B2_KB_L3_KG_1_Berufserfahrung.mp3",
  "021_Im_Berufssprachkurs_B2_KB_L3_KG_2_Vorlieben_und_Faehigkeiten.mp3",
  "022_Im_Berufssprachkurs_B2_KB_L3_KG_3_Vorlieben_und_Faehigkeiten.mp3",
  "023_Im_Berufssprachkurs_B2_KB_L3_KG_4_kausale_Satzverbindungen.mp3",
  "024_Im_Berufssprachkurs_B2_KB_L3_KG_5_kausale_Satzverbindungen.mp3",
  "025_Im_Berufssprachkurs_B2_KB_L3_KG_6_kausale_Satzverbindungen.mp3",
  "026_Im_Berufssprachkurs_B2_KB_L3_KG_7_kausale_Satzverbindungen.mp3",
  "027_Im_Berufssprachkurs_B2_KB_Szenarien_1_3a.mp3",
  "028_Im_Berufssprachkurs_B2_KB_Szenarien_1_3c.mp3",
  "029_Im_Berufssprachkurs_B2_KB_L4_A02_A03a.mp3",
  "030_Im_Berufssprachkurs_B2_KB_L4_D01b.mp3",
  "031_Im_Berufssprachkurs_B2_KB_L4_D01c.mp3",
  "032_Im_Berufssprachkurs_B2_KB_L4_KG_1_widersprechen.mp3",
  "033_Im_Berufssprachkurs_B2_KB_L4_KG_2_zustimmen_nach_der_Meinung_fragen.mp3",
  "034_Im_Berufssprachkurs_B2_KB_L4_KG_3_dass-Saetze.mp3",
  "035_Im_Berufssprachkurs_B2_KB_L4_KG_4_Infinitive_mit_zu.mp3",
  "036_Im_Berufssprachkurs_B2_KB_L4_KG_5_Infinitive_mit_zu.mp3",
  "037_Im_Berufssprachkurs_B2_KB_L4_KG_6_dass-Saetze_Infinitive_mit_zu.mp3",
  "038_Im_Berufssprachkurs_B2_KB_L5_A01a.mp3",
  "039_Im_Berufssprachkurs_B2_KB_L5_A01b.mp3",
  "040_Im_Berufssprachkurs_B2_KB_L5_A02.mp3",
  "041_Im_Berufssprachkurs_B2_KB_L5_B03a_b_Gespraech_1.mp3",
  "042_Im_Berufssprachkurs_B2_KB_L5_B03a_b_Gespraech_2.mp3",
  "043_Im_Berufssprachkurs_B2_KB_L5_B03a_b_Gespraech_3.mp3",
  "044_Im_Berufssprachkurs_B2_KB_L5_B03a_b_Gespraech_4.mp3",
  "045_Im_Berufssprachkurs_B2_KB_L5_KG_1_absagen_einwenden.mp3",
  "046_Im_Berufssprachkurs_B2_KB_L5_KG_2_sich_erkundigen_weiterverbinden.mp3",
  "047_Im_Berufssprachkurs_B2_KB_L5_KG_3_absagen_einwenden_nachhaken_einlenken.mp3",
  "048_Im_Berufssprachkurs_B2_KB_L5_KG_4_sich_entschuldigen.mp3",
  "049_Im_Berufssprachkurs_B2_KB_L5_KG_5_Negation.mp3",
  "050_Im_Berufssprachkurs_B2_KB_L5_KG_6_Futur_I.mp3",
  "051_Im_Berufssprachkurs_B2_KB_L6_C01a.mp3",
  "052_Im_Berufssprachkurs_B2_KB_L6_KG_1_auf_einen_Gegenstand_deuten.mp3",
  "053_Im_Berufssprachkurs_B2_KB_L6_KG_2_um_Hilfe_bitten.mp3",
  "054_Im_Berufssprachkurs_B2_KB_L6_KG_3_lokale_Praepositionen.mp3",
  "055_Im_Berufssprachkurs_B2_KB_L6_KG_4_lokale_Praepositionen.mp3",
  "056_Im_Berufssprachkurs_B2_KB_L6_KG_5_lokale_Praepositionen.mp3",
  "057_Im_Berufssprachkurs_B2_KB_Szenarien_2_1a.mp3",
  "058_Im_Berufssprachkurs_B2_KB_Szenarien_2_4a.mp3",
  "059_Im_Berufssprachkurs_B2_KB_L7_A02b_c.mp3",
  "060_Im_Berufssprachkurs_B2_KB_L7_C02a_c.mp3",
  "061_Im_Berufssprachkurs_B2_KB_L7_KG_1_Beruf_praesentieren.mp3",
  "062_Im_Berufssprachkurs_B2_KB_L7_KG_2_Beruf_praesentieren.mp3",
  "063_Im_Berufssprachkurs_B2_KB_L7_KG_3_Waren_beschreiben.mp3",
  "064_Im_Berufssprachkurs_B2_KB_L7_KG_4_empfehlen.mp3",
  "065_Im_Berufssprachkurs_B2_KB_L7_KG_5_sich_am_Telefon_melden_empfehlen.mp3",
  "066_Im_Berufssprachkurs_B2_KB_L7_KG_6_Adjektivdeklination.mp3",
  "067_Im_Berufssprachkurs_B2_KB_L7_KG_7_Adjektivdeklination.mp3",
  "068_Im_Berufssprachkurs_B2_KB_L7_KG_8_finale_Konjunktionen.mp3",
  "069_Im_Berufssprachkurs_B2_KB_L8_B02.mp3",
  "070_Im_Berufssprachkurs_B2_KB_L8_C03a.mp3",
  "071_Im_Berufssprachkurs_B2_KB_L8_C03b_c.mp3",
  "072_Im_Berufssprachkurs_B2_KB_L8_KG_1_vorschlagen_einen_Rat_geben.mp3",
  "073_Im_Berufssprachkurs_B2_KB_L8_KG_2_absagen_und_Gruende_nennen.mp3",
  "074_Im_Berufssprachkurs_B2_KB_L8_KG_3_absagen_Termin_verschieben.mp3",
  "075_Im_Berufssprachkurs_B2_KB_L8_KG_4_Konjunktiv_II.mp3",
  "076_Im_Berufssprachkurs_B2_KB_L8_KG_5_Satzklammer.mp3",
  "077_Im_Berufssprachkurs_B2_KB_L8_KG_6_Satzklammer.mp3",
  "078_Im_Berufssprachkurs_B2_KB_L9_A01a_b.mp3",
  "079_Im_Berufssprachkurs_B2_KB_L9_A02.mp3",
  "080_Im_Berufssprachkurs_B2_KB_L9_B02a_b.mp3",
  "081_Im_Berufssprachkurs_B2_KB_L9_KG_1_widersprechen.mp3",
  "082_Im_Berufssprachkurs_B2_KB_L9_KG_2_Fehler_eingestehen.mp3",
  "083_Im_Berufssprachkurs_B2_KB_L9_KG_3_versichern_beteuern.mp3",
  "084_Im_Berufssprachkurs_B2_KB_L9_KG_4_Partikeln_zur_Aussageverstaerkung.mp3",
  "085_Im_Berufssprachkurs_B2_KB_Szenarien_3_1a.mp3",
  "086_Im_Berufssprachkurs_B2_KB_Szenarien_3_4a.mp3",
  "087_Im_Berufssprachkurs_B2_KB_Szenarien_3_4b.mp3",
  "088_Im_Berufssprachkurs_B2_KB_L10_A01b_A02a.mp3",
  "089_Im_Berufssprachkurs_B2_KB_L10_B02b.mp3",
  "090_Im_Berufssprachkurs_B2_KB_L10_C02a.mp3",
  "091_Im_Berufssprachkurs_B2_KB_L10_C02b.mp3",
  "092_Im_Berufssprachkurs_B2_KB_L10_C02c_C03.mp3",
  "093_Im_Berufssprachkurs_B2_KB_L10_KG_1_Grafik_beschreiben.mp3",
  "094_Im_Berufssprachkurs_B2_KB_L10_KG_2_Grafik_beschreiben.mp3",
  "095_Im_Berufssprachkurs_B2_KB_L10_KG_3_Modalverben.mp3",
  "096_Im_Berufssprachkurs_B2_KB_L10_KG_4_Modalverben.mp3",
  "097_Im_Berufssprachkurs_B2_KB_L10_KG_5_Modalverben.mp3",
  "098_Im_Berufssprachkurs_B2_KB_L11_A02.mp3",
  "099_Im_Berufssprachkurs_B2_KB_L11_C01a.mp3",
  "100_Im_Berufssprachkurs_B2_KB_L11_C02.mp3",
  "101_Im_Berufssprachkurs_B2_KB_L11_D02a_b.mp3",
  "102_Im_Berufssprachkurs_B2_KB_L11_KG_1_komplexe_Arbeitsablaeufe_beschreiben.mp3",
  "103_Im_Berufssprachkurs_B2_KB_L11_KG_2_temporale_Praepositionen.mp3",
  "104_Im_Berufssprachkurs_B2_KB_L12_A03a_b_Gespraech_1.mp3",
  "105_Im_Berufssprachkurs_B2_KB_L12_A03a_b_Gespraech_2.mp3",
  "106_Im_Berufssprachkurs_B2_KB_L12_A03a_b_Gespraech_3.mp3",
  "107_Im_Berufssprachkurs_B2_KB_L12_KG_1_Einwilligung_Unmoeglichkeit_ausdruecken.mp3",
  "108_Im_Berufssprachkurs_B2_KB_L12_KG_2_Bitte_hoefliche_Aufforderung.mp3",
  "109_Im_Berufssprachkurs_B2_KB_L12_KG_3_Quelle_und_Thema_angeben.mp3",
  "110_Im_Berufssprachkurs_B2_KB_L12_KG_4_Wichtiges_hervorheben.mp3",
  "111_Im_Berufssprachkurs_B2_KB_L12_KG_5_Passiv.mp3",
  "112_Im_Berufssprachkurs_B2_KB_L12_KG_6_Passiv.mp3",
  "113_Im_Berufssprachkurs_B2_KB_L12_KG_7_Passiv.mp3",
  "114_Im_Berufssprachkurs_B2_KB_Szenarien_4_1.mp3",
  "115_Im_Berufssprachkurs_B2_KB_Szenarien_4_5a.mp3",
  "116_Im_Berufssprachkurs_B2_KB_Extra_4_3.mp3",
  "117_Im_Berufssprachkurs_B2_KB_L13_C01b_C02a_b_Gespraech_1.mp3",
  "118_Im_Berufssprachkurs_B2_KB_L13_C01b_C02a_b_Gespraech_2.mp3",
  "119_Im_Berufssprachkurs_B2_KB_L13_KG_1_Aerger_ausdruecken_Fehler_einraeumen.mp3",
  "120_Im_Berufssprachkurs_B2_KB_L13_KG_2_Aerger_ausdruecken_Fehler_einraeumen.mp3",
  "121_Im_Berufssprachkurs_B2_KB_L13_KG_3_vorschlagen.mp3",
  "122_Im_Berufssprachkurs_B2_KB_L14_A02a.mp3",
  "123_Im_Berufssprachkurs_B2_KB_L14_A02b_c.mp3",
  "124_Im_Berufssprachkurs_B2_KB_L14_C01a.mp3",
  "125_Im_Berufssprachkurs_B2_KB_L14_KG_1_Problemschilderung.mp3",
  "126_Im_Berufssprachkurs_B2_KB_L14_KG_2_Vorschlag_machen.mp3",
  "127_Im_Berufssprachkurs_B2_KB_L14_KG_3_Vorschlag_machen.mp3",
  "128_Im_Berufssprachkurs_B2_KB_L14_KG_4_indirekte_Fragesaetze.mp3",
  "129_Im_Berufssprachkurs_B2_KB_L14_KG_5_indirekte_Fragesaetze.mp3",
  "130_Im_Berufssprachkurs_B2_KB_L15_A01_A02_Abschnitt_1.mp3",
  "131_Im_Berufssprachkurs_B2_KB_L15_A01_A02_Abschnitt_2.mp3",
  "132_Im_Berufssprachkurs_B2_KB_L15_KG_1_eine_fremde_Meinung_darstellen.mp3",
  "133_Im_Berufssprachkurs_B2_KB_L15_KG_2_eine_fremde_Meinung_darstellen.mp3",
  "134_Im_Berufssprachkurs_B2_KB_L16_A02a_b.mp3",
  "135_Im_Berufssprachkurs_B2_KB_L16_C01.mp3",
  "136_Im_Berufssprachkurs_B2_KB_L16_C02.mp3",
  "137_Im_Berufssprachkurs_B2_KB_L16_C03.mp3",
  "138_Im_Berufssprachkurs_B2_KB_L16_C04.mp3",
  "139_Im_Berufssprachkurs_B2_KB_L16_C05.mp3",
  "140_Im_Berufssprachkurs_B2_AB_L5_20.mp3",
  "141_Im_Berufssprachkurs_B2_AB_L8_29.mp3",
];

const App = () => {
  const [file, setFile] = useState(b2Files[0]);

  const fileHandle = (e) => {
    // console.log(e.target.value);
    setFile(b2Files[e.target.value]);
  };
  return (
    <>
      <div>
        <h2 className="card-title">B2</h2>
        <div className="playerContainer">
          <label>{file.slice(1, 3)}</label>
          <ReactAudioPlayer
            src={process.env.PUBLIC_URL + `/b2/${file}`}
            controls
          />
        </div>
      </div>

      <Card className="b1b2-Container">
        {b2Files.map((item, index) => (
          <div key={index} className="audioCard">
            <button className="audioButton" value={index} onClick={fileHandle}>
              Audio {item.slice(1, 3)}
            </button>
          </div>
        ))}
      </Card>
    </>
  );
};

export default App;
