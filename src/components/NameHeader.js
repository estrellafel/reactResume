import React from 'react';
import './NameHeader.css'

class NameHeader extends React.Component {
    render() {
        return (
            <h1>{this.props.firstName} {this.props.lastName}</h1>
        );
    }
    export 
}

export default NameHeader;