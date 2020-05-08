import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default class ComponentTwo extends Component {
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <h1>Component Two</h1>
              <p>
                Adipisicing amet amet non consectetur ex laborum mollit veniam.
              </p>
              <Spring
                from={{ number: 0 }}
                to={{ number: 10 }}
                config={{ duration: 10000 }}
              >
                {(props) => (
                  <div>
                    <h1>{props.number.toFixed()}</h1>
                  </div>
                )}
              </Spring>
              <button onClick={this.props.toggle}>Show Component Three</button>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
