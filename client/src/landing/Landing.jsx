import React from "react";
import styles from "./Landing.module.css";
import backgroundImage from "../assets/2.png";
import coders from "../assets/code.png";

export const Landing = () => {
  return (
    <div className={styles.landing} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={coders} alt="Landing" className={styles.image} />
        </div>
        <div className={styles.right}>
          <p className={styles.quote}>
            "Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día."
            <br />- Omar Bradley
          </p>
          <a href="/home" className={styles.ctaButton}>
            ¡Comienza Ahora!
          </a>
        </div>
      </div>
    </div>
  );
};


