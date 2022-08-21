import { useState, useContext, useEffect} from 'react';
import FeedbackContext from './context/FeedbackContext';
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelector from './RatingSelector';

const FeedbackForm = () => {

    const { onFeedbackAdded, feedbackEdit, onFeedbackUpdate } =
        useContext(FeedbackContext);

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (feedbackEdit.isEdit) {
            setText(feedbackEdit.feedback.text);
            setRating(feedbackEdit.feedback.rating);
            setButtonDisabled(false);
        }
    }, [feedbackEdit]);
    

    const onFeedbackChange = (event) => {
        const text = event.target.value;
        if (text === '') {
            setMessage(null);
            setButtonDisabled(true);
        } else if (text.trim().length < 10) {
            setMessage("Input must be at least 10 characters");
            setButtonDisabled(true);
        } else {
            setMessage(null);
            setButtonDisabled(false);
        }

        setText(text);
    };

    const onFeedbackFormSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating,
            }

            if (feedbackEdit.isEdit === true) {
                onFeedbackUpdate(
                    feedbackEdit.feedback.id, 
                    newFeedback,
                );
            } else {
                onFeedbackAdded(newFeedback);
            }

            setText("")
            setRating(10);
            setButtonDisabled(true);
        }
    };

    return (
        <Card>
            <form onSubmit={onFeedbackFormSubmit}>
                <h2>
                    How would you rate your service with us?
                </h2>
                <RatingSelector rating={rating} setRating={setRating}/>

                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={text} onChange={onFeedbackChange}/>
                    <Button type="submit" isDisabled={buttonDisabled}>Send</Button>
                </div>
                { message && <div className="message">{message}</div> }
            </form>
        </Card>
    )
};

export default FeedbackForm
