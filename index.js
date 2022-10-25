const express = require('express');
const app =express();
const port =process.env.port || 5000;


const courses= require('./data/courses.json') 

app.get('/', (req, res) => {
    res.send('api rinning')
}) ;
app.get('/course-details', (req, res) => {
    res.send(courses)
}) ;


app.listen(port, () => {
    console.log('educational server open')
})