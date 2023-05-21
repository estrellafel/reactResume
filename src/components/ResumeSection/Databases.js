import React from 'react';
import './ResumeSection.css'

class Databases extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h1>Databases</h1>
                <hr/>
                <div className='table'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Oracle Database</td>
                                <td>Microsoft SQL Server</td>
                                <td>MySQL</td>
                            </tr>
                            <tr>
                                <td>SQLite</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Databases;