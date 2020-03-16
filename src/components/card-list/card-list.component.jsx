import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) =>{
return (<div className='card-list'>
    {props.brothers.map(brother => (
    <Card key={brother.id} brother={brother} />
     ))}
     </div>)
};