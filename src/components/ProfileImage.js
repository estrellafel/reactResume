import React from 'react';
import felix_e from '../assets/felix_e.jpeg'
import './ProfileImage.css'

class ProfileImage extends React.Component {
    render() {
        return (
            <img src={felix_e} alt="Felix Estrella in dress cloths"></img>
        );
    }
}

export default ProfileImage;