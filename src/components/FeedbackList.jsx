import React from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from './context/FeedbackContext';

import { motion, AnimatePresence } from "framer-motion";
import { useContext } from 'react'

const FeedbackList = () => {

    const {feedbacks} = useContext(FeedbackContext);

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
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    ) : (
        <p> No Feedback Yet</p>
    );
};

export default FeedbackList;
