import React from 'react';

const MGCharSpot = (props) => {
    return (
        <div className='board-square col- d-flex justify-content-center align-items-center'>
            <div className=''>
                {props.children}
            </div>
        </div>
    );
}

export default MGCharSpot;