import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<"svg">>;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "智能语义检索",
    // Svg: require("@site/static/img/home/algo-digest.svg").default,
    imgSrc: require("./img/algo-discover.png").default,

    description: (
      <>
        基于意图识别适配精准/扩展检索策略，并通过引导话术动态细化查询意图，有效提升检索效率。
      </>
    ),
  },
  {
    title: "实时转写+章节速览",
    imgSrc: require("./img/algo-chapters.png").default,
    description: (
      <>采用「生成-评估」策略，实现动态调整语义边界，有效提升文本分段准确性。</>
    ),
  },
  {
    title: "智能纪要生成",
    imgSrc: require("./img/algo-digest.png").default,
    description: (
      <>
        有效消除冗余碎片、解决跨片段语义冲突，在保持上下文延续性的同时实现关键信息的高保真保留。
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureItem)}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgSrc} />
        {/*  <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <Heading as="h1">项目特色</Heading>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
