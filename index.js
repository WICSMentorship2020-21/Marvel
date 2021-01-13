/* 
  Visit localhost:8000 to see the home page of your webapp
  Add /gallery or /about-us to see those respective pages 
  You may need to restart your app after certain changes you make
  Use npm start to run your code 
*/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Set up routing for webapp
app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/public/index.html');
});

app.get('/about-us', (req, res) => {
    res.sendFile(__dirname + '/public/about/about-us.html');
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/public/gallery/gallery.html');
});



app.listen(port, () => {
  console.log(`Go to localhost:${port} to see your website!`)
});