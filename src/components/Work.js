import React from 'react';
import './Work.css'

class Work extends React.Component {
    render() {
        return (
            <div className='we'>
                <h1>Work Experience</h1>
                <div>
                    <h2><b>Digital Engineering Intern</b>, Best Buy Corporate, Richfield, MN, 06/2021 - 08/2021</h2>
                    <ul>
                        <li>Created and performed work on existing React components</li>
                        <li>Optimized application to decrease initial loading time by 39.95%</li>
                        <li>Performed unit tests to ensure quality code production</li>
                    </ul>
                </div>
                <div>
                    <h2><b>Intern Software Developer</b>, RealityBLU, Beloit, WI, 07/2020 - 08/2020</h2>
                    <ul>
                        <li>Created a proof of concept for marker-less augmented reality</li>
                        <li>Wrote documentation for software components related to augmented reality</li>
                        <li>Managed various 3D models and implemented them into a program</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Work;