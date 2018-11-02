import React from 'react';
import Slider from 'react-slick';

import slider_one from '../../resources/images/slide_one.jpg';
import slider_two from '../../resources/images/slide_two.jpg';
import slider_three from '../../resources/images/slide_three.jpg';

const Carrousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  return (
    <div
      className="carrosel_wrapper"
      style={{
        background: 'red',
        height: `${window.innerHeight}px`,
        overflow:'hidden'
      }}
    >
      <Slider {...settings}>
        <div>
          <div
              className="carrousel_image"
              style={{background: `url(${slider_one})`,
                      height: `${window.innerHeight}px`
                    }}
              >
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slider_two})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slider_three})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;