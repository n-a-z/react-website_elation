import React from 'react';
import './Awesome.scss';

function Awesome() {
    return (
        <section className="awesome">
            <div className="awesome__container container">
                <div className="awesome__row row">
                    <div className="awesome__col col-12">
                        <div className="awesome__box">
                            <h2 className="awesome__title">It’s time to make your business <span className='underline underline--green'>awesome.</span></h2>
                            <p className="awesome__txt">The Growth Academy gives business leaders the tools to implement a blueprint for attaining growth. Using a unique and proven methodology, we enable you to create a healthier and efficient team that will transform sales and break through barriers to let your business thrive.</p>
                        </div>
                    </div>
                    <div className="awesome__col col-12 col-lg-6">


                    </div>
                </div>
            </div>
        </section >
    )
}

export default Awesome