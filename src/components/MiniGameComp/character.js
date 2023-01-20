import React  from 'react';
import CharCtrl from './charControls';
import charPic from '../../assets/MiniGame/DiamondSwordToken.png';

const MGCharacter = (props) => {
    return (
        <div className='character container '>
            <img alt="There's a hero around here somewhere..." src = {charPic}/>
            <CharCtrl {...props}/>
        </div>
    )
}

export default MGCharacter;