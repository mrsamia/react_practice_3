import React from 'react';
import{Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Welcome from '../Pages/Welcome';

function Routing(props) {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Services" element={<Services/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Welcome" element={<Welcome/>}/>
            </Routes>

        </div>
    );
}

export default Routing;