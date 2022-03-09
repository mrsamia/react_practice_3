import React from 'react';
import Input from '../SingleCompnt/Input';

function Login(props) {
    return (
        <div>
            <Input  name='username' placeholder="Enter Your Name"/>
            <Input  name='email' placeholder="Enter Your Email"/>
        </div>
    );
}

export default Login;