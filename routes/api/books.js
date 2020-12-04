const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
    .get(booksController.allBooks)
    .post(booksController.saveBook);

// Matches with "/api/books/:id"
router.route("/:id")
    .delete(booksController.remove);

// Matches with "/api/books/search"
router.route("/search")
    .post(booksController.searchBook);

module.exports = router;
