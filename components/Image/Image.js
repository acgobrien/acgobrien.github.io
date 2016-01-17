/* Amanda O'Brien Portfolio Site
 * https://github.com/acgobrien/acgobrien.github.io
 * Copyright (c) Brandon Ogle (@blogle) | MIT license
 */
import React from 'react';
import Modal from '../Modal/Modal';
import Carousel from '../Carousel/Carousel';

const Image = ({className, thumb, images}) => {
  const image = (
    <img src={thumb}/>
   );

  const carousel = (
    <Carousel gallery={images}/>
  );

  return (
    <Modal
       className={className}
       clickFrame={image}
       content={carousel}/>
  );
};

export default Image;
