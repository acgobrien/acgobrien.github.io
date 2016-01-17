/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';

const req = (...args) => args.map((src) => require(src));
const assets = [
  { thumb: req('./img/blake_570_400.jpg'),
    images: req('./img/blake_cover_960_800.jpg'),
  },
  { thumb: req('./img/avesk_570_400.jpg'),
    images: req('./img/avesk_cover_960_800.jpg'),
  },
  { thumb: req('./img/murer_journal_570_400.jpg'),
    images: req('./img/murer_cover_960_800.jpg'),
  },
  { thumb: req('./img/cibum_crawfish_570_400.jpg'),
    images: req('./img/cibum_crawfish_960_800.jpg'),
  },
];

export default class extends Component {

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Gallery assets={assets}/>
      </div>
    );
  }
}
