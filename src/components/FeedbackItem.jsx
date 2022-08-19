import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import React from 'react';
import Card from './shared/Card'


const FeedbackItem = ( {feedback, onFeedbackDelete} ) => {

    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className="delete" onClick={() => onFeedbackDelete(feedback.id)}> <FaTimes /> </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    feedback: PropTypes.object.isRequired,
}


export default FeedbackItem;
