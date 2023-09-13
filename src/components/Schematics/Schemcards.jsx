import React from 'react';
import './Schemcards.css';
import CardItem from '../CardItem/CardItem'
import Schem from '../../schems/GA.schem'
import Schem1 from '../../schems/first-home.schem'
import Schem2 from '../../schems/amethyst-home.schem'
import Schem3 from '../../schems/sugar-farm.schem'
import Schem4 from '../../schems/mushroom-home.schem'
import Schem5 from '../../schems/windmill.schem'
import Schem6 from '../../schems/honey-home.schem'
import CardItemTest from '../CardItem/CardItemTest'



function Schemcards() {


  return (
    <div className='schemcards'>
      <div className='schemcards__container'>
        <div className='schemcards__wrapper'>
          <ul className='schemcards__items'>

            <CardItemTest
              src='images/img-9.jpg'
              text='G.A. Logo &nbsp; || &nbsp; Blocks: 1,674 &nbsp; || &nbsp; By: Ashton &nbsp;'
              label='Featured Download'
              schematic={Schem}
            />

            <CardItemTest
              src='images/img-3.jpg'
              text='3 Story House &nbsp; || &nbsp; Blocks: 25,172 &nbsp; || &nbsp; By: Ashton'
              label='Featured Download'
              schematic={Schem1}
            />
          </ul>

          <ul className='schemcards__items'>

            <CardItemTest
              src='images/img-4.jpg'
              text='Amethyst Home &nbsp; || &nbsp;Blocks: 5,120 &nbsp; || &nbsp; By: Marina'
              label='Download'
              schematic={Schem2}
            />

            <CardItemTest
              src='images/img-5.jpg'
              text='Sugarcane Farm &nbsp; || &nbsp;Blocks: 1,540 &nbsp; || &nbsp; By: Marina'
              label='Download'
              schematic={Schem3}
            />

            <CardItemTest
              src='images/img-6.jpg'
              text='Mushroom Home &nbsp;||&nbsp;Blocks:14,300&nbsp; || &nbsp; By: Anna'
              label='Download'
              schematic={Schem4}
            />

            <CardItemTest
              src='images/img-7.jpg'
              text='Windmill Build  &nbsp;  ||  &nbsp;Blocks: 11,067 &nbsp;|| &nbsp;   By: Anna'
              label='Download'
              schematic={Schem5}
            />
            
            <CardItemTest
              src='images/img-10.jpg'
              text='Honey Home&nbsp;|| &nbsp; Blocks: 8,736 &nbsp; || &nbsp; By: Anna &nbsp;'
              label='Download'
              schematic={Schem6}
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schemcards;