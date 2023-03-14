import React from 'react';
import './ResumeSection.css'

class Education extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h1>Education</h1>
                <hr/>
                <div>
                    <h2><b>University of Wisconsin-La Crosse</b>, La Crosse, WI</h2>
                    <ul>
                        <li>Bachelor of Science in Computer Science</li>
                        <li>Minors: Mathematics and Economics</li>
                        <li>GPA: 3.650</li>
                        <li>Graduated with honors</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Education;