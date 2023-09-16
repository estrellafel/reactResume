import React from 'react';
import './ResumeSection.css'

class Work extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h1>Work Experience</h1>
                <hr/>
                <div>
                    <h2><b>Software Engineer</b>, Atlantic Casualty Insurance Company, Goldsboro, NC, 10/2022 - Present</h2>
                    <ul>
                        <li>Implemented a database-driven approach for form data management and retrieval using C#, ASP.NET, 
                            Angular, Oracle Database, and SQL, resulting in saved time for analysts and engineers on future 
                            form updates</li>
                        <li>Developed features for a C# and legacy Visual Basic 6.0 application to efficiently retrieve and 
                            store premium distribution data totalling over 60 million dollars to Microsoft SQL Server and Oracle 
                            Database, significantly improving the company's data-gathering capabilities and providing critical insights 
                            to stakeholders</li>
                        <li>Created a feature to allocate minimum and target property premiums across coverages to provide a more accurate picture 
                            of the cost allocation of each coverage to consumers and business units</li>
                        <li>Instituted a new data validation feature for a REST API to proactively safeguard against erroneous ratings and provide 
                            actionable correction messages to insurance personnel</li>
                        <li>Debugged and resolved build failures in Jenkins within the company’s continuous integration/continuous deployment (CI/CD) 
                            pipeline, ensuring timely and successful delivery of software updates</li>
                    </ul>
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
                    <h2><b>Software Developer Intern</b>, RealityBLU, Beloit, WI, 06/2020 - 08/2020</h2>
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