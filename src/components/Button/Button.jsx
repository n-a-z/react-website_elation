import React from 'react';
import './Button.scss';

function Button({
    children,
    btnUrl,
    btnClass,
    btnContentClass
}) {
    return (
        <a href={btnUrl} className={`my-btn ${btnClass}`}>
            <div className={`my-btn__content ${btnContentClass}`}
            >
                {children}
            </div>
        </a>
    )
}

export default Button