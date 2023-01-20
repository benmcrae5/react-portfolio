import React  from 'react';
import dragonImg from '../../assets/MiniGame/GreenDragon2.png';

// have a state for the character object, and adjust it as necessary throughout the game

const MGBaddie = () => {
    return (
        <div className='character'>
            <img alt='This is a big, scary monster!'src={dragonImg}/>
            <p>And here's something for the kids...</p>
        </div>
    );
}

export default MGBaddie;