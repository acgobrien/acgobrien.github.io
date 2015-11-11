/* Amanda O'Brien Portfolio Site
 * https://github.com/acgobrien/acgobrien.github.io
 * Copyright (c) Brandon Ogle (@blogle) | MIT license
 */

import React, {Component} from 'react';
import Modal from 'simple-react-modal';
import 'simple-react-modal/dist/modal';

import './Image.scss';

export default class Image extends Component {
    render() {
      return (
            <div>
                <a onClick={this.refs.modal.show}>
                    open modal
                </a>
                <Modal ref="modal"
                       classname="simple-modal">
                       <a className="close"
                          onClick={()=>{this.refs.modal.hide();}}>
                        X
                       </a>
                </Modal>
            </div>
        );
    }
}
