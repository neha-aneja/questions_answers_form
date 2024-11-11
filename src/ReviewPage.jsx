import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ReviewPage = () => {
  const location = useLocation();
  const { questions, answers } = location.state || {};

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4' style={{ width: '24rem' }}>
        <div className='card-body'>
          {questions.map((data, index) => (
            <div key={index} className='mb-3'>
              <h5>{data.text}</h5>
              <p>
                {Array.isArray(answers[index])
                  ? answers[index].join(', ')
                  : answers[index]}
              </p>
            </div>
          ))}
          <Link to='/' className='link-underline-primary'>
            Back to Forms Builder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
