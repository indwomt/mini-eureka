const { response } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001
const db = require('./db/db.json')



// For parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Set up port to connect
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });


//   Homepage link
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public/index.html'));
  });

//   Notes Link
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
  });


//   creating API from db.json
  app.get('/api/notes', (req, res) => {
    res.json(db)
  })