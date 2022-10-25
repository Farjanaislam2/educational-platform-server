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

app.get('/details', (req, res)=>{
    res.send(details);
})

app.get('/details/:id', (req, res) =>{
    const id = req.params.id;
    const selectedDetails = details.find(detail => detail._id ===id);
    res.send(selectedDetails);
});

app.get('/categorise/:id', (req, res) =>{
    const id = req.params.id;
    const categories = details.filter(c => c.category_id ===id);
    res.send(categories);

})


app.listen(port, () => {
    console.log('educational server open')
})