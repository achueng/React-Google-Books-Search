const db = require("../../models");
const mongojs = require("mongojs");

// Defining methods for the booksController
const booksDb = {
    allBooks: function(req, res) {
        db.Book
        .find()
        .then(booksData => res.json(booksData))
        .catch(err => res.status(422).json(err));
    },
    saveBook: function(req, res) {
        db.Book
        .create(req.body)
        .then(booksData => res.json(booksData))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book
        .findById({ _id:mongojs.ObjectId(req.params.id) })
        .then(book => book.remove())
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    }
};

module.exports = booksDb;