import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    const {
        text,
        backgroundColor,
        textColor,
    } = props;

    const headerStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
    }

    return (
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
};

Header.defaultProps = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;
