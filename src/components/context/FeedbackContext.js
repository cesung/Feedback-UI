import {React, createContext, useState } from 'react'
import Feedbacks from '../../data/Feedbacks';
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedbacks, setFeedbacks] = useState(Feedbacks);
    const [feedbackEdit, setFeedbackEdit] = useState({
        feedback : {},
        isEdit : false,
    });

    const onFeedbackDelete = (deleteId) => {
        setFeedbacks((feedbacks) => {
            return feedbacks.filter((feedback) => {
                return feedback.id !== deleteId;
            });
        });
    };

    const onFeedbackAdded = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbacks((feedbacks) => {
            return [...feedbacks, newFeedback];
        });
    };

    const onFeedbackEdit = (feedback) => {
        setFeedbackEdit({feedback, isEdit : true});
    };

    const onFeedbackUpdate = (updateId, updatedFeedback) => {
        setFeedbacks(
            feedbacks.map((feedback) =>
                feedback.id === updateId
                    ? { ...feedback, ...updatedFeedback }
                    : feedback
            )
        );

        setFeedbackEdit({
            feedback: {},
            isEdit: false,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                feedbackEdit,
                onFeedbackDelete,
                onFeedbackAdded,
                onFeedbackEdit,
                onFeedbackUpdate,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};


export default FeedbackContext;