import React from 'react';
import './Successful.scss';
import { Button } from '../../components';

function Successful() {
    return (
        <section className="successful">
            <div className="successful__container container">
                <div className="successful__row row">
                    <div className="successful__col col-12 col-lg-6">
                        <div className="successful__box">
                            <h2 className="successful__title">For those who know they can be more <span className='underline'>successful,</span> the time is now.</h2>
                        </div>
                    </div>
                    <div className="successful__col col-12 col-lg-6">
                        <div className="successful__box">
                            <p className="successful__txt">The Growth Academy gives business leaders the tools to implement a blueprint for attaining growth. Using a unique and proven methodology, we enable you to create a healthier and efficient team that will transform sales and break through barriers to let your business thrive.</p>
                            <Button btnUrl="#target" btnClass="my-btn--border" btnContentClass="my-btn__content--border">Talk to Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Successful