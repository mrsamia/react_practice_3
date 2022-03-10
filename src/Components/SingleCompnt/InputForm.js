import React, { useState } from "react";
import Input from './Input';
import validator from 'validator'
import Button from '../SingleCompnt/Button';
import {Link} from 'react-router-dom';


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
        <div>
            <div className="pt-5 pb-4 ">
                <img src={require("../Assets/Group.png")}/>
            </div>

            <Input name='username' placeholder="Username"/>
            
            {/* <Input name='email' placeholder="Email" type="text" id="userEmail" onChange={(e) => validateEmail(e)}/>
            <p style={{fontWeight: 'bold', color: 'red'}}>{emailError}</p> */}

            <Input  name='password' placeholder="Password"/><br></br>
            
            <Link to="/Welcome" className="btn btn-primary btn-style">LOGIN</Link>
        </div>
    );
}

export default InputForm;