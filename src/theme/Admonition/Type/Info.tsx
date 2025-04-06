import React, { type ReactNode } from "react";
import Info from "@theme-original/Admonition/Type/Info";
import type InfoType from "@theme/Admonition/Type/Info";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof InfoType>;

function ScopeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M4 12H4.01M8 12H8.01M16 12H16.01M12 12H12.01M20 12H20.01M8.5 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V8.5M15.5 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.07989 20 7.2V8.5M20 15.5V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20H15.5M4 15.5V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H8.5"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InfoWrapper(props: Props): ReactNode {
  const { title, children } = props;

  let scope = null;
  let body = null;
  if (props.title == "talon-scope-platform") {
    scope = "Talon Platform";
    body = `This section is relevant to all users of the talon platform, regardless of whether or not the Talon community user file set
            has also been installed.`;
  } else if (props.title == "talon-scope-community") {
    scope = "Talon Community User File Set";
    body = (
      <span>
        This section is only relevant to users who have installed the
        <a href="Resource Hub/Talon Installation/downloading-community">
          Talon community user file set
        </a>
      </span>
    );
  } else if (props.title == "talon-scope") {
    scope = "";
    body = children;
  }
  const isCustom = Boolean(body);
  const heading = isCustom ? `[SCOPE] ${scope}` : null;

  return (
    <>
      {isCustom ? (
        <Info icon={<ScopeIcon />} className="docoscope" title={heading}>
          {body}
        </Info>
      ) : (
        <Info {...props} />
      )}
    </>
  );
}
