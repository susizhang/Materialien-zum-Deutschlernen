import React from "react";
import { b2Files } from "./data/data";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";

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
      </div>

      <div className="b1b2-Container">
        {b2Files.map((item, index) => (
          <div key={index} className="audioCard">
            <button className="audioButton" value={index} onClick={fileHandle}>
              Audio {item.slice(0, 3)}
            </button>
          </div>
        ))}
      </div>
      <div className="playerContainer">
        <label>{file.slice(1, 3)}</label>
        <ReactAudioPlayer
          src={process.env.PUBLIC_URL + `/b2/${file}`}
          controls
        />
      </div>
    </>
  );
};

export default App;
