import React from 'react'
import AboutLinkIcon from './AboutLinkIcon';
import PropTypes from 'prop-types'

const Nav = ({backgroundColor, textColor}) => {
    const headerStyle = {
        backgroundColor: backgroundColor,
        text : textColor,
    };
    return <AboutLinkIcon style={headerStyle} />;
};


Nav.defaultProps = {
    backgroundColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

Nav.propTypes = {
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
}; 

export default Nav;