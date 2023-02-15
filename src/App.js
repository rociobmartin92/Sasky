import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import OurJob from "./components/OurJob";
import WhoAre from "./components/WhoAre";

const home = {
  whoAre: false,
  ourJob: false,
  contact: false,
};
function App() {
  const [showColumn, setShowColumn] = useState(home);

  const logo = require("../src/assets/logo.png");
  return (
    <div className="App">
      <header>
        <div>
          <img className="logo" height={150} width={150} src={logo}></img>
        </div>
        <div className="barra">
          <button
            className="buttons"
            onClick={() =>
              setShowColumn({
                ...showColumn,
                whoAre: true,
                ourJob: false,
                contact: false,
              })
            }
          >
            Quienes Somos
          </button>

          <button
            className="buttons"
            onClick={() =>
              setShowColumn({
                ...showColumn,
                ourJob: true,
                whoAre: false,

                contact: false,
              })
            }
          >
            Nuestro trabajo
          </button>
          <button
            onClick={() =>
              setShowColumn({
                ...showColumn,
                contact: true,
                whoAre: false,
                ourJob: false,
              })
            }
            className="buttons"
          >
            Contactanos
          </button>
        </div>
      </header>
      {showColumn.whoAre && <WhoAre />}
      {showColumn.ourJob && <OurJob />}
      {showColumn.contact && <Contact />}
      <footer className="footer">
        Balvanera 1428, Ciudad Autónoma de Buenos Aires, Argentina
      </footer>
    </div>
  );
}

export default App;
