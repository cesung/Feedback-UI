import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import Header from "./components/Header";
import Feedbacks from "./data/Feedbacks";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


const App = () => {

    const [feedbacks, setFeedbacks] = useState(Feedbacks);

    const onFeedbackDelete = (deleteId) => {
        setFeedbacks( (feedbacks) => {
            return (
                feedbacks.filter( feedback => {
                    return feedback.id !== deleteId;
                })
            );
        });
    };

    const onFeedbackUpdated = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbacks((feedbacks) => {
            return (
                [...feedbacks, newFeedback]
            );
        });
    };

    return (
        <>
            <Header text="Feedback UI"/>
            <div className="container">
                <FeedbackForm onFeedbackUpdated={onFeedbackUpdated}/>
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList feedbacks={feedbacks} onFeedbackDelete={onFeedbackDelete}/>
            </div>
        </>
    );
};

export default App;
