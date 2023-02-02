import React from 'react';
import './AugmentedReality.css'
import glb from '../assets/3d.glb'
import usdz from '../assets/3d.usdz'

class AugmentedReality extends React.Component {
    render() {
        return (
            <div className='mv'>
                <h1>Augmented Reality</h1>
                <model-viewer
                    src={glb}
                    ios-src={usdz}
                    alt='A 3D image of the text 3D'
                    camera-controls
                    ar
                    shadow-intensity='1'
                    auto>
                </model-viewer>
            </div>
        );
    }
}

export default AugmentedReality;