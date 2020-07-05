import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Carousel } from '..';

import img1 from './res/img1.jpg';
import img2 from './res/img2.jpg';
import img3 from './res/img3.jpg';
import img4 from './res/img4.jpg';
import img5 from './res/img5.jpg';
import img6 from './res/img6.jpg';
import img7 from './res/img7.jpg';
import img8 from './res/img8.jpg';

import '../src/styles.css';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const App = () => {
  return (
    <div>
			<Carousel images={images} imageHeight="600px" imageWidth="600px"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
