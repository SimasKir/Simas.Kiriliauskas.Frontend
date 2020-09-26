import React from 'react';
import './Buttons.scss';
import Button from '@material-ui/core/Button';

const Buttons = ( props ) => {
    return (
        <div>
            <Button onClick={props.directionClick}>Turn</Button>
            <Button onClick={props.axisClick}>Move</Button>
        </div>
    )
}

export default Buttons;
