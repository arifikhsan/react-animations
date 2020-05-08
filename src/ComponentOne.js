import React from "react";
import { Spring } from "react-spring/renderprops";

export default function ComponentOne() {
  return (
    <div>
      <Spring
        from={{ opacity: 0, marginRight: -500 }}
        to={{ opacity: 1, marginRight: 0 }}
        delay="1000"
        duration="2000"
      >
        {(props) => (
          <div style={props}>
            <h1>Component One</h1>
            <p>
              Deserunt nulla eu tempor voluptate eu consectetur officia ut anim
              pariatur Lorem sit. Laborum aliqua aliquip id consectetur.
            </p>
          </div>
        )}
      </Spring>
    </div>
  );
}
