import React, { ReactNode } from "react";
import styles from "./style.module.css";

function QrPopup({ src }: { src: string }): ReactNode {
  return (
    <div className={styles.qrPopup}>
      <img src={src} alt="WeChat QR Code" />
    </div>
  );
}

export default QrPopup;
