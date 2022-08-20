import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react'

const AboutLinkIcon = ({style}) => {
    return (
        <div className="about-link" style={style}>
            <Link to={{ pathname: "/about" }}>
                <FaQuestion size={30} />
            </Link>
        </div>
    );
};

export default AboutLinkIcon;