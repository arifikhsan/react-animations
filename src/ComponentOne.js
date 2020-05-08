import React from "react";
import { Spring } from "react-spring/renderprops";

export default function ComponentOne() {
  return (
    <div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        delay="1000"
        duration="2000"
      >
        {(props) => (
          <div style={props}>
            <h1>Component One</h1>
            <p>
              Deserunt nulla eu tempor voluptate eu consectetur officia ut anim
              pariatur Lorem sit. Laborum aliqua aliquip id consectetur.
              Reprehenderit labore esse excepteur anim mollit sit eiusmod in
              esse velit dolor veniam. Fugiat aliqua sint occaecat enim anim
              laboris consequat cupidatat sint qui id fugiat. Cillum minim
              pariatur proident tempor minim excepteur non aliqua cupidatat
              esse. Cillum pariatur sunt nostrud aliquip proident irure deserunt
              et commodo cupidatat in. Laborum in ut aute elit ipsum mollit
              labore reprehenderit aliquip commodo.
            </p>
          </div>
        )}
      </Spring>
    </div>
  );
}
