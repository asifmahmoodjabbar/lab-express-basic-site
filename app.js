// require express and create app with express

const { request } = require('express');
const express = require('express');
const app = express();


// Midelware defined

app.use(express.static('public'));


// Route defined
app.get('/home', (request, response) => {
    response.render('home.html')
});

app.get('/about', (request, response) => {
  response.render('about.html')
});

app.get('/home', (request, response) => {
  response.render('works.html')
});

app.listen(5001, () => {
    console.log('Server is running.')
}); 