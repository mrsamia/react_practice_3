import React from 'react';
import Input from './Input';

import Button from '../SingleCompnt/Button';
import {Link} from 'react-router-dom';


function InputForm(props) {




    return (
        <div>
            <Input name='username' placeholder="Username"/>
            <Input  name='password' placeholder="Password"/><br></br>
            
            <Link to="/Welcome" className="btn btn-primary btn-style">LOGIN</Link>
        </div>
    );
}

export default InputForm;