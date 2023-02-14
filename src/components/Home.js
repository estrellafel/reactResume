import React from 'react';
import './Home.css'
import NameHeader from './NameHeader.js';
import CardList from './CardList.js';
import Social from './Social';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NameHeader firstName='Felix' lastName='Estrella'/>
                <div className='card-containter'>
                    <CardList className='card' topic='Programming Languages' info='Java, Python, SQL, JavaScript, C, C#, Visual Basic, HTML, CSS, Functional Programming'/>
                    <CardList className='card' topic='Technical Skills' info='React, Git, BitBucket, Jira, Jenkins, Flask, macOS, Excel, Linux, Node.js, NPM, GitHub, Jest, MySQL, 
                    SQLite, Oracle Database, Microsoft SQL Server Express, Bash, .NET Framework'/>
                    <CardList className='card' topic='Education' info='University of Wisconsin-La Crosse, Bachelors of Science, Computer Science, GPA: 3.650'/>
                    <CardList className='card' topic='Work Experience' 
                        info='Software Engineer - Atlantic Casualty Insurance Company, Digital Engineering Intern - Corporate Best Buy, Intern Software Developer - RealityBLU'/>
                    <CardList className='card' topic='Contact Information' info='Email - felixestrella7@gmail.com, Phone Number - 608.314.4321'/>
                </div>
                <Social/>
            </div>
        );
    }
}

export default Home;