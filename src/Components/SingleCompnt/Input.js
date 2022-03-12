import React from 'react';
import '../../Style/input.css';

function Input(props) {
    return (
        <div>
            <input  className='field_body' type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    );
}

export default Input;