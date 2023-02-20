import React, { useState } from "react";
import MovileAppJobs from "./MovileAppJobs";
import WebAppJobs from "./WebAppJobs";

export default function OurJob() {
  const web = require("../assets/web.png");
  const movil = require("../assets/movil.png");
  const [movilApp, setMovilApp] = useState(false);
  const [webApp, setWebApp] = useState(false);

  return (
    <div className="container flex items-center flex-col">
      <div className="whoAreBoxFor">
        <p className="hoverTextFor">Conoce nuestros proyectos destacados.</p>
      </div>
      <div className="divImagesOurJob">
        <button
          onClick={() => {
            setWebApp(!webApp);
            setMovilApp(false);
          }}
          className="buttonOurJob"
          style={{ width: "150px", height: "150px" }}
        >
          <img alt="web" height={150} width={150} src={web}></img>
        </button>
        <button
          onClick={() => {
            setMovilApp(!movilApp);
            setWebApp(false);
          }}
          className="buttonOurJob"
          style={{ width: "150px", height: "150px" }}
        >
          <img alt="mobile" height={150} width={150} src={movil}></img>
        </button>
      </div>
      <div className="shapedividers_com-8967"></div>
      {webApp && <WebAppJobs />}

      {movilApp && <MovileAppJobs />}
    </div>
  );
}
