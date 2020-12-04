require('dotenv').config();
const booksDb = require("./booksHelper/booksDb");
const axios = require("axios").default;

const books = {
  allBooks: function (req, res) {
    res.json(booksDb.allBooks);
  },
  saveBook: function (req, res) {
    res.json(booksDb.saveBook);
  },
  remove: function (req, res) {
    res.json(booksDb.remove);
  },
  searchBook: function (req, res) {
    let bookTitle = req.body.title.toLowerCase().replace(/\s/g, "+");
    axios.get(
      'https://www.googleapis.com/books/v1/volumes?q='
      + bookTitle
      + '&key='
      + process.env.GOOGLE_BOOKS_APIKEY
    ).then(response => {
      const bookEntries = response.data.items.map(entry => {
        return {
          title: entry.volumeInfo.title,
          authors: entry.volumeInfo.authors,
          description: entry.volumeInfo.description,
          image: entry.volumeInfo.imageLinks.thumbnail,
          link: entry.volumeInfo.previewLink
        }
      });
      console.log(bookEntries);
      res.json(bookEntries);
    }).catch(err => console.log(err))
  }
}

module.exports = books;