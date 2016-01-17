/* Amanda O'Brien Portfolio Site
 * https://github.com/acgobrien/acgobrien.github.io
 * Copyright (c) Brandon Ogle (@blogle) | MIT license
 */

import React, {Component} from 'react';
import styles from './Carousel.scss';

class Carousel extends Component {

    constructor() {
      super();
      this.state = {image: 0};
    }

    getImage = (idx) => {
      return this.props.gallery[idx];
    }

    nextImage() {
      const nextImg = this.state.image + 1;
      const idx = nextImg < this.props.gallery.length ? nextImg : 0;
      this.setState({image: idx});
    }

    previousImage() {
      const prevImg = (this.state.image - 1);
      const idx =  prevImg >= 0 ? prevImg : this.props.gallery.length - 1;
      this.setState({image: idx});
    }

    render() {
      const idx = this.state.image;
      return (
        <div>
          <img src={this.getImage(idx)}/>
          <span className={styles.idx-btn}
                onClick={this.previousImage.bind(this)}>
                previous </span>
          <span className={styles.idx-btn}
                onClick={this.nextImage.bind(this)}>
                next </span>
        </div>
      );
    }
}

export default Carousel;
