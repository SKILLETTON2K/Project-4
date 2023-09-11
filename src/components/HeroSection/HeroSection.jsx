import React from 'react';
import '../../pages/App/App.css'
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        
        <h1>THE BLOCKS ARE WAITING</h1>

        <p>See what we have in store!</p>

        <div className="hero-btns">
            <Button
             className='btns'
             buttonStyle='btn--primary'
             buttonSize='btn--large'>
                GET BUILDING!
            </Button>
        </div>

    </div>
  )
}

export default HeroSection