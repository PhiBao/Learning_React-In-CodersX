import React, { Component } from "react";
import cx from 'classnames';
import "./Image.css";

class Image extends Component {

  constructor(props) {
    super(props);
    this.addClassName = this.addClassName.bind(this);
    this.state = {
      checked: false,
    };
  }
  addClassName() {
    this.setState({ checked: true });
  }

  render() {

    const targetClassName = cx({ 'checked': this.state.checked });

    return (
      <td>
        <img className={targetClassName} onClick={this.addClassName} src="http://bit.ly/3ayPusa" alt={this.props.index}/>
      </td>
    );
  };
};

export default Image;
