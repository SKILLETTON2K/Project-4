import React from 'react';

function CardItemTest(props) {
  return (
    <>
        <li className='cards__item'>
            <div className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <a href={props.schematic} download={props.fileName} target='_blank'>
                            <button type='button'></button>

                            <img src={props.src} alt="Replace"
                             className="cards__item__img" />
                    </a>
                </figure>
                 <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                 </div>
            </div>

        </li>
    </>
  )
}


export default CardItemTest