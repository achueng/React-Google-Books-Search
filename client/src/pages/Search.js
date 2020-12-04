import React, {useState} from "react";
import Layout from "../components/Layout";
import BookSearch from "../components/BookSearch";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

function Search() {
    const [formState, setFormState] = useState({});
    const [booksState, setBooksState] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.searchBook(formState)
        .then(res => {
            const searchedBooks = res.data.map(entry => {
                entry.authors = entry.authors.join(', ');
                return entry;
            });
            setBooksState(searchedBooks)
        }).catch(err => console.log(err));
    }

    return (
        <Layout>
            <BookSearch
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
            <SearchResults searchedBooks={booksState}/>
        </Layout>
    )
}

export default Search;