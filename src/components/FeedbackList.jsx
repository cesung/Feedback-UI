
import React from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbacks, feedbackOnDelete }) => {
    return (feedbacks != null && feedbacks.length > 0) ? (
        <div className='feedback-list'>
            {feedbacks.map( (feedback) => (
                <FeedbackItem key={feedback.id} feedback={feedback} feedbackOnDelete={feedbackOnDelete}/>
            ))}
        </div>
    ) : (
        <p> No Feedback Yet</p>
    )
};

FeedbackList.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList
