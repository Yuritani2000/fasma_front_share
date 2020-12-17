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
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (_, res) => res.send('Fasma Mock Server'));

app.get('/user', (_, res) => {
  res.status(200).json(user)
});

app.get('/skills', (req, res) => {
  const category = req.query.category
  if (category == "programming") {
    res.status(200).json(skills_programming)
  } else if (category == "design") {
    res.status(200).json(skills_design)
  } else if (category == "math") {
    res.status(200).json(skills_math)
  } else if (category == "search") {
    res.status(200).json(skills_programming)
  } else {
    res.status(200).send(category + ' is not exist')
  }
})

app.listen(port_number, () => console.log('Listening on Port' + port_number));

