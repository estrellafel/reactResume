import React from 'react';
import './Project.css'

class Project extends React.Component {
    render() {
        return (
            <div className='project'>
                <div className='work'>
                    <h1>Work Projects</h1>
                    <div>
                        <h2>Interactive 3D View</h2>
                        <p>
                            The idea behind the project was to create an interactive experience for 
                            users. Using the Google Model Viewer I was able to help create an enjoyable
                            experience for the users while also not bloating the web application's loading time.
                            Once in the BestBuy page click on the image and go to "3D View" to see the
                            work I contributed on. There are other products that this also works on throughout
                            the BestBuy catalog. 
                        </p>
                        <div>
                            <a href='https://www.bestbuy.com/site/samsung-27-cu-ft-large-capacity-3-door-french-door-refrigerator-with-external-water-ice-dispenser-stainless-steel/6401612.p?skuId=6401612'>Live Example</a>
                        </div>
                    </div>
                </div>
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