import React from 'react';
import './Home.css'
import felix_e from '../assets/felix-professional.jpeg'
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
                        Hey, I'm Felix Estrella and thanks for visiting!
                    </p>
                    <p>
                        I’m a software engineer with a passion for product development, data engineering, and optimization. 
                        Over the years, I’ve had the privilege of working on high impact projects at RealityBLU, Best Buy, 
                        and Atlantic Casualty Insurance. These experiences have honed my ability to design scalable systems, 
                        integrate data driven solutions, and optimize business critical workflows that drive measurable results. 
                        I specialize in building technology that not only works but delivers measurable value by increasing efficiency, 
                        improving accuracy, and enabling smarter business decisions.
                    </p>
                    <p>
                        At Atlantic Casualty, I played a key role in projects that impacted $500M+ in annual premium volume, migrating 
                        legacy systems to modern frameworks, optimizing rating engines, and integrating risk data to enhance 
                        underwriting accuracy. I’m driven by the intersection of technology and business strategy, where I can deliver 
                        both technical excellence and tangible business value.
                    </p>
                    <p>
                        When I’m not immersed in code, you’ll find me trying (and usually failing) to keep up with my workout routine, 
                        watching movies I swear I’ve seen before, and enjoying the chaos of family and friends. As a Chicago sports fan, 
                        I’ve mastered the art of optimistic disappointment on game days.
                    </p>
                    <p>
                        This website is a glimpse into my professional world, but I’d love to connect with you. If you’re looking for 
                        someone who can build, optimize, and drive business impact through technology, let’s talk. You’ll find my contact 
                        info under the “Resume” tab, and you can also explore my LinkedIn and GitHub linked below.
                    </p>
                </div>
                <Social/>
            </div>
        );
    }
}

export default Home;