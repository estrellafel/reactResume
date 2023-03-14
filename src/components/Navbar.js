import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
    Navigate,
    Link,
  } from "react-router-dom";
import Home from './Home.js';
import Resume from './Resume.js';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <HashRouter>
                <ul className='navbar-main'>
                    <li><Link to={'/reactResume'} className='nav-link'>Home</Link></li>
                    <li><Link to={'/reactResume/resume'} className='nav-link'>Resume</Link></li>
                </ul>
                <Routes>
                    <Route path='reactResume' element={<Home/>}/>
                    <Route path='reactResume/resume' element={<Resume/>}/>
                    <Route path='' element={<Navigate to='/reactResume' />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default Navbar;