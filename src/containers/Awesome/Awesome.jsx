import React from 'react';
import './Awesome.scss';
import { Card } from '../../components'
import { IoMdChatboxes } from 'react-icons/io';
import { GiPuzzle } from 'react-icons/gi';
import { ImFlag } from 'react-icons/im';


const cardData = [
    {
        image: React.createElement(IoMdChatboxes, { className: 'card__img' }),
        title: 'growth',
        subtitle: 'framework',
        text: 'The Business Growth Framework is our full consultancy approach programme.',
        target: '#target'
    },
    {
        image: React.createElement(GiPuzzle, { className: 'card__img' }),
        title: 'growth',
        subtitle: 'academy',
        text: 'Perfect for businesses who want to master The Growth Framework for themselves.',
        target: '#target'
    },
    {
        image: React.createElement(ImFlag, { className: 'card__img' }),
        title: 'growth',
        subtitle: 'club',
        text: 'The Growth Club provides a focused, supportive space for you to work on your business.',
        target: '#target'
    },
];

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

                    {cardData.map((item, index) => (
                        <div className="awesome__col col-12 col-lg-4">
                            <Card image={item.image} title={item.title} subtitle={item.subtitle} text={item.text} target={item.target} key={item.title + index} />
                        </div>
                    ))}

                </div>
            </div>
        </section >
    )
}

export default Awesome