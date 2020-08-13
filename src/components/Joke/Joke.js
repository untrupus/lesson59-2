import React from 'react';
import './Joke.css';

const Joke = props => {
    return (
        <div>
            <p>{props.value}</p>
        </div>
    );
};

export default Joke;