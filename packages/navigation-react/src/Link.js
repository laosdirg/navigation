import React, { Component } from "react";

import { withContext } from "./Context.js";

class Link extends Component {
  handleClick = event => {
    event.preventDefault();
    this.props.history.push(this.props.href);
  };
  render() {
    const { children, href } = this.props;
    return (
      <a href={href} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export default withContext(Link);
