import React, { Component } from "react";
import { elements } from "./_data";

export default class Element extends Component {
  state = {
    hover: false,
  };

  openInfo = (event) => {
    this.props.showInfo(this.props.num);
  };

  onMouseEnter = (event) => {
    this.setState({ hover: true });
  };

  onMouseLeave = (event) => {
    this.setState({ hover: false });
  };

  render() {
    let { num } = this.props;
    let element = elements[num];
    let shade = element.symbol in this.props.toShow ? {} : { opacity: "0.5" };
    return (
      <div
        title={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        className={`element element-${num} ${element.category} ${
          this.state.hover ? "active" : ""
        }`}
        style={shade}
      >
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </div>
    );
  }
}
