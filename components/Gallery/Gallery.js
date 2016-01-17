/* Amanda O'Brien Portfolio Site
 * https://github.com/acgobrien/acgobrien.github.io
 * Copyright (c) Brandon Ogle (@blogle) | MIT license
 */

import React from 'react';
import Image from '../Image/Image';

import styles from './Gallery.scss';

const Gallery = ({assets}) => {
  const galleryItems = assets.map( ({thumb, images}) => {
    return (
      <Image className={styles.gallery_item}
             key={thumb}
             thumb={thumb}
             images={images}/>
    );
  });
  return (
    <section className={styles.gallery_container}>
      {galleryItems}
    </section> 
  );
};

export default Gallery;
