import React, { useState } from "react";
import Input from './Input';
import validator from 'validator'
import Button from '../SingleCompnt/Button';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';


function InputForm(props) {

    // const [emailError, setEmailError] = useState('')
    // const validateEmail = (e) => {
    //   var email = e.target.value

    //   if (validator.isEmail(email)) {
    //     setEmailError('Valid Email :)')
    //   } else {
    //     setEmailError('Enter valid Email!')
    //   }
    // }



    return (
        <div style={{width: 'fit-content', margin: '0 auto'}}>
            <div className="pt-5 pb-4">
                <img style={{ width: "90px", height: "90px" }} src={require("../Assets/Group.png")} />
            </div>

            <Input Icon={<FaUser className="user_icon"/>} type="text" name='username' placeholder="Username" /><br></br>
            <Input Icon={<FaLock className="lock_icon"/>} type="password" name='password' placeholder="Password" /><br></br>

            <div>
                <Link to="/Welcome" className="btn btn-primary btn-style">LOGIN</Link>
            </div>

            <div>
                <p className="Forgot_p">Forgot Password?</p>
            </div>

        </div>
    );
}

export default InputForm;