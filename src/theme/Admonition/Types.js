import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";

const classList1 = "theme-admonition theme-admonition-note admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonition_xJq3 alert alert--warning";
const classList2 = "admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonitionHeading_Gvgb";
const classList3 = "admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-Layout-styles-module admonitionIcon_Rf37";
const classList4 = "admonitionContent_BuS1";

function TodoAdmonition(props) {
  var str = "DOCUMENTATION TODO2" + (props.title ? ": " + props.title : "");
  return (
    <div className={`${classList1} alert--docotodo`}>
      <div className={classList2}>
        <span className={classList3}>
          <svg viewBox="0 0 24 24">
            <path d="M2,11H8a1,1,0,0,0,1-1V4A1,1,0,0,0,8,3H2A1,1,0,0,0,1,4v6A1,1,0,0,0,2,11ZM3,5H7V9H3ZM8,21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1ZM3,15H7v4H3ZM23,7a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2H22A1,1,0,0,1,23,7Zm0,10a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2H22A1,1,0,0,1,23,17Z" />
          </svg>
        </span>
        {str}
      </div>
      <div className={classList4}>{props.children}</div>
    </div>
  );
}

function FeedbackAdmonition(props) {
  var str = "FEEDBACK REQUESTED3" + (props.title ? ": " + props.title : "");
  return (
    <div className={`${classList1} alert--docofeedback`}>
      <div className={classList2}>
        <span className={classList3}>
          <svg viewBox="0 0 24 24">
            <path
              fill="#494c4e"
              d="M5.136 5C6.164 5 7 5.774 7 6.726v1.547C7 9.226 6.164 10 5.136 10h-.272C3.836 10 3 9.226 3 8.274V6.726C3 5.774 3.836 5 4.864 5h.272m0-2h-.272C2.74 3 1 4.677 1 6.726v1.547C1 10.323 2.74 12 4.864 12h.27C7.262 12 9 10.323 9 8.274V6.726C9 4.676 7.26 3 5.136 3zM5 15c1.654 0 3 1.346 3 3v4l-6-.01V18c0-1.654 1.346-3 3-3m0-2c-2.75 0-5 2.25-5 5v4.33c0 .92.75 1.66 1.67 1.66l6.66.01c.92 0 1.67-.75 1.67-1.67V18c0-2.75-2.25-5-5-5zM22 2v4h-4.633l-.587.59-.78.787V6h-3V2h9m0-2h-9c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v2c0 .35.21.77.51.92.12.05.24.08.36.08.21 0 .41-.07.57-.22L18.2 8H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"
            />
          </svg>
        </span>
        {str}
      </div>
      <div className={classList4}>{props.children}</div>
    </div>
  );
}

function ScopeAdmonition(props) {
  var str = "[SCOPE]" + (props.title ? " " + props.title : "");
  return (
    <div className={`${classList1} alert--docoscope`}>
      <div className={classList2}>
        <span className={classList3}>
          <svg viewBox="0 0 24 24">
            <path d="M4 12H4.01M8 12H8.01M16 12H16.01M12 12H12.01M20 12H20.01M8.5 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V8.5M15.5 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.07989 20 7.2V8.5M20 15.5V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20H15.5M4 15.5V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H8.5" 
              stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        {str}
      </div>
      <div className={classList4}>{props.children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  docotodo: TodoAdmonition,
  docofeedback: FeedbackAdmonition,
  docoscope: ScopeAdmonition,
};

export default AdmonitionTypes;
