import { v4 as uuidv4 } from 'uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header";
import Feedbacks from "./data/Feedbacks";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from './pages/About';
import Nav from './components/Nav';
import Post from './components/Post';


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
        <Router>
            <div className="nav-container">
                <Header text="Feedback UI" />
                <Nav />
            </div>
            <div className="container">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <FeedbackForm
                                    onFeedbackUpdated={onFeedbackUpdated}
                                />
                                <FeedbackStats feedbacks={feedbacks} />
                                <FeedbackList
                                    feedbacks={feedbacks}
                                    onFeedbackDelete={onFeedbackDelete}
                                />
                            </>
                        }
                    ></Route>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/post/:id" element={<Post />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
