// Create web server
// Start the server
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server running on port 3000'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use res.render to load up an ejs view file
app.get('/', (req, res) => {
  res.render('comments');
});