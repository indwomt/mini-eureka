// const router = require('express').Router();




// //   creating API from db.json
// app.get('/notes', (req, res) => {
//     res.json(db)
//   })

// app.post(`/notes`, (req, res) => {
//     const title = req.body.title
//     const text = req.body.text
//     // Creates an object to be added to json file
//     const newNote = {
//         title,
//         text,
//         id: uuid()
//     }
//     // Takes the newly created object (note) and moves it to our db.json file
//     db.push(newNote)
//     fs.writeFile(`./db/db.json`, JSON.stringify(db), (err) => err ? console.error(err) : console.log(`New Note created`))
//     res.json(db)
// })

// app.delete('/notes/:id',(req,res) => {
    
//     const deletedNote = req.params.id;
//     console.log(deletedNote);

//     for( let i = 0; i < db.length; i++) {
//         if(db[i].id === req.params.id) {
//         // Grab all the notes that do not match the deleted note id
//         db = db.filter(note => note.id !== req.params.id )
//         // rewrites file to only include notes that do not match the id of the deleted note
//         fs.writeFile(`./db/db.json`, JSON.stringify(db), (err) => err ? console.error(err) : console.log(`New Note created`))
//         res.json(db)
//     }
//     }

    
// }
// )

// module.exports = router
