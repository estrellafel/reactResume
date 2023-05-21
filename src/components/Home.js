import React from 'react';
import './Home.css'
import felix_e from '../assets/fe.jpeg'
import Social from './Social';

class Home extends React.Component {
    render() {
        return (
            <div className='parent'>
                <div className='name'>
                    <ul>
                        <li>F</li>
                        <li>E</li>
                        <li>L</li>
                        <li>I</li>
                        <li>X</li>
                        <li> </li>
                        <li>E</li>
                        <li>S</li>
                        <li>T</li>
                        <li>R</li>
                        <li>E</li>
                        <li>L</li>
                        <li>L</li>
                        <li>A</li>
                    </ul>
                </div>
                <div className='image'>
                    <img src={felix_e} alt="Felix Estrella in dress cloths"></img>
                </div>
                <div className='text'>
                    <p>
                        Hello, my name is Felix Estrella and thank you for taking the time 
                        to visit my website. I’m a software engineer with interest in databases, 
                        API development, data engineering, and optimization. Throughout my time in the industry 
                        I have worked on numerous projects at RealityBLU, Best Buy, and Atlantic Casualty 
                        Insurance Company which has helped me learn countless skills and practices to help 
                        any software or data team.
                    </p>
                    <p>
                        When I am not coding or querying for data I enjoy working out, watching movies, and 
                        spending time with family and friends. Another way I spend my free time is by watching 
                        sports as I am a Chicago sports fan.
                    </p>
                    <p>
                        I hope you enjoy this website and please feel free to reach out to discuss any opportunities 
                        or computer topics! You can find my contact information on the “Resume” tab of this website. 
                        Also, my LinkedIn and Github pages are linked below on the bottom left hand corner of the page.
                    </p>
                </div>
                <Social/>
            </div>
        );
    }
}

export default Home;