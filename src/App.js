import React, { Component } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
import { Transition, animated } from "react-spring/renderprops";
import ComponentFour from "./ComponentFour";

class App extends Component {
  state = {
    showComponentThree: false,
  };

  toggle = (e) =>
    this.setState({ showComponentThree: !this.state.showComponentThree });

  componentDidMount() {
    setInterval(() => {
      this.setState({
        showComponentThree: !this.state.showComponentThree,
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <ComponentOne />
        <ComponentTwo toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponentThree}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props}>
                <ComponentThree />
              </animated.div>
            ))
          }
        </Transition>
        <ComponentFour />
      </div>
    );
  }
}

export default App;
