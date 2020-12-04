import React, {useState} from "react";
import Layout from "../components/Layout";
import BookSearch from "../components/BookSearch";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

function Search() {
    const [formState, setFormState] = useState({});
    const [booksState, setBooksState] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormState({...formState, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        API.searchBooks(formState)
        .then(res => setBooksState(res.data))
        .catch(err => console.log(err));
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