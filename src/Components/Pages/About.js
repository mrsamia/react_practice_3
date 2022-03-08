import React from 'react';

function About(props) {

    const AccordionData = {
        title: "Section 1",
        description: "Lorem Ipsum s About Page Lorem Ipsum s About Page "
    }

    // const { title, description } = AccordionData;

    return (
        <div>
           
            <div className='accordion'>
                <div className='accordion-item'>
                    <div className='accordion-title'>
                    <div>{AccordionData.title}</div>
                    <div>+</div>
                    </div>
                    <div className='accordion-content'>{AccordionData.description}</div>
                </div>
            </div>
        </div>
    );
}

export default About;