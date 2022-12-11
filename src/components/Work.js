import React from 'react';
import './Work.css'

class Work extends React.Component {
    render() {
        return (
            <div className='we'>
                <h1>Work Experience</h1>
                <div>
                    <h2><b>Software Engineer</b>, Atlantic Casualty Insurance Company, Goldsboro, NC, 10/2022 - Present</h2>
                </div>
                <div>
                    <h2><b>Digital Engineering Intern</b>, Best Buy Corporate, Richfield, MN, 06/2021 - 08/2021</h2>
                    <ul>
                        <li>Created and modified existing React components on a user facing team</li>
                        <li>Optimized applications using lazy loading, loadable components, and by reviewing data
                            structures to decrease initial loading time by 39.95%</li>
                        <li>Performed unit and integration tests with Jest and Cypress to ensure quality code
                            production</li>
                    </ul>
                </div>
                <div>
                    <h2><b>Intern Software Developer</b>, RealityBLU, Beloit, WI, 07/2020 - 08/2020</h2>
                    <ul>
                        <li>Created a proof of concept for marker-less augmented reality using Node.js</li>
                        <li>Wrote documentation for software components related to augmented reality</li>
                        <li>Managed various 3D models and implemented them into a program</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Work;