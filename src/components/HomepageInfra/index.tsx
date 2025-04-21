import React, { ReactNode } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageInfra() {
  return (
    <section className={styles.outerContainer}>
      <Heading as="h1">项目架构图</Heading>
      <img className={styles.infra} src={require("./infra.png").default} />
    </section>
  );
}
