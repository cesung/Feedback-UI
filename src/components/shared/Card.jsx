import PropsTypes from 'prop-types'
import React from 'react'

const Card = ({children}) => {
    return (
        <div className='card'>{children}</div>
    );
}

Card.propsTypes = {
    children: PropsTypes.node.isRequired,
}

export default Card;
