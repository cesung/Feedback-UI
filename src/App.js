import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from './pages/About';
import Nav from './components/Nav';
import Post from './components/Post';
import {FeedbackProvider} from './components/context/FeedbackContext';


const App = () => {
    return (
        <FeedbackProvider>
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
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/post/:id" element={<Post />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    );
};

export default App;
