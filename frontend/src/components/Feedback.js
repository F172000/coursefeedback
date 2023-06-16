// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Feedback= () => {
//   const [questions, setQuestions] = useState([]);
//   const [feedback, setFeedback] = useState({});

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/questions');
//       setQuestions(response.data.questions);
//       initializeFeedbackState(response.data.questions);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const initializeFeedbackState = (questions) => {
//     const initialState = {};
//     questions.forEach((question) => {
//       initialState[question] = '';
//     });
//     setFeedback(initialState);
//   };

//   const handleOptionChange = (question, option) => {
//     setFeedback((prevFeedback) => ({
//       ...prevFeedback,
//       [question]: option,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// console.log(feedback)
//     try {
//       await axios.post('http://localhost:5000/api/feedback', {feedback });
//       // Handle success
//       console.log('Feedback submitted successfully');
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   return (
//     <div>
//       {questions.map((question) => (
//         <div key={question}>
//           <h3>Question: {question}</h3>
//           <form onSubmit={handleSubmit}>
//             <label>
//               <input
//                 type="radio"
//                 value="excellent"
//                 checked={feedback[question] === 'excellent'}
//                 onChange={() => handleOptionChange(question.feedback_id, 'excellent')}
//               />
//               Excellent
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="satisfactory"
//                 checked={feedback[question] === 'satisfactory'}
//                 onChange={() => handleOptionChange(question, 'satisfactory')}
//               />
//               Satisfactory
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="good"
//                 checked={feedback[question] === 'good'}
//                 onChange={() => handleOptionChange(question, 'good')}
//               />
//               Good
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="average"
//                 checked={feedback[question] === 'average'}
//                 onChange={() => handleOptionChange(question, 'average')}
//               />
//               Average
//             </label>
//           </form>
//         </div>
//       ))}
//       <button type="submit" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Feedback;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Feedback = () => {
//   const [questions, setQuestions] = useState([]);
//   const [feedback, setFeedback] = useState([]);

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/questions');
//       setQuestions(response.data.questions);
//       initializeFeedbackState(response.data.questions);
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//     }
//   };

//   const initializeFeedbackState = (questions) => {
//     const initialState = questions.map((question) => ({
//       question_id: question.question_id,
//       answer: '',
//     }));
//     setFeedback(initialState);
//   };

//   const handleOptionChange = (questionId, option) => {
//     setFeedback((prevFeedback) =>
//       prevFeedback.map((answer) =>
//         answer.question_id === questionId ? { ...answer, answer: option } : answer
//       )
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(feedback);
//     try {
//       await axios.post('http://localhost:5000/feedback', { answers: feedback });
//       console.log('Feedback submitted successfully');
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {questions.map((question) => (
//           <div key={question.questionid}>
//             <h3>Question: {question.question}</h3>
//             <label>
//               <input
//                 type="radio"
//                 value="excellent"
//                 checked={feedback.find((answer) => answer.question_id === question.questionid)?.answer === 'excellent'}
//                 onChange={() => handleOptionChange(question.questionid, 'excellent')}
//               />
//               Excellent
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="satisfactory"
//                 checked={feedback.find((answer) => answer.question_id === question.questionid)?.answer === 'satisfactory'}
//                 onChange={() => handleOptionChange(question.questionid, 'satisfactory')}
//               />
//               Satisfactory
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="good"
//                 checked={feedback.find((answer) => answer.question_id === question.questionid)?.answer === 'good'}
//                 onChange={() => handleOptionChange(question.questionid, 'good')}
//               />
//               Good
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="fair"
//                 checked={feedback.find((answer) => answer.question_id === question.questionid)?.answer === 'fair'}
//                 onChange={() => handleOptionChange(question.questionid, 'fair')}
//               />
//               Fair
//             </label>
//           </div>
//         ))}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Feedback;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card,Button } from '@mui/material';

const Feedback = () => {
  const [questions, setQuestions] = useState([]);
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/questions');
        setQuestions(response.data);
        initializeFeedbackState(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchQuestions();
  }, []);
  
    const buttonStyles = {
      backgroundColor: '#346448',
      marginRight:'10.5em',
      padding:'px 15px',
      '&:hover': {
        backgroundColor: '#346448', // Ensures hover doesn't change the color
      },
    };

  const initializeFeedbackState = (questions) => {
    const initialState = questions.map((question) => ({
      feedback_id: question.feedback_id,
      answer: '',
    }));
    setFeedback(initialState);
  };

  const handleOptionChange = (feedbackId, option) => {
    setFeedback((prevFeedback) =>
      prevFeedback.map((answer) =>
        answer.feedback_id === feedbackId ? { ...answer, answer: option } : answer
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(feedback);
    try {
      const result=await axios.post('http://localhost:5000/feedback', feedback);
      if(result.status!==200){
        alert("err");
      }
      console.log(result.data.message);
      alert(result.data.message);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };
  const setcolor={
    color:'#346448'
  };

  return (
    <div>
    <Card style={{ padding: '30px',marginTop:'30px',marginBottom:'30px',marginLeft:'20px',marginRight:'20px' }}>
      <div className='row'>
      <div className='col-md-12 d-flex justify-content-center mb-5 mt-5 coursename'>
            SE242SP23 Software Engineering (Course Feedback)
          </div>
    </div>
    <div class="container">
      <form>
        {questions.map((question) => (
          <div key={question.feedback_id}>
            <h4 style={setcolor}>{question.question}</h4>
            <label style={setcolor}>
              <input
                type="radio"
                value="Strongly Agree"
                checked={feedback.find((answer) => answer.feedback_id === question.feedback_id)?.answer === 'Strongly Agree'}
                onChange={() => handleOptionChange(question.feedback_id, 'Strongly Agree')}
                className='radiostyles'
              />
              Strongly Agree
            </label>
            <label style={setcolor}>
              <input
                type="radio"
                value="Agree"
                checked={feedback.find((answer) => answer.feedback_id === question.feedback_id)?.answer === 'Agree'}
                onChange={() => handleOptionChange(question.feedback_id, 'Agree')}
                className='radiostyles'
              />
              Agree
            </label>
            <label style={setcolor}>
              <input
                type="radio"
                value="good"
                checked={feedback.find((answer) => answer.feedback_id === question.feedback_id)?.answer === 'good'}
                onChange={() => handleOptionChange(question.feedback_id, 'good')}
                className='radiostyles'
              />
              Good
            </label>
            <label style={setcolor}>
              <input
                type="radio"
                value="Disagree"
                checked={feedback.find((answer) => answer.feedback_id === question.feedback_id)?.answer === 'Disagree'}
                onChange={() => handleOptionChange(question.feedback_id, 'Disagree')}
                className='radiostyles'
              />
              Disagree
            </label>
            <label>
              <input
                type="radio"
                value="Strongly Disagree"
                checked={feedback.find((answer) => answer.feedback_id === question.feedback_id)?.answer === 'Strongly Disagree'}
                onChange={() => handleOptionChange(question.feedback_id, 'Strongly Disagree')}
                className='radiostyles'
              />
              Strongly Disagree
            </label>
          </div>
        ))}
      </form>
      </div>
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-end'>
      <Button style={buttonStyles} onClick={handleSubmit} variant='contained' type="submit" sx={{marginTop:'5em'}}>Submit</Button>
      </div>
      </div>
      </Card>
    </div>
  );
};

export default Feedback;
