import React from 'react'
import FeedbackContext from './context/FeedbackContext';

import { useContext } from 'react';

const FeedbackStats = () => {

    const {feedbacks} = useContext(FeedbackContext);

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

export default FeedbackStats;
