import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, type, style, isDisabled}) => {
    return (
        <button type={type} className={`btn btn-${style}`} disabled={isDisabled}>
            {children}
        </button>
    )
};

Button.defaultProps = {
    type: "button",
    style: "primary",
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    style: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;
