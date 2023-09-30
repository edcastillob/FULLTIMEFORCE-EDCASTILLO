import React, { useState } from "react";
import code from "../../assets/code.png";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Challenge FULLTIME FORCE</h1>
        <div>
          <p>
            El objetivo del desafío es crear una aplicación que muestre el
            historial de commits en el mismo repositorio en donde se esta
            realizando el desarrollo.
            <br />
            Se estará utilizando la API de GitHub de la cuenta{" "}
            <strong>edcastillob</strong> y el reporitorio será llamado{" "}
            <strong>FULLTIMEFORCE-EDCASTILLO</strong>
          </p>
          <h2>Tecnologías Utilizadas</h2>
          <p>
            Las tecnologias utilizadas para el desarrollo de la aplicación son
            las siguientes:
          </p>
          <ul>
            <li>NestJs</li>
            <li>TypeScript</li>
            <li>Swagger</li>
            <li>ReactJs</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
      <figure>
      <img src={code} alt="coding" />
      {/* <figcaption>Título de la imagen</figcaption> */}
    </figure>
    </div>
  );
};
