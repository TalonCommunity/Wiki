import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";

function TodoAdmonition(props) {
  var str = "DOCUMENTATION TODO" + (props.title ? ": " + props.title : "");
  return (
    <div className="theme-admonition theme-admonition-note admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonition_xJq3 alert alert--warning alert--docotodo">
      <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonitionHeading_Gvgb">
        <span className="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonitionIcon_Rf37">
          <svg viewBox="0 0 24 24">
            <path d="M2,11H8a1,1,0,0,0,1-1V4A1,1,0,0,0,8,3H2A1,1,0,0,0,1,4v6A1,1,0,0,0,2,11ZM3,5H7V9H3ZM8,21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1ZM3,15H7v4H3ZM23,7a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2H22A1,1,0,0,1,23,7Zm0,10a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2H22A1,1,0,0,1,23,17Z" />
          </svg>
        </span>
        {str}
      </div>
      <div className="admonitionContent_BuS1">{props.children}</div>
    </div>
  );
}

function FeedbackAdmonition(props) {
  var str = "FEEDBACK REQUESTED" + (props.title ? ": " + props.title : "");
  return (
    <div className="theme-admonition theme-admonition-note admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonition_xJq3 alert alert--warning alert--docofeedback">
      <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonitionHeading_Gvgb">
        <span className="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonitionIcon_Rf37">
          <svg viewBox="0 0 24 24">
            <path
              fill="#494c4e"
              d="M5.136 5C6.164 5 7 5.774 7 6.726v1.547C7 9.226 6.164 10 5.136 10h-.272C3.836 10 3 9.226 3 8.274V6.726C3 5.774 3.836 5 4.864 5h.272m0-2h-.272C2.74 3 1 4.677 1 6.726v1.547C1 10.323 2.74 12 4.864 12h.27C7.262 12 9 10.323 9 8.274V6.726C9 4.676 7.26 3 5.136 3zM5 15c1.654 0 3 1.346 3 3v4l-6-.01V18c0-1.654 1.346-3 3-3m0-2c-2.75 0-5 2.25-5 5v4.33c0 .92.75 1.66 1.67 1.66l6.66.01c.92 0 1.67-.75 1.67-1.67V18c0-2.75-2.25-5-5-5zM22 2v4h-4.633l-.587.59-.78.787V6h-3V2h9m0-2h-9c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v2c0 .35.21.77.51.92.12.05.24.08.36.08.21 0 .41-.07.57-.22L18.2 8H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"
            />
          </svg>
        </span>
        {str}
      </div>
      <div className="admonitionContent_BuS1">{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  docotodo: TodoAdmonition,
  docofeedback: FeedbackAdmonition,
};

export default AdmonitionTypes;
