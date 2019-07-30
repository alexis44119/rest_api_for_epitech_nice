const Note = require('../models/note.model.js');
const Comment = require('../models/comment.model.js');

// Crée et sauvegarde une nouvelle note
exports.create = async (req, res) => {
    try{
        // Valide la requête
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        // Crée une note
        const note = new Note();
        note.title = req.body.title;
        note.content = req.body.content;
        // Sauvegarde la note dans la base de données
        await note.save();
        res.send(note);
    } catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    }
};

// Retourne toutes les notes dans la database
exports.findAll = async (req, res) => {
    try {
        const note = await Note.find();
        if (!note) {
            return res.status(404).send({
                message: "Note not found"
            });
        }
        res.send(note);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    }
};


// Retrouver une seule note précise
exports.findOne = async (req, res) => {
    try{
        const note = await Note.findOne({ _id: req.params.noteId });
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    } catch(err){
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    }
};

// Met à jour une note en se basant sur son id
exports.update = async (req, res) => {
    try{
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        const note = await Note.findByIdAndUpdate({_id: req.params.noteId}, req.body,
            {
                new: true,
                runValidators: true
            }
        );
        res.send(note);
    } catch(err){
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    }
};

// Supprime une note identifiée avec son id contenu dans l'url
exports.delete = async (req, res) => {
    try{
        const note = await Note.findByIdAndRemove({
            _id: req.params.noteId
        });
        res.send(note);
    } catch(err){
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
};

// Crée un commentaire et l'assigne à une note
exports.comment = async (req, res) =>{
    // Cherche une note
    const note = await Note.findOne({ _id: req.params.noteId });

    // Créé un commentaire
    const comment = new Comment();
    comment.content = req.body.content;
    comment.note = note._id;
    await comment.save();

    // Associe ce commentaire à la note concernée
    note.comments.push(comment._id);
    await note.save();

    res.send(comment);
};

// lis les commentaires d'un post
exports.getComment = async (req, res) =>{
    const note = await Note.findOne({ _id: req.params.noteId }).populate(
        "comments"
    );
    res.send(note);
};