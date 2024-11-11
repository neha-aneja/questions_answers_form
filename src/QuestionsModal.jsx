import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const QuestionsModal = ({ show, hide, addQuestion }) => {
  const [questionText, setQuestionText] = useState('');
  const [answerType, setAnswerType] = useState('paragraph');
  const [options, setOptions] = useState(['']);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = () => {
    if (questionText) {
      addQuestion({
        text: questionText,
        type: answerType,
        options: answerType === 'checkbox' ? options : null,
      });
      setQuestionText('');
      setAnswerType('paragraph');
      setOptions(['']);
      hide();
    }
  };

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Question</Form.Label>
            <Form.Control
              type='text'
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Answer Type</Form.Label>
            <Form.Select
              value={answerType}
              onChange={(e) => setAnswerType(e.target.value)}
            >
              <option value='paragraph'>Paragraph</option>
              <option value='checkbox'>Checkbox List</option>
            </Form.Select>
          </Form.Group>
          {answerType === 'checkbox' &&
            options.map((option, index) => (
              <Form.Group key={index}>
                <Form.Label>Option {index + 1}</Form.Label>
                <Form.Control
                  type='text'
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </Form.Group>
            ))}
          {answerType === 'checkbox' && (
            <Button
              onClick={handleAddOption}
              variant='secondary'
              className='mt-2'
            >
              + Add another option
            </Button>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionsModal;
