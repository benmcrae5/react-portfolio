import React , { useState } from 'react';

import MGBaddie from './baddie';
import MGBoard from './board';
import MGCharInfo from './character';

const MGMain = (props) => {
    const [charHealth, setCharHealth] = useState(20);
    const [diceGroup, setDiceGroup] = useState(null);

    return (
        <div className='mg-main container d-flex justify-content-around row'>
            <MGCharInfo 
                health={charHealth} 
                hpSet={setCharHealth}
                diceGroup={diceGroup}
                diceSet={setDiceGroup}
            />
            <MGBoard></MGBoard>
            <MGBaddie></MGBaddie>
        </div>
    )
}

export default MGMain;