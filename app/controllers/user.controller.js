const User = require('../models/user.model.js');

// Crée et sauvegarde une nouvelle note
exports.register = (req, res) => {
    // Valide la requête
    if(!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "Missing username or password"
        });
    }

    // Crée une note
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    // Sauvegarde le user dans la base de données
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};