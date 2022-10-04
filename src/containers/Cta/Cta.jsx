import React from 'react';
import './Cta.scss';
import { Button } from '../../components';

function Cta() {
    return (
        <section className="cta" id="cta">
            <div className="cta__container container">
                <div className="cta__box">
                    <p className="cta__txt">There’s never been<br />a better time to start.</p>
                    <h2 className="cta__title">The time is <span className='underline underline--green'>now.</span></h2>
                    <Button btnUrl="#target" btnClass="my-btn--border" btnContentClass="my-btn__content--border">Talk to Us</Button>
                </div>
            </div>
        </section>
    )
}

export default Cta