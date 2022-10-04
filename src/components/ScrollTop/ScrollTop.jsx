import React from 'react';
import './ScrollTop.scss';

function ScrollTop() {
    let calcScrollValue = () => {
        let scrollProgress = document.querySelector('.scroll-top-progress');
        // let progressValue = document.getElementById('scroll-top-progress__value');
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.classList.add('scroll-top-progress--active');
        } else {
            scrollProgress.classList.remove('scroll-top-progress--active');
        }
        scrollProgress.addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#0cce6b ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    return (
        <div class="scroll-top-progress">
            <span class="scroll-top-progress__value">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </span>
        </div>
    )
}

export default ScrollTop