import { useState } from "react";
import Header from "./components/Header";
import Feedbacks from "./data/Feedbacks";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";


const App = () => {

    const [feedbacks, setFeedbacks] = useState(Feedbacks);

    const feedbackOnDelete = (delete_id) => {
        console.log(delete_id);
        setFeedbacks( (feedbacks) => {
            return (
                feedbacks.filter( feedback => {
                    return feedback.id !== delete_id;
                })
            );
        })
    }

    return (
        <>
            <Header text="Feedback UI"/>
            <div className="container">
                <FeedbackStats feedbacks={feedbacks}/>
                <FeedbackList feedbacks={feedbacks} feedbackOnDelete={feedbackOnDelete}/>
            </div>
        </>
    );
};

export default App;
