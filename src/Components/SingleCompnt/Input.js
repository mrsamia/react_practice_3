import React from 'react';
import '../../Style/input.css';

function Input(props) {
    const Icon = props.Icon
    return (
        <div className='position-relative' style={{width: 'unset'}}>
            {Icon}
            <input
                className='field_body'
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    );
}

export default Input;