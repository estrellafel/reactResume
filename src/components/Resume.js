import React from 'react';
import Work from './ResumeSection/Work';
import Education from './ResumeSection/Education';
import ProgrammingLanguages from './ResumeSection/ProgrammingLanguages';
import Databases from './ResumeSection/Databases';
import Technologies from './ResumeSection/Technologies';
import Contact from './ResumeSection/Contact';
import Social from './Social';
import Certification from './ResumeSection/Certification';

class Resume extends React.Component {
    render() {

        return (
            <div className='resume'>
                <Contact/>
                <Work/>
                <Education/>
                <Certification/>
                <ProgrammingLanguages/>
                <Databases/>
                <Technologies/>
                <Social/>
            </div>
        );
    }
}

export default Resume;