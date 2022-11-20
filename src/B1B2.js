import { useState } from "react";
import { b1b2Files } from "./data/data";
import ReactAudioPlayer from "react-audio-player";

const App = () => {
  const [file, setFile] = useState(b1b2Files[0]);

  const fileHandle = (e) => {
    // console.log(e.target.value);
    setFile(b1b2Files[e.target.value]);
  };

  return (
    <>
      <div>
        <h2 className="card-title">B1/B2</h2>
      </div>

      <div className="b1b2-Container">
        {b1b2Files.map((item, index) => (
          <div key={index} className="audioCard">
            <button className="audioButton" value={index} onClick={fileHandle}>
              Audio {item.slice(0, 2)}
            </button>
          </div>
        ))}
      </div>
      <div className="playerContainer">
        <label>{file.slice(0, 2)}</label>
        <ReactAudioPlayer
          src={process.env.PUBLIC_URL + `/b1-b2/${file}`}
          controls
        />
      </div>
    </>
  );
};

export default App;
