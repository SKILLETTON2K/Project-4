import React from 'react';
import './Schemcards.css';
import CardItem from '../CardItem/CardItem'



function Schemcards() {
    const fileUrl = '/path/to/your/downloadable/file.pdf';
  return (
    <div className='schemcards'>
      <div className='schemcards__container'>
        <div className='schemcards__wrapper'>
          <ul className='schemcards__items'>
            <CardItem
             src='images/img-9.jpg'
             text='G.A. Logo &nbsp; || &nbsp; Blocks: 1,674 &nbsp; || &nbsp; By: Ashton'
             label='Featured Download'
             path='/schematics'
        >
            <a href={fileUrl} download="first-home.schem">
            Download File
            </a>
            </CardItem>
            <CardItem
              src='images/img-3.jpg'
              text='3 Story House &nbsp; || &nbsp; Blocks: 25,172 &nbsp; || &nbsp; By: Ashton'
              label ='Featured Download'
              path='/schematics'
            />
          </ul>
          <ul className='schemcards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Amethyst Home &nbsp; || &nbsp;Blocks: 5,120 &nbsp; || &nbsp; By: Marina'
              label='Download'
              path='/schematics'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Sugarcane Farm &nbsp; || &nbsp;Blocks: 1,540 &nbsp; || &nbsp; By: Marina'
              label='Download'
              path='/faqs'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Mushroom Home &nbsp;||&nbsp;Blocks:14,300&nbsp; || &nbsp; By: Anna'
              label='Download'
              path='/'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Windmill Build  &nbsp;  ||  &nbsp;Blocks: 11,067 &nbsp;|| &nbsp;   By: Anna'
              label='Download'
              path='/schematics'
            />
            
            <CardItem
              src='images/img-10.jpg'
              text='Honey Home&nbsp;|| &nbsp; Blocks: 8,736 &nbsp; || &nbsp; By: Anna &nbsp;'
              label='Download'
              path='/faqs'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schemcards;