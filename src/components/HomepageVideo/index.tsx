import styles from "./styles.module.css";
import Heading from "@theme/Heading";

export default function HomePageVideo() {
  return (
    <section className={styles.outerContainer}>
      <Heading as="h1">项目介绍视频</Heading>
      <video height="50%" width="auto" controls>
        <source src="https://1340028816.vod-qcloud.com/34ce9883vodcq1340028816/cbfd585d1397757909950684708/zx1qdRmcHnkA.mp4" />
      </video>
    </section>
  );
}
