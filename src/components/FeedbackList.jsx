import React from 'react';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedbacks, onFeedbackDelete }) => {
    return feedbacks != null && feedbacks.length > 0 ? (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbacks.map((feedback) => (
                    <motion.div
                        key = {feedback.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.4 }}
                    >
                        <FeedbackItem
                            key={feedback.id}
                            feedback={feedback}
                            onFeedbackDelete={onFeedbackDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    ) : (
        <p> No Feedback Yet</p>
    );
};

FeedbackList.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList;
