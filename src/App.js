import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import B1B2 from "./B1B2";
import B2 from "./B2";

const App = () => {
  return (
    <>
      <div className="App">
        <h1 className="title1">Im Berufssprachkurs Audio Materialien</h1>
        <nav className="linkButton">
          <NavLink className="Link" to="/b1b2">
            B1/B2
          </NavLink>
          <NavLink className="Link" to="/b2">
            B2
          </NavLink>
        </nav>

        <Routes>
          <Route path="/b1b2" element={<B1B2 />} />
          <Route path="/b2" element={<B2 />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
