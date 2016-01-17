/* Amanda O'Brien Portfolio Site
 * https://github.com/acgobrien/acgobrien.github.io
 * Copyright (c) Brandon Ogle (@blogle) | MIT license
 */

import React, {Component} from 'react';
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    };
  }

  showModal() {
    this.setState({ display: 'block' });
  }

  hideModal() {
    this.setState({ display: 'none' });
  }

  closeOnBackground(event) {
    if ( event.target.id === 'modal') {
      this.hideModal();
    }
  }

  render() {
    let button;
    button = (
      <a
       onClick={this.showModal.bind(this)}>
           {this.props.clickFrame}
      </a>
    );
    return (
      <span className={this.props.className}>
        {button}
        <div id="modal" style={this.state} onClick={this.closeOnBackground.bind(this)}>
          <span className="modal-close" onClick={this.hideModal.bind(this)}>x</span>
            {this.props.content}
        </div>
      </span>
    );
  }
}

export default Modal;


