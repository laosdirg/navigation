import React, { Component } from "react";

import { Provider } from "./Context.js";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { location: props.history.location };
  }

  componentDidMount() {
    this.props.history.listen(location => {
      this.setState({ location });
    });
  }

  render() {
    return (
      <Provider value={this.props.history}>
        {this.props.children(this.state.location)}
      </Provider>
    );
  }
}

export default Navigation;
