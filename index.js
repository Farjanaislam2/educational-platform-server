const express = require('express');
const app =express();
const cors = require('cors')
const port =process.env.port || 5000;

app.use(cors());

const courses= require('./data/courses.json')
const details = require('./data/course-detail.json') 

app.get('/', (req, res) => {
    res.send('api rinning')
}) ;

app.get('/course-details', (req, res) => {
    res.send(courses)
}) ;

app.get('/details/:id', (req, res) =>{
    const id = req.params.id;
    const selectedDetails = details.find(n => n._id ===id);
    res.send(selectedDetails);
})


app.listen(port, () => {
    console.log('educational server open')
})