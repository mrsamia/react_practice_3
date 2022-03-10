import React from 'react';
import '../../Style/login.css';

function Button(props) {

function click(){
    alert(" Successfully Logged in.");
}

    return (
        <div>
            <button className='btn-style' onClick={click}>{props.name}</button>
        </div>
    );
}

export default Button;