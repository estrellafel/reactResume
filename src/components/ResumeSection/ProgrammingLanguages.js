import React from 'react';
import './ResumeSection.css'

class ProgrammingLanguages extends React.Component {
    render() {
        return (
            <div className='resume-section'>
                <h1>Programming Languages</h1>
                <hr/>
                <div className='table'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Java</td>
                                <td>Python</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>C#</td>
                                <td>Visual Basic</td>
                                <td>JavaScript</td>
                            </tr>
                            <tr>
                                <td>TypeScript</td>
                                <td>Scheme</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProgrammingLanguages;