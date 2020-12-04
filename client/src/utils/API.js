import axios from "axios";

const API = {
    // get all saved books from database
    getBooks: () => {
        return axios.get("/api/books");
    },
    // search for book from user input
    searchBooks: (inputTitle) => {
        return axios.post("/api/books/search", {title: inputTitle});
    },
    // save the book entry to database
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    // remove the book from saved books
    removeBook: (id) => {
        return axios.delete("/api/books/"+id);
    }
};

export default API;