import React from 'react'
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
    return <Card>
        <h1> About this project </h1>
        <p> This is an React app to leave feedback and rating for a product or service </p>
        <p> Version: 1.0.0 </p>
        <p>
            <Link to={{pathname : '/'}}>
                Back
            </Link>
        </p>
    </Card>
};

export default About;