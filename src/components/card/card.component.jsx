import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img 
         alt='brother'
         src={`https://robohash.org/${props.brother.id}?set=set2&size=180x180`}
        />
        <h2> {props.brother.name} </h2>
        <p> { props.brother.email } </p>
    </div>
);