const fs = require('fs')
const path = require('path')

module.exports = app => {

    //create notes variable
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
    })

    // API ROUTES BELOW -----------

    //sets up the api's 'get route'
    app.get('/api/notes', function (req, res) {
        res.json(notes);
    })

    //api post route

    app.post('/api/notes', function (req, res) {
        let newNote = req.body;
        notes.push(newNote);
        updateDB();
        return console.log('added note: ' + newNote.title)
    });

    //gets note with ID

    app.get('/api/notes/:id', function (req, res) {
        res.json(notes[req.params.id])
    });

    //DISPLAY ROUTE -----

    // display notes.html when /notes is hit. 

    app.get('./notes', function (req, res) {
        res.sendFile(path.join(_dirname, './notes.html'))
    });

    // display index.html when all are hit

    app.get('*', function (req, res) {
        res.sendFile(path.join(_dirname, './index.html'))
    });

    //update the json file when note is + or -

    function updateDB() {
        fs.writeFile('./db/db.json', JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        })
    }
}