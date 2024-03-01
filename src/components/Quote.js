import React from 'react';
import separator from '../assets/images/icons/separator-pink.svg';

const Quote = (props) => {
    const { quote } = props;

    return (
        <div
            className="title container-fluid text-center"
            data-aos="zoom-in"
            data-aos-duration="1500">
            <div className="h2">{quote}</div>
            <img className="separator" src={separator} alt="separator" />
        </div>
    );
};

export default Quote;
