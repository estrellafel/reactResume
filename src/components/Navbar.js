import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
    Navigate,
    Link,
  } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';
import Project from './Project.js';
import AugmentedReality from './AugmentedReality.js';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <HashRouter>
                <ul className='navbar-main'>
                    <li><Link to={'/reactResume'} className='nav-link'>Home</Link></li>
                    <li><Link to={'/reactResume/about'} className='nav-link'>About</Link></li>
                    <li><Link to={'/reactResume/experience'} className='nav-link'>Work Experience</Link></li>
                    <li><Link to={'/reactResume/projects'} className='nav-link'>Projects</Link></li>
                </ul>
                <Routes>
                    <Route path='reactResume' element={<Home/>}/>
                    <Route path='reactResume/about' element={<About/>}/>
                    <Route path='reactResume/experience' element={<Work/>}/>
                    <Route path='reactResume/projects' element={<Project/>}/>
                    <Route path='reactResume/augmentedReality' element={<AugmentedReality/>}/>
                    <Route path='' element={<Navigate to='/reactResume' />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default Navbar;