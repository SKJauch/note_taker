const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newNote = {
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/notes.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;
