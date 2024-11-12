import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function TodoAdmonition(props) {
  return (
    <div className="theme-admonition theme-admonition-important admonition_xJq3 alert alert--warning">
      <div className="admonitionHeading_Gvgb">
        DOCUMENTATION TODO: {props.title}
      </div>
      <div className="admonitionContent_BuS1">
        {props.children}
      </div>
    </div>
  );
}

function FeedbackAdmonition(props) {
  return (
    <div className="theme-admonition theme-admonition-important admonition_xJq3 alert alert--warning">
      <div className="admonitionHeading_Gvgb">
        FEEDBACK REQUESTED: {props.title}
      </div>
      <div className="admonitionContent_BuS1">
        {props.children}
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'docotodo': TodoAdmonition,
  'docofeedback': FeedbackAdmonition,
};

export default AdmonitionTypes;