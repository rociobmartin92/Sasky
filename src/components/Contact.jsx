import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div style={{ marginLeft: "2.5em", marginTop: "0.5em" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marging: "0em",
          padding: "0em",
        }}
      >
        <div
          style={{
            paddingTop: "1.5em",
          }}
        >
          <HiOutlineMail size={17} />
        </div>
        <div>
          <p className="hoverText">sasky.softwarecompany@gmail.com</p>
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "-3em",
          padding: "0em",
        }}
      >
        <div
          style={{
            paddingTop: "1.5em",
          }}
        >
          <FaWhatsapp />
        </div>
        <div>
          <p className="hoverText"> +54 2984391081 </p>
        </div>
      </div>
      <br />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "-3em",
          padding: "0em",
        }}
      >
        <div
          style={{
            paddingTop: "1.5em",
          }}
        >
          <FaInstagram />
        </div>
        <div>
          <p className="hoverText"> FaInstagram </p>
        </div>
      </div>
    </div>
  );
}
