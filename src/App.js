import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './QuestionPage';
import ReviewPage from './ReviewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<QuestionPage />} />
        <Route path='/review' element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
