import React, { useState } from 'react';
import QuestionsModal from './QuestionsModal';
import { Link } from 'react-router-dom';

const QuestionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleCheckboxChange = (index, option, checked) => {
    // if(checked) {
    //   setAnswers({ ...answers, [index]: option });
    // }
    const currentAnswers = answers[index] || [];
    const updatedAnswers = checked
      ? [...currentAnswers, option]
      : currentAnswers.filter((item) => item !== option);
    setAnswers({ ...answers, [index]: updatedAnswers });
  };

  console.log(questions, answers);

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4' style={{ width: '24rem' }}>
        <div className='card-body'>
          <form>
            {questions.map((question, index) => (
              <div key={index} className='mb-3'>
                <label>{question.text}</label>
                {question.type === 'paragraph' ? (
                  <textarea
                    className='form-control'
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                  ></textarea>
                ) : (
                  question.options.map((option, i) => (
                    <div key={i} className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        onChange={(e) =>
                          handleCheckboxChange(index, option, e.target.checked)
                        }
                      />
                      <label className='form-check-label'>{option}</label>
                    </div>
                  ))
                )}
              </div>
            ))}
          </form>

          <button
            onClick={() => setShowModal(true)}
            className='btn btn-primary'
          >
            Add Question
          </button>

          {Object.keys(answers).length ? (
            <Link
              to='/review'
              state={{ questions, answers }}
              className='btn btn-primary mt-9'
            >
              Review My Answers
            </Link>
          ) : (
            ''
          )}
          <QuestionsModal
            show={showModal}
            hide={() => setShowModal(false)}
            addQuestion={addQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
