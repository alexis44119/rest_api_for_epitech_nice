const express = require('express');
const router = express.Router();

const notes = require('../controllers/note.controller.js');
const users = require('../controllers/user.controller.js');


// Bienvenue
router.get('/', (req, res) => {
    res.json({"message": "API for Epitech."});
});

// Création d'un user
router.post('/register', users.register);

// Create d'une note
router.post('/notes', notes.create);

// Création d'un commentaire
router.post("/notes/:noteId/comment", notes.comment);

// Lecture des commentaire
router.get("/notes/:noteId/comment", notes.getComment);

// Récupération de toutes les notes
router.get('/notes', notes.findAll);

// Récupération d'une note précise
router.get('/notes/:noteId', notes.findOne);

// Modification d'une note
router.put('/notes/:noteId', notes.update);

// Suppression d'une note
router.delete('/notes/:noteId', notes.delete);


module.exports = router;
