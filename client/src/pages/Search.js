import React from "react";
import Layout from "../components/Layout";
import BookSearch from "../components/BookSearch";
import SearchResults from "../components/SearchResults";

function Search() {
    return (
        <Layout>
            <BookSearch/>
            <SearchResults/>
        </Layout>
    )
}

export default Search;