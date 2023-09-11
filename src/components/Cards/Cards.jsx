import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these amazing builds!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Update Me'
              label='Featured'
              path='/schematics'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Update Me'
              label='Featured'
              path='/schematics'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Signed in? Check out our entire schematic library!'
              label='Schematics'
              path='/schematics'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Check out our FAQ page that may answer your questions!'
              label='FAQs'
              path='/faqs'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Sign up today get access to our entire library!'
              label='Sign-Up'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;