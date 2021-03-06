import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card card={card} />
      ))}    
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
}

export default Cards;
