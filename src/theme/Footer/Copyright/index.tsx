import React, { type ReactNode } from "react";
import type { Props } from "@theme/Footer/Copyright";
import Link from "@docusaurus/Link";

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
          ｜ 网站借助 <Link href="https://docusaurus.io">Docusaurus</Link> 构建
        </span>
      </p>
    </div>
  );
}
