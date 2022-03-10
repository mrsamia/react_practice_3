import React from 'react';
import Button from '../SingleCompnt/Button';
import Input from '../SingleCompnt/Input';

function Login(props) {
    return (
        <div className='main_body form_body vh-100'>
            <Input  name='username' placeholder="Username"/>
            <Input  name='password' placeholder="Password"/><br></br>
            <Button name="LOGIN"/>
        </div>
    );
}

export default Login;