const router = require('express').Router()
const path = require('path')

//   Homepage link
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
      });
    
    //   Notes Link
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
      });

module.exports = router