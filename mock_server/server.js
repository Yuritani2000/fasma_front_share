const express = require('express');
const user = require('./jsons/user.json')
const skills_programming = require('./jsons/skills_programming.json')
const skills_design = require('./jsons/skills_design.json')
const skills_math = require('./jsons/skills_math.json')

const app = express();
const port_number = 3001;

// CORS対策
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.get('/', (_, res) => res.send('Fasma Mock Server'));

app.get('/user', (_, res) => {
  res.status(200).json(user)
});

app.get('/skill', (req, res) => {
  const category = req.query.category
  if (category == 1) {
    res.status(200).json(skills_programming)
  } else if (category == 2) {
    res.status(200).json(skills_design)
  } else if (category == 3) {
    res.status(200).json(skills_math)
  } else {
    res.status(200).json(skills_programming)
  }
})

app.listen(port_number, () => console.log('Listening on Port' + port_number));

