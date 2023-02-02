import React from 'react';
import './About.css'
import ProfileImage from './ProfileImage';
import glb from '../assets/3d.glb'

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <ProfileImage className='about-image'/>
                <p className='about-p'>
                    Hi! My name is Felix Estrella. I am a graduate from the University of Wisconsin - La 
                    Crosse where I obtained a Bachelor of Science in Computer Science with minors in Mathematics 
                    and Economics. I graduated with a GPA of 3.650, was on the Dean's List for 6 semesters, and
                    graduated with honors.
                </p>
                <p className='about-p'>
                    In college, I was very involved in extracurricular activities. I served as the President of CODERS, 
                    a student organization focused on promoting the field of computer science to all communties. I also 
                    served as a Senator in the Student Association where I represented the Latin American Student Organization. 
                    Additionally, I was an executive member of the Latin American Student Organization where I helped plan 
                    and organize cultural events and activities. Through these experiences, I developed strong leadership 
                    and teamwork skills. 
                </p>
                <p className='about-p'>
                    Currently, I am working as a Software Engineer at Atlantic Casualty Insurance Company where I implemented 
                    a database-driven approach for form data management and retrieval using C#, ASP.NET, Angular, Oracle Database, 
                    and SQL. This resulted in saved time for analysts and engineers on future form updates. Also, I communicated 
                    with business stakeholders to create clear and effective JIRA stories, which facilitated the implementation of 
                    solutions by engineers. Plus, I optimized database connections, resulting in a significant decrease in connection 
                    timeouts and improved overall performance. Additionally, I instituted a new data validation feature for a REST API, which 
                    effectively prevented incorrect ratings from being returned to insurance personnel. Futhermore, I developed 
                    and maintained regular expressions for data validation, including identifying and updating out-of-date expressions 
                    to improve accuracy and efficiency in a .NET application.
                </p>
                <p className='about-p'>
                    Prior to my current position, I interned at Best Buy Corporate where I created and modified React components on a user-facing team. 
                    I also optimized applications using lazy loading, loadable components, and by reviewing data structures to decrease initial loading time by 39.95%. 
                    I performed unit and integration tests with Jest and Cypress to ensure quality code production.
                </p>
                <p className='about-p'>
                    Before that, I interned at RealityBLU where I created an internal website to demonstrate the abilities of augmented reality using HTML5, CSS3, JavaScript, 
                    Node.js, and Python. I also wrote documentation for software components related to augmented reality and managed various 3D models that were implemented 
                    into a program.
                </p>
                <model-viewer
                    src={glb}
                    alt="A rock"
                    camera-controls
                    ar>
                </model-viewer>
            </div>
        );
    }
}

export default About;