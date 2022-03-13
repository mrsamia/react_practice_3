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
        <div className="App form container">
            <div className="pt-5 pb-4 ">
                <img style={{ width: "90px", height: "90px" }} src={require("../Assets/Group.png")} />
            </div>

            <div>
                <FaUser class="user_icon" />
                <Input type="text" name='username' placeholder="Username" />
            </div>

            {/* <Input name='email' placeholder="Email" type="text" id="userEmail" onChange={(e) => validateEmail(e)}/>
            <p style={{fontWeight: 'bold', color: 'red'}}>{emailError}</p> */}

            <div>
                <FaLock class="lock_icon" />
                <Input type="password" name='password' placeholder="Password" /><br></br>
            </div>

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