import React  from 'react';
import MGCharSpot from './charSpot';

const MGBoard = () => {
    return (
        <div className='mg-board container d-flex justify-content-around col'>
            <MGCharSpot>1</MGCharSpot>
            <MGCharSpot>2</MGCharSpot>
            <MGCharSpot>3</MGCharSpot>
            <MGCharSpot>4</MGCharSpot>
        </div>
    )
}

export default MGBoard;