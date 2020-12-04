import React, {useState} from "react";
import Layout from "../components/Layout";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    function getSavedBooks() {
        API.getBooks().then(response => {
            // console.log(response);
            setSavedBooks(response);
        })
    }
    getSavedBooks();
    
    return (
        <Layout>
            <SavedBooks savedBooks={savedBooks}/>
        </Layout>
    )
}

export default Saved;