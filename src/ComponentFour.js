import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";

export default class ComponentFour extends Component {
  state = {
    fruits: ["semangka", "rambutan"],
    currentFruitIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentFruitIndex:
          (this.state.currentFruitIndex + 1) % this.state.fruits.length,
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Component Four</h1>
          <p>
            I like to eat{" "}
            <Transition
              native
              items={this.state.currentFruitIndex}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{ duration: 1000 }}
            >
              {(show) =>
                show &&
                ((props) => (
                  <animated.span style={props}>
                    {this.state.fruits[this.state.currentFruitIndex]}
                  </animated.span>
                ))
              }
            </Transition>
            .
          </p>
        </div>
      </div>
    );
  }
}
