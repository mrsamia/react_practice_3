import React, { useState } from 'react';

function About(props) {

    // const AccordionData = {
    //     title: "Section 1",
    //     description: "Lorem Ipsum s About Page Lorem Ipsum s About Page "
    // }

    // const { title, description } = AccordionData;

    const [name, setName] = useState({
        title: "Section 1",
        description: "Lorem Ipsum s About Page Lorem Ipsum s About Page ",
        a:"+",
        
    })

    const change = () => {
        setName({ ...name, a: "-" })
     
    }

    return (
        <div>

            <div className='accordion'>
                <div className='accordion-item'>
                    <div className='accordion-title' onClick={change}>
                        <div>{name.title}</div>
                        <div>{name.a}</div>
                    </div>
                    <div className='accordion-content'>{name.description}</div>
                </div>
            </div>
        </div>
    );
}

export default About;