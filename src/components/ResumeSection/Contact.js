import React from 'react';
import './ResumeSection.css'

class Contact extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h1 className='name'>Felix Estrella</h1>
                <hr className='main-line'/>
                <div className='resume-header'>
                    felixestrella7@gmail.com | 608-314-4321
                </div>
            </div>
        );
    }
}

export default Contact;