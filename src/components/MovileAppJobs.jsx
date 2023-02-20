import React, { useState } from "react";

const mobileAppImages = [
  {
    proyectLabel: "Aumeier Uñas",
    description:
      "Aplicación movil principalmente creada para gestionar los turnos de un salón de uñas personalizadas y manicura. Luego agregamos un álbum, donde se pueden almacenar fotos de los trabajos realizados; Creamos otra sección llamada Ganancias, donde se pueden ver las ganancias del día, las ganancias de la semana y las del mes, éstas se van calculando automaticamente a medida que los turnos son consumados.",
    id: "aumeier",
    note: "Esta fue una aplicación móvil sencilla de realizar y de bajo presupuesto que cumplió las expectativas y necesidades de las clientas.",
    images: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
  },
];

export default function MovileAppJobs() {
  const [showImages, setShowImages] = useState(false);
  return (
    <div
      style={{ marginTop: 25, textAlign: "center" }}
      className="container flex items-center flex-col"
    >
      {mobileAppImages.map((mobile) => (
        <div>
          <button
            className="mobileWebJobsButton"
            onClick={() => setShowImages(true)}
          >
            <img
              alt="mobile"
              height={280}
              width={150}
              src={require(`../assets/mobile/${mobile.id}/2.png`)}
            ></img>
          </button>

          {!showImages && (
            <h1 className="hoverTextFor" style={{ marginTop: "-1em" }}>
              {mobile.proyectLabel}
            </h1>
          )}

          <div>
            {showImages &&
              mobile.images.map((el) => (
                <img
                  style={{ marginInline: "0.5em" }}
                  alt="detalles app mobil"
                  height={180}
                  width={90}
                  src={require(`../assets/mobile/${mobile.id}/${el}.png`)}
                ></img>
              ))}

            {showImages && (
              <>
                <p className="hoverTextFor"> {mobile.description} </p>
                <h2 className="DevelperNote">
                  Nota del desarrollador:{" "}
                  <span
                    className="DevelperNote"
                    style={{ fontSize: 13, fontWeight: 500 }}
                  >
                    {" "}
                    {mobile.note}
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
