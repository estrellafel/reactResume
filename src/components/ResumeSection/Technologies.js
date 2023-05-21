import React from 'react';
import './ResumeSection.css'

class Technologies extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h1>Technologies</h1>
                <hr/>
                <div className='table'>
                    <table>
                        <tbody>
                            <tr>
                                <td>SQL</td>
                                <td>HTML</td>
                                <td>CSS</td>
                            </tr>
                            <tr>
                                <td>XML</td>
                                <td>React</td>
                                <td>BitBucket</td>
                            </tr>
                            <tr>
                                <td>Jira</td>
                                <td>Git</td>
                                <td>GitHub</td>
                            </tr>
                            <tr>
                                <td>API Development</td>
                                <td>Bash</td>
                                <td>ETL</td>
                            </tr>
                            <tr>
                                <td>.NET Frameworks</td>
                                <td>Microsoft Suite</td>
                                <td>Jenkins</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Technologies;