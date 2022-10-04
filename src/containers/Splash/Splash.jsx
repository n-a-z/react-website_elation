import React from 'react';
import './Splash.scss';
import Slider from "react-slick";
import { Button } from '../../components';

function Splash() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <section className='splash'>
      <div className="splash__container container">
        <Slider {...settings}>

          <div className="splash__slide">
            <div className="splash__row row">
              <div className="splash__col col-12 col-md-6">
                <h1 className='splash__title'>
                  A <span className='underline'>proven</span> formula to reinvigorate and advance your business.
                </h1>
                <Button btnUrl="#target" btnClass="my-btn--clipped">Learn More</Button>
              </div>

            </div>
          </div>

          <div className="splash__slide">
            <div className="splash__row row">
              <div className="splash__col col-12 col-md-6">
                <h1 className='splash__title'>
                  This is the  <span className='underline'>Second</span> Slide.
                </h1>
                <Button btnUrl="#target" btnClass="my-btn--clipped">Learn More</Button>
              </div>
            </div>
          </div>

          <div className="splash__slide">
            <div className="splash__row row">
              <div className="splash__col col-12 col-md-6">
                <h1 className='splash__title'>
                  This is the  <span className='underline'>Third</span> Slide.
                </h1>
                <Button btnUrl="#target" btnClass="my-btn--clipped">Learn More</Button>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  )
}

export default Splash