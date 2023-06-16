const express= require('express');
const {db,connectdb}=require('./database');
const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
app.get('/',(req,res)=>{
return res.send('Hello world');
});

app.get('/questions', (req, res) => {
  try {
    const query = 'SELECT * FROM feedback';
    db.query(query, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch the questions' });
      } else {
        // const questions = result.map((row) => row.question);
        res.json( result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch the questions' });
  }
});
app.post('/feedback', (req, res) => {
  const answers = req.body;
  console.log(answers);

  const query = 'UPDATE feedback SET feedback = ? WHERE feedback_id = ?';

  if (Array.isArray(answers)) {
    answers.forEach((answer) => {
      try {
      db.query(query, [answer.answer, answer.feedback_id]);
      } catch (error) {
        console.error('Error updating feedback:', error);
      }
    });
  } else {
    console.error('Invalid format: answers must be an array');
  }

  return res.status(200).json({success:true,message:'feedback inserted successfully'});
});

//http://localhost:5000
app.listen(5000,(req,res)=>{
  console.log('server is running on port 5000');
  connectdb();
});