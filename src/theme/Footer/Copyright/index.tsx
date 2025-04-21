import React, { type ReactNode } from "react";
import type { Props } from "@theme/Footer/Copyright";

export default function FooterCopyright({ copyright }: Props): ReactNode {
  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
    >
      <p>
        {copyright}
        <span>
          ｜ 网站借助 <a href="https://docusaurus.io/">Docusaurus</a> 构建
        </span>
      </p>
    </div>
  );
}
