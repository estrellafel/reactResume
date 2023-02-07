import React from 'react';
import './Social.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

class Social extends React.Component {
    render() {
        return (
            <div className='social'>
                <ul>
                    <li> <a href='https://github.com/estrellafel'> <FontAwesomeIcon icon={faGithub} /> </a> </li>
                    <li> <a href='https://www.linkedin.com/in/felix-estrella-4541461b5/'> <FontAwesomeIcon icon={faLinkedinIn} /> </a> </li>
                </ul>
            </div>
        );
    }
}

export default Social;