import React from 'react';
import '../../Style/input.css';

function Input(props) {
    return (
        <div>
            <input className='field_body' name={props.name} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;