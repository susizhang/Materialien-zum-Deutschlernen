import React from "react";
import { Card } from "antd";
import ReactAudioPlayer from "react-audio-player";

const b1b2Files = [
  "01_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Start_5b.mp3",
  "02_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_Start_3b.mp3",
  "03_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_Start_6b.mp3",
  "04_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L2_2a.mp3",
  "05_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L2_2b.mp3",
  "06_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L2_2d.mp3",
  "07_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L2_2e.mp3",
  "08_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L2_4a.mp3",
  "09_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L2_6b.mp3",
  "10_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L3_3b.mp3",
  "11_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L3_6a.mp3",
  "12_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Schreibtraining_Notizen_1.mp3",
  "13_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Schreibtraining_Notizen_3.mp3",
  "14_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Schreibtraining_Notizen_4.mp3",
  "15_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Schreibtraining_Notizen_6a.mp3",
  "16_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Berufsberatungsgespraech.mp3",
  "17_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Vor-_und_Nachteile.mp3",
  "18_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Ziele_und_Wuensche.mp3",
  "19_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Stellengesuch.mp3",
  "20_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Satzstellung_HS.mp3",
  "21_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Artikel.mp3",
  "22_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Satzstellung_HS_und_NS.mp3",
  "23_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Satzklammer.mp3",
  "24_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_Start-3_Intonation.mp3",
  "25_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Szenarien_Erstkontakt_3a.mp3",
  "26_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Szenarien_Erstkontakt_3b.mp3",
  "27_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L4_4a_b.mp3",
  "28_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L5_3a.mp3",
  "29_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L5_6b.mp3",
  "30_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L6_5a.mp3",
  "31_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L6_5b.mp3",
  "32_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L6_8.mp3",
  "33_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Extra_Vorstellungsgespraech_2a.mp3",
  "34_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_4-6_Anschreiben.mp3",
  "35_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_4-6_Selbstpraesentation.mp3",
  "36_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_4-6_Auftraege_annehmen.mp3",
  "37_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_4-6_Verben_Nomen_Praepositionen.mp3",
  "38_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_4-6_Perfekt.mp3",
  "39_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_4-6_un-trennbare_Verben.mp3",
  "40_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_4-6_Wortakzent_Wo_wird_betont.mp3",
  "41_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_I_1b_Abschnitt_1.mp3",
  "42_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_I_1b_Abschnitt_2.mp3",
  "43_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_I_1b_Abschnitt_3.mp3",
  "44_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_I_1b_Abschnitt_4.mp3",
  "45_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_I_1c.mp3",
  "46_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_I_1d.mp3",
  "47_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_I_2b.mp3",
  "48_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L7_3b_Abschnitt_1.mp3",
  "49_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L7_3b_Abschnitt_2.mp3",
  "50_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L7_3b_Abschnitt_3.mp3",
  "51_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L7_3b_Abschnitt_4.mp3",
  "52_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L7_3b_Abschnitt_5.mp3",
  "53_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L7_3c_d.mp3",
  "54_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L7_7b.mp3",
  "55_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L7_8a_b.mp3",
  "56_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L8_7.mp3",
  "57_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L9_1a.mp3",
  "58_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L9_1b.mp3",
  "59_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L9_8.mp3",
  "60_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Schreibtraining_Bericht_1b_c.mp3",
  "61_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_7-9_Kundengespraeche.mp3",
  "62_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_7-9_Produkt_beschreiben.mp3",
  "63_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_7-9_Wechselpraepositionen.mp3",
  "64_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_7-9_Zeitformen_von_Verben.mp3",
  "65_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_7-9_Vom_Aktivsatz_zum_Passivsatz.mp3",
  "66_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_7-9_Satzakzent.mp3",
  "67_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Szenarien_Termine_5.mp3",
  "68_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L10_2a_b.mp3",
  "69_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L10_4c.mp3",
  "70_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L10_2.mp3",
  "71_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L10_11.mp3",
  "72_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L11_1a_b_Nachricht_Luca.mp3",
  "73_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L11_1a_b_Nachricht_Emma.mp3",
  "74_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L11_2c.mp3",
  "75_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_1a.mp3",
  "76_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_3a.mp3",
  "77_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_3b.mp3",
  "78_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_4a_Abschnitt_1.mp3",
  "79_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_4a_b_Abschnitt_2.mp3",
  "80_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_4a_b_Abschnitt_3.mp3",
  "81_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_4a_b_Abschnitt_4.mp3",
  "82_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_L12_4a_b_Abschnitt_5.mp3",
  "83_Im_Berufssprachkurs_Brueckenelement_B1_B2_AB_L12_7b.mp3",
  "84_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Schreibtraining_Zusammenfassen_3a_b.mp3",
  "85_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Schreibtraining_Zusammenfassen_4.mp3",
  "86_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_10-12_Probleme_am_Arbeitsplatz.mp3",
  "87_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_10-12_Beratungsgespraech.mp3",
  "88_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_10-12_Negation.mp3",
  "89_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_10-12_Adjektivdeklination.mp3",
  "90_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_10-12_Reflexivpronomen.mp3",
  "91_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_KG_10-12_Auslaut_-er.mp3",
  "92_Im_Berufssprachkurs_Brueckenelement_B1_B2_KB_Pruefen_Brueckentest_II_2.mp3",
];

const App = () => {
  return (
    <>
      <h2 className="card-title">B1/B2</h2>
      <Card className="b1b2-Container">
        {b1b2Files.map((file) => (
          <div className="audioCard">
            <label> {file.slice(0, 2)} </label>
            <ReactAudioPlayer
              src={process.env.PUBLIC_URL + `/b1-b2/${file}`}
              controls
            />
          </div>
        ))}
      </Card>
    </>
  );
};

export default App;
