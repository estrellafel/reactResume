import React from 'react';
import './Home.css'
import NameHeader from './NameHeader.js';
import CardList from './CardList.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NameHeader firstName='Felix' lastName='Estrella'/>
                <div className='card-containter'>
                    <CardList className='card' topic='Programming Languages' info='Java, Python, JavaScript, C, C++, SQL, HTML, CSS, Functional Programming'/>
                    <CardList className='card' topic='Technical Skills' info='RDMS, React, Git, BitBucket, Jira, Jenkins, Flask, macOS, Linux, Node.js, NPM, GitHub, Jest, MySQL, SQLite, Bash'/>
                    <CardList className='card' topic='Education' info='University of Wisconsin-La Crosse, Bachelors of Science, Computer Science, GPA: 3.650'/>
                    <CardList className='card' topic='Work Experience' 
                        info='Digital Engineering Intern - Corporate Best Buy, Intern Software Developer - RealityBLU'/>
                    <CardList className='card' topic='Job Interest' info='Software Engineer, Data Engineer, Data Analyst'/>
                    <CardList className='card' topic='Contact Information' info='Email - felixestrella7@gmail.com, Phone Number - 608.314.4321'/>
                </div>
            </div>
        );
    }
}

export default Home;