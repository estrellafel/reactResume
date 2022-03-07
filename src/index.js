import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameHeader from './components/NameHeader.js';
import CardList from './components/CardList.js';
import JobHeader from './components/JobHeader.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NameHeader firstName='Felix' lastName='Estrella'/>
    <JobHeader job='Software Engineer'/>
    <div className='card-containter'>
      <CardList className='card' topic='Programming Languages' info='Java, Python, Javascript, C, SQL, HTML, CSS, Functional Programming'/>
      <CardList className='card' topic='Technical Skills' info='Augmented Reality, RDMS, React, Git, BitBucket, Jira, Jenkins'/>
      <CardList className='card' topic='Education' info='University of Wisconsin-La Crosse, Bachelors of Science, Computer Science, GPA: 3.630'/>
      <CardList className='card' topic='Past Employment' 
        info='Digital Engineering Intern - Corporate Best Buy, Intern Software Developer - RealityBLU, Peer Tutor - University of Wisconsin-La Crosse'/>
      <CardList className='card' topic='Job Interest' info='Software Engineer, Software Developer, Backend Developer, Full Stack Developer'/>
      <CardList className='card' topic='Contact Information' info='Email - felixestrella7@gmail.com, Phone Number - 608.314.4321'/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
