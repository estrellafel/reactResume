import React from 'react';
import './Project.css'

class Project extends React.Component {
    render() {
        return (
            <div className='project'>
                <div className='personal'>
                    <h1>Personal Projects</h1>
                    <div>
                        <h2>Ready Set Read Application</h2>
                        <p>
                            The main purpose of this project was to learn more about Flask and databases. This is a 
                            project that keeps track of what books a user has read and the rating they have given the books. 
                            Also, there are various ways a user can search for books in the application.
                        </p>
                        <div>
                            <a href='https://github.com/estrellafel/readingDbSqlite'>GitHub Repository</a>
                        </div>
                    </div>
                    <div>
                        <h2>Terminal in C</h2>
                        <p>
                            This is a program that is a shell, like bash for example. It can take in a bunch of differnet 
                            commands such as ls, date, and many more. It can run commands in the foreground and in the background. 
                            Also, this program has a few builtin commands that are exit, fg, history, jobs, and wait. Plus, this 
                            program can do file redirection. Lastly, the program supports interactive mode which takes user input 
                            and batch mode which takes in one or more files.
                        </p>
                        <div>
                            <a href='https://github.com/estrellafel/os_terminal'>GitHub Repository</a>
                        </div>
                    </div>
                    <div>
                        <h2>Design Practice</h2>
                        <p>
                            This repository contains web design practice in html, css, and javascript. There
                            are multiple projects in this repository that may be explored.
                        </p>
                        <div>
                            <a href='https://github.com/estrellafel/designPractice'>GitHub Repository</a>
                        </div>
                    </div>
                    <div>
                        <h2>Funky Fresh Food Finder</h2>
                        <p>
                            This project uses the Yelp Fusion API to display a restaurant to a user. It will take
                            in user input, vet the input, make a call to the API, and retrieve the information to
                            show the user. The application uses Flask and Python3. 
                        </p>
                        <div>
                            <a href='https://github.com/estrellafel/pythonProjectCs224'>GitHub Repository</a>
                        </div>
                    </div>
                    <div>
                        <h2>React Online Resume</h2>
                        <p>
                            The code for the website you are currently on! This application uses React.
                        </p>
                        <div>
                            <a href='https://github.com/estrellafel/reactResume'>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;