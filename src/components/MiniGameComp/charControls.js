import React from 'react';


//use for the form to do character controls. Buttons and such. 
const MGCharControls = (props) => {

    return (
        <div className='charCtrl'>
            <form>
                <label></label>
            </form>
            <p>Hero's HP: {props.health}</p>
        </div>
    )
}

export default MGCharControls;