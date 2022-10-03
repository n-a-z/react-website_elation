import React from 'react';
import './Splash.scss';
import Slider from "react-slick";
import { Button, Navbar } from '../../components';
import splashOne from '../../images/splash_01.png';

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

      <Navbar />

      <Slider {...settings}>

        <div className="splash__slide">
          <div className="splash__row row">
            <div className="splash__col col-12 col-md-6">
              <h1 className='splash__title'>
                A <span className='underline'>proven</span> formula to reinvigorate and advance your business.
              </h1>
              <div className="splash__btn">
                <Button />
              </div>
            </div>
            <div className="splash__col col-12 col-md-6">
              <img src={splashOne} className='splash__img' alt="Splash" />
            </div>
          </div>
        </div>

        <div className="splash__slide">
          <div className="splash__row row">
            <div className="splash__col col-12 col-md-6">
              <h1 className='splash__title'>
                A <span className='underline'>proven</span> formula to reinvigorate and advance your business.
              </h1>
              <div className="splash__btn">
              </div>
            </div>
            <div className="splash__col col-12 col-md-6">
              <img src={splashOne} className='splash__img' alt="Splash" />
            </div>
          </div>
        </div>

      </Slider>
    </section>
  )
}

export default Splash