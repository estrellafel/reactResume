import React from 'react';
import './ResumeSection.css'

class Work extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h1>Work Experience</h1>
                <hr/>
                <div>
                    <h2><b>Atlantic Casualty Insurance Company, Goldsboro, NC</b></h2>
                    <h2>Software Engineer II | 01/2024 - Present</h2>
                    <h2>Software Engineer I | 10/2022 - 01/2024</h2>
                    <ul>
                        <li>Engineered a database-driven form data management system using C#, ASP.NET, Angular, and Oracle, 
                            reducing manual updates and improving efficiency for analysts and engineers</li>
                        <li>Developed and optimized features in C# and legacy VB6 applications, streamlining policy 
                            processing and premium distribution for $500 million annually across SQL Server and Oracle databases</li>
                        <li>Designed and implemented automated target premium logic, helping agents and underwriters make optimal decisions 
                            for policyholders</li>
                        <li>Implemented a proactive data validation feature for a REST API, preventing erroneous ratings and delivering actionable 
                            feedback for insurance personnel</li>
                        <li>Spearheaded the migration of a policy processing application from VB6 to C#, cutting processing time by 85% 
                            and significantly improving accuracy</li>
                        <li>Led onboarding for new engineers, providing hands-on training in the company's proprietary 
                            rating system and policy issuance software</li>
                        <li>Integrated new insurance coverages into an existing .NET application using Duck Creek, broadening 
                            available P&C insurance options</li>
                        <li>Integrated multiple wildfire risk APIs into the company’s rating application, enabling hazard assessment and 
                            enhancing underwriting accuracy by storing and leveraging wildfire data</li>
                        <li>Diagnosed and resolved CI/CD pipeline failures in Jenkins, ensuring smooth and 
                            timely software deployments</li>
                    </ul>
                </div>
                <div>
                    <h2><b>Best Buy Corporate, Richfield, MN</b></h2>
                    <h2>Digital Engineering Intern | 06/2021 - 08/2021</h2>
                    <ul>
                        <li>Created and modified existing React components on a user facing team</li>
                        <li>Optimized applications using lazy loading, loadable components, and by reviewing data
                            structures to decrease initial loading time by 39.95%</li>
                        <li>Performed unit and integration tests with Jest and Cypress to ensure quality code
                            production</li>
                    </ul>
                </div>
                <div>
                    <h2><b>RealityBLU, Beloit, WI</b></h2>
                    <h2>Software Developer Intern | 06/2020 - 08/2020</h2>
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