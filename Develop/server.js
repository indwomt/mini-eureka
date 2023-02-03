const { randomUUID } = require('crypto');
const { response } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001
const db = require('./db/db.json')
const uuid = require('./public/assets/js/uuid')



// For parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`))

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
    res.sendFile(path.join(__dirname, 'public/notes.html'))
  });

 
//   creating API from db.json
  app.get('/api/notes', (req, res) => {
    res.json(db)
  })

app.post(`/api/notes`, (req, res) => {
    const title = req.body.title
    const text = req.body.text
    // Creates an object to be added to json file
    const newNote = {
        title,
        text,
        id: uuid()
    }
    // Takes the newly created object (note) and moves it to our db.json file
    db.push(newNote)
    fs.writeFile(`./db/db.json`, JSON.stringify(db), (err) => err ? console.error(err) : console.log(`New Note created`))
    res.json(db)
})

