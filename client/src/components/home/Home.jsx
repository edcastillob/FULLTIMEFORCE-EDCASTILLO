import React from "react";
import code from "../../assets/coders.png";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center">Challenge FULLTIME FORCE</h1>
          <div>
            <p className={styles.parrafo}>
              El objetivo del desafío es crear una aplicación que muestre el
              historial de commits en el mismo repositorio en donde se está
              realizando el desarrollo.
              <br />
              Se estará utilizando la API de GitHub de la cuenta{" "}
              <strong>edcastillob</strong> y el repositorio será llamado{" "}
              <strong>FULLTIMEFORCE-EDCASTILLO</strong>
            </p>
            <h2 className={styles.parrafo}>Tecnologías Utilizadas</h2>
            <p className={styles.parrafo}>
              Las tecnologías utilizadas para el desarrollo de la aplicación son
              las siguientes:
            </p>
            <ul>
              <li>NestJs</li>              
              <li>TypeScript</li>
              <li>Swagger</li>
              <li>ReactJs</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Reactstrap</li>
              <li>Toastify</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <figure>
            <img className ={`img-fluid ${styles.img}`} src={code} alt="coding" />
          </figure>
        </div>
      </div>
    </div>
  );
};
