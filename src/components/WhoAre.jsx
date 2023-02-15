import React from "react";

export default function WhoAre() {

const soft = require("../assets/softw.jpeg")

  return (
    <div className="whoAreBox">
      {/* <h1 className="hoverTitle">Quienes Somos</h1> */}
      <ul>

        <li className="hoverText"> Especialistas en tecnología y desarrollo de software.</li>
        <li className="hoverText">  Desarrollamos tu
        web personal o aplicación móvil, de acuerdo a los requerimentos
        específicos que tu emprendimiento necesita.</li>
        <img className="logo" height={150} width={150} src={soft}></img>

        <li className="hoverText"> Nos especializamos en
        pequeños proyectos ya que nuestro objetivo principal es ayudar a
        pequeños emprendedores que estan iniciando un negocio <br/> y por ello nuestra
        tarifa es reducida y adaptada a las posibilidades de cada cliente.</li>
      </ul>

    </div>
  );
}
