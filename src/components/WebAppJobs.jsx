import React, { useState } from "react";

const webAppImages = [
  {
    proyectLabel: "Gericht",
    description:
      "Web puramente informativa para restaurante Argentino localizado en España.",
    id: "gerlich",
    note: "Pagina web creada y deployada en dos semanas, es sólo informativa por lo que es de muy bajo presupuesto pero cumple con los requerimientos y necesidades de los dueños del restaurante.",
    images: ["2", "3", "4", "5", "7", "8", "9", "10"],
  },
];

export default function WebAppJobs() {
  const [showImages, setShowImages] = useState(false);
  return (
    <div
      style={{ marginTop: 25, textAlign: "center" }}
      className="container flex items-center flex-col"
    >
      {webAppImages.map((web) => (
        <div>
          <button
            className="mobileWebJobsButton"
            onClick={() => setShowImages(true)}
          >
            <img
              style={{ padding: 2, background: "#808080" }}
              alt="web"
              height={140}
              width={240}
              src={require(`../assets/web/${web.id}/1.png`)}
            ></img>
          </button>

          {!showImages && (
            <h1 className="hoverTextFor" style={{ marginTop: "-1em" }}>
              {web.proyectLabel}
            </h1>
          )}

          <div>
            {showImages &&
              web.images.map((el) => (
                <img
                  style={{
                    marginInline: "0.5em",
                    padding: 2,
                    background: "#808080",
                  }}
                  alt="detalles web app"
                  height={100}
                  width={200}
                  src={require(`../assets/web/${web.id}/${el}.png`)}
                ></img>
              ))}

            {showImages && (
              <>
                <p className="hoverTextFor"> {web.description} </p>
                <h2 className="DevelperNote">
                  Nota del desarrollador:{" "}
                  <span
                    className="DevelperNote"
                    style={{ fontSize: 13, fontWeight: 500 }}
                  >
                    {" "}
                    {web.note}
                  </span>
                </h2>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
