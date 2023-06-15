const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// GET Route for retrieving all the notes
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post("/", (req, res) => {
  console.log(req.body);
  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      note_id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully 🚀`);
  } else {
    res.send("Error in adding note");
  }
});

module.exports = notes;
