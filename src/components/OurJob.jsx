import React from "react";

export default function OurJob() {
  const web = require("../assets/web.png");
  const movil = require("../assets/movil.png");

  return (
    <div style={{ alignItems: "center", marginLeft: "30%" }}>
      <div className="whoAreBox">
        <p className="hoverTextSec">Conoce nuestros proyectos destacados.</p>
      </div>
      <div className="divImagesOurJob">
        <button className="buttonOurJob">
          <img height={150} width={150} src={web}></img>
        </button>
        <button className="buttonOurJob">
          <img height={150} width={150} src={movil}></img>
        </button>
      </div>
    </div>
  );
}
