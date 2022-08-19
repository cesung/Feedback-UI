import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = ({ feedbacks }) => {

    const average = feedbacks.reduce((acc, feedback) => {
        return acc + feedback.rating
    }, 0) / feedbacks.length;

    return (
        <div className='feedback-stats'>
            <h4>{feedbacks.length} review{feedbacks.length > 1 ? 's' : null}</h4>
            <h4>Rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.]0$/, '')}</h4>
        </div>
    )
};

FeedbackStats.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackStats;
