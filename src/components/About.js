import React from 'react';
import './About.css'
import ProfileImage from './ProfileImage';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <ProfileImage className='about-image'/>
                <p className='about-p'>
                    My name is Felix Estrella, and I am a software engineer. In May of 2022, I graduated
                    with honors from the University of Wisconsin-La Crosse. I received a bachelors of science majoring in Computer Science 
                    while minoring in both Mathematics and Economics. Durning my time in school I was an active member 
                    on campus as I was part of multiple organizations executive teams and worked a job on campus. I held multiple positions in
                    CODERS with my last one being president and was a senator for both the Student Association and
                    the Latin American Student Organization. In addition to my schooling, I also worked two different
                    internships in software engineering that have led me to find a true passion for programming
                    and the process that is involved to take a software product live. 
                </p>
                <p className='about-p'>
                    This website was designed to showcase a portion of my skills when it comes to the web. 
                    My areas of interest within computer science are software engineering and databases. Also,
                    I am always excited to learn about new technologies along with their applications. I hope 
                    that you liked the website, and I am always open to feedback for ways to improve the website.  
                </p>
            </div>
        );
    }
}

export default About;