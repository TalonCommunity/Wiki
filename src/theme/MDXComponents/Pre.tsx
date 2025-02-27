import React, { type ReactNode } from "react";
import type { Props } from "@theme/MDXComponents/Pre";

export default function MDXPre(props: Props): ReactNode | undefined {
  return <pre {...props} />;
}
