import {React, createContext, useState } from 'react'
import Feedbacks from '../../data/Feedbacks';
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedbacks, setFeedbacks] = useState(Feedbacks);

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

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                onFeedbackDelete,
                onFeedbackAdded,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};


export default FeedbackContext;