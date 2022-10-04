import React from 'react';
import './Card.scss';

function Card({
    image,
    title,
    text,
    subtitle,
    target
}) {
    return (
        <div className="card">
            <div className="card__row row">
                <div className="card__col col-3">
                    {image}
                </div>
                <div className="card__col col-9">
                    <h3 className="card__title">{title}<br /><span className="card__subtitle">{subtitle}</span></h3>
                </div>
            </div>
            <p className="card__txt">{text}</p>
            <a href={target} className="card__link">
                <div className="card__cta">
                    <span className="card__cta-txt">Learn More</span>
                    <span className="card__cta-icon">?</span>
                </div>
            </a>
        </div>
    )
}

export default Card